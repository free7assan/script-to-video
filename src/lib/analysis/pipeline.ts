import { getSupabaseAdmin } from "../supabase/client";
import { getChannelInfo, getChannelVideos } from "../youtube/channel";
import { getVideoTranscript } from "../youtube/transcript";
import { callLLM } from "./llm";
import {
  VIDEO_ANALYSIS_SYSTEM_PROMPT,
  BLUEPRINT_SYNTHESIS_SYSTEM_PROMPT,
} from "./prompts";
import type { Channel, AnalysisJob, VideoAnalysis } from "@/types";
import { delay } from "../utils";
import type { Blueprint } from "@/types";

export async function analyzeSingleVideo(
  youtubeVideoId: string,
  title?: string
): Promise<{ analysis: VideoAnalysis; transcript: string } | null> {
  const transcriptData = await getVideoTranscript(youtubeVideoId);
  if (!transcriptData) return null;

  const analysis = await callLLM(
    VIDEO_ANALYSIS_SYSTEM_PROMPT,
    `Title: ${title || "(unknown)"}\n\nTranscript:\n${transcriptData.transcript.slice(0, 15000)}`
  ) as VideoAnalysis;

  return { analysis, transcript: transcriptData.transcript };
}

async function checkJobSignal(jobId: string): Promise<"continue" | "paused" | "cancelled"> {
  const { data: job } = await getSupabaseAdmin()
    .from("analysis_jobs")
    .select("status, error_message")
    .eq("id", jobId)
    .single();

  if (!job) return "continue";

  if (job.status === "cancelled") return "cancelled";
  if (job.status === "paused") return "paused";

  const msg = job.error_message || "";
  if (msg === "__CANCEL__") return "cancelled";
  if (msg === "__PAUSE__") return "paused";

  return "continue";
}

async function waitIfPaused(jobId: string) {
  while (true) {
    const signal = await checkJobSignal(jobId);
    if (signal === "cancelled") {
      throw new Error("Analysis cancelled");
    }
    if (signal === "continue") return;
    await delay(3000);
  }
}

export async function runAnalysisPipeline(
  channelId: string,
  videoLimit = 1,
  options?: { mode?: "full" | "continue"; existingJobId?: string }
) {
  const mode = options?.mode || "full";
  const existingJobId = options?.existingJobId;

  // For full retry: clear existing analysis data
  if (mode === "full") {
    // Delete from video_analyses for videos belonging to this channel
    await getSupabaseAdmin()
      .from("videos")
      .update({ transcript: null, transcript_language: null })
      .eq("channel_id", channelId);

    const { data: channelVideos } = await getSupabaseAdmin()
      .from("videos")
      .select("id")
      .eq("channel_id", channelId);

    if (channelVideos && channelVideos.length > 0) {
      const ids = channelVideos.map((v: any) => v.id);
      await getSupabaseAdmin()
        .from("video_analyses")
        .delete()
        .in("video_id", ids);
    }
  }

  // Create or reuse analysis job
  const jobId = existingJobId || crypto.randomUUID();

  if (!existingJobId) {
    const { error: insertError } = await getSupabaseAdmin().from("analysis_jobs").insert({
      id: jobId,
      channel_id: channelId,
      status: "pending",
      progress: 0,
      total_videos: 0,
      processed_videos: 0,
    });

    if (insertError) {
      console.warn("Pipeline: fallback insert without status constraint, using null status");
    }
  } else {
    await getSupabaseAdmin()
      .from("analysis_jobs")
      .update({ status: "pending", progress: 0, error_message: null })
      .eq("id", jobId);
    await getSupabaseAdmin()
      .from("channels")
      .update({ status: "fetching", error_message: null })
      .eq("id", channelId);
  }

  const updateJob = (updates: Partial<AnalysisJob>) =>
    getSupabaseAdmin().from("analysis_jobs").update(updates).eq("id", jobId);
  const updateChannel = (updates: Partial<Channel>) =>
    getSupabaseAdmin().from("channels").update(updates).eq("id", channelId);

  try {
    // Phase 1: Fetch channel info
    await updateJob({ status: "fetching_videos", progress: 5 });

    const { data: channel } = await getSupabaseAdmin()
      .from("channels")
      .select("*")
      .eq("id", channelId)
      .single();

    if (!channel) throw new Error("Channel not found");

    if (mode === "full" || !channel.name) {
      const channelInfo = await getChannelInfo(channel.youtube_channel_id);
      await updateChannel({
        name: channelInfo.name,
        thumbnail_url: channelInfo.thumbnail_url,
        subscriber_count: channelInfo.subscriber_count,
        description: channelInfo.description,
      });
    }

    await waitIfPaused(jobId);

    // Phase 2: Fetch videos
    await updateJob({ status: "fetching_videos", progress: 10 });

    let videos: { youtube_video_id: string; title: string; description: string | null; published_at: string }[];
    if (mode === "continue") {
      const { data: existingVideos } = await getSupabaseAdmin()
        .from("videos")
        .select("youtube_video_id, title, description, published_at")
        .eq("channel_id", channelId)
        .order("published_at", { ascending: false });
      if (existingVideos && existingVideos.length > 0) {
        videos = existingVideos;
      } else {
        videos = await getChannelVideos(channel.youtube_channel_id, videoLimit);
      }
    } else {
      videos = await getChannelVideos(channel.youtube_channel_id, videoLimit);
    }
    const totalVideos = videos.length;

    await updateJob({
      total_videos: totalVideos,
      status: "fetching_transcripts",
      progress: 15,
    });

    const videoRecords = videos.map((v) => ({
      channel_id: channelId,
      youtube_video_id: v.youtube_video_id,
      title: v.title,
      description: v.description,
      published_at: v.published_at,
    }));

    await getSupabaseAdmin().from("videos").upsert(videoRecords, {
      onConflict: "youtube_video_id",
      ignoreDuplicates: true,
    });

    await waitIfPaused(jobId);

    // Phase 3 & 4: Fetch transcripts and analyze
    await updateJob({ status: "fetching_transcripts", progress: 20 });

    const analyzedVideos: { title: string; analysis: VideoAnalysis }[] = [];
    let processed = 0;

    // On continue, load existing analyzed videos from video_analyses table
    if (mode === "continue") {
      const { data: existingAnalyses } = await getSupabaseAdmin()
        .from("videos")
        .select("id, title")
        .eq("channel_id", channelId);

      if (existingAnalyses) {
        const videoIds = existingAnalyses.map((v: any) => v.id);
        if (videoIds.length > 0) {
          const { data: analyses } = await getSupabaseAdmin()
            .from("video_analyses")
            .select("video_id, analysis_data")
            .in("video_id", videoIds);

          if (analyses) {
            const analysisMap = new Map(analyses.map((a: any) => [a.video_id, a.analysis_data]));
            for (const v of existingAnalyses) {
              const a = analysisMap.get(v.id);
              if (a) {
                analyzedVideos.push({ title: v.title, analysis: a as VideoAnalysis });
              }
            }
          }
        }
      }
    }

    for (const video of videos) {
      await waitIfPaused(jobId);

      if (analyzedVideos.some(v => v.title === video.title)) {
        processed++;
        await updateJob({
          status: "analyzing_videos",
          progress: 20 + Math.round((processed / totalVideos) * 60),
          processed_videos: processed,
        });
        continue;
      }

      const transcriptData = await getVideoTranscript(video.youtube_video_id);
      processed++;

      if (transcriptData) {
        const { data: dbVideo } = await getSupabaseAdmin()
          .from("videos")
          .update({
            transcript: transcriptData.transcript,
            transcript_language: transcriptData.language,
          })
          .eq("youtube_video_id", video.youtube_video_id)
          .select("id")
          .single();

        await updateJob({
          status: "analyzing_videos",
          progress: 20 + Math.round((processed / totalVideos) * 60),
          processed_videos: processed,
        });

        try {
          const result = await analyzeSingleVideo(video.youtube_video_id, video.title);
          if (result) {
            if (dbVideo) {
              await getSupabaseAdmin()
                .from("video_analyses")
                .upsert({
                  video_id: dbVideo.id,
                  analysis_data: result.analysis,
                }, { onConflict: "video_id" });
            }

            analyzedVideos.push({
              title: video.title,
              analysis: result.analysis,
            });
          }
        } catch {
          // Skip if analysis fails for individual video
        }
      }

      await delay(200);
    }

    await waitIfPaused(jobId);

    // Phase 5: Synthesize blueprint
    await updateJob({
      status: "synthesizing",
      progress: 85,
    });

    const analysisSummary = analyzedVideos
      .map((v, i) => {
        const a = v.analysis || {} as any;
        const parts: string[] = [];
        if (a.hook_style) parts.push(`Hook style: ${a.hook_style}`);
        if (a.tone) parts.push(`Tone: ${a.tone}`);
        if (a.cta_style) parts.push(`CTA style: ${a.cta_style}`);
        if (Array.isArray(a.structure)) parts.push(`Structure: ${a.structure.join(", ")}`);
        if (Array.isArray(a.key_techniques)) parts.push(`Key techniques: ${a.key_techniques.join(", ")}`);
        if (a.summary) parts.push(`Summary: ${a.summary}`);
        return `Video ${i + 1}: "${v.title}"\n${parts.join("\n")}`;
      })
      .filter(s => s.includes("\n"))
      .join("\n\n");

    const requiredBlueprintKeys = ["channel_summary", "video_structure", "script_methodology", "content_themes", "engagement_patterns"];

    async function synthesizeBlueprint(extraInstruction = ""): Promise<unknown> {
      const prompt = extraInstruction
        ? `${BLUEPRINT_SYNTHESIS_SYSTEM_PROMPT}\n\nIMPORTANT: ${extraInstruction}`
        : BLUEPRINT_SYNTHESIS_SYSTEM_PROMPT;
      return callLLM(
        prompt,
        `Channel: ${channel.name}\nDescription: ${channel.description}\n\nAnalyses of ${analyzedVideos.length} videos:\n\n${analysisSummary}`,
        undefined,
        8192
      );
    }

    let blueprint = await synthesizeBlueprint();
    let firstAttemptKeys: string | null = null;

    const missingKeys = requiredBlueprintKeys.filter(k => !blueprint || typeof blueprint !== "object" || !(k in blueprint));
    if (missingKeys.length > 0) {
      firstAttemptKeys = blueprint && typeof blueprint === "object"
        ? Object.keys(blueprint as object).join(", ")
        : String(typeof blueprint);
      console.warn(
        `[Pipeline] Blueprint missing keys: ${missingKeys.join(", ")}.\n` +
        `Actual LLM output keys: ${firstAttemptKeys}`
      );
      blueprint = await synthesizeBlueprint(
        `Your response MUST contain exactly these top-level keys: ${requiredBlueprintKeys.join(", ")}. Do NOT include any other top-level keys.`
      );
      const retryMissing = requiredBlueprintKeys.filter(k => !blueprint || typeof blueprint !== "object" || !(k in blueprint));
      if (retryMissing.length > 0) {
        const secondAttemptKeys = blueprint && typeof blueprint === "object"
          ? Object.keys(blueprint as object).join(", ")
          : String(typeof blueprint);
        console.error(
          `[Pipeline] Blueprint synthesis failed after 2 attempts.\n` +
          `First attempt keys: ${firstAttemptKeys}\n` +
          `Second attempt keys: ${secondAttemptKeys}`
        );
        throw new Error(
          `Blueprint synthesis failed after 2 attempts. Missing: ${retryMissing.join(", ")}. ` +
          `The LLM returned an unexpected format. Try a different AI model from the Admin page.`
        );
      }
    }

    // Write blueprint to blueprints table instead of channels.blueprint
    await getSupabaseAdmin()
      .from("blueprints")
      .upsert({
        channel_id: channelId,
        blueprint_data: blueprint as Blueprint,
      }, { onConflict: "channel_id" });

    await updateChannel({
      status: "completed",
    });

    await updateJob({
      status: "completed",
      progress: 100,
      completed_at: new Date().toISOString(),
      model_used: "big-pickle",
    });
  } catch (error: any) {
    const isCancelled = error.message === "Analysis cancelled";

    await updateChannel({
      status: isCancelled ? "cancelled" : "error",
      error_message: isCancelled ? null : error.message,
    });
    await updateJob({
      status: isCancelled ? "cancelled" : "error",
      error_message: isCancelled ? "__CANCEL__" : error.message,
    });
  }
}
