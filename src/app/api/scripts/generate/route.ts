import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/client";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { callLLM } from "@/lib/analysis/llm";
import { getVideoTranscript } from "@/lib/youtube/transcript";
import { google } from "googleapis";
import { checkScriptLimit, limitError } from "@/lib/subscription";
import {
  SCRIPT_GENERATION_SYSTEM_PROMPT,
  STANDARD_SCRIPT_SYSTEM_PROMPT,
  STANDARD_HEADINGS_PROMPT,
  VISUAL_INSTRUCTION,
} from "@/lib/analysis/script-prompt";

export async function POST(request: NextRequest) {
  let body: {
    channel_id?: string;
    saved_analysis_id?: string;
    description?: string;
    duration_minutes?: number;
    sources?: { title: string; url: string }[];
    mode?: "headings" | "full" | "standard";
    headings?: { heading: string; estimated_duration_seconds?: number }[];
    include_visuals?: boolean;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { channel_id, saved_analysis_id, description, duration_minutes, sources, mode, headings, include_visuals } = body;

  if (!description) {
    return NextResponse.json(
      { error: "description is required" },
      { status: 400 }
    );
  }

  const targetDuration = Math.min(Math.max(duration_minutes ?? 10, 1), 60);

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Check script limit when generating full script (not headings-only)
  if (headings && headings.length > 0 && user) {
    const { allowed } = await checkScriptLimit(user.id);
    if (!allowed) {
      return NextResponse.json(limitError("scripts"), { status: 403 });
    }
  }

  const visualsBlock = include_visuals ? `\n\n${VISUAL_INSTRUCTION}` : "";

  async function searchInternetSources(query: string) {
    const sources: { ref: string; url: string }[] = [];
    const seen = new Set<string>();

    // Google Custom Search for general web results
    try {
      const apiKey = process.env.GOOGLE_API_KEY;
      const cseId = process.env.GOOGLE_CSE_ID;
      if (apiKey && cseId) {
        const customsearch = google.customsearch("v1");
        const res = await customsearch.cse.list({
          auth: apiKey,
          cx: cseId,
          q: query,
          num: 8,
        });
        for (const item of res.data.items || []) {
          const url = item.link;
          const title = item.title;
          if (url && title && !seen.has(url)) {
            seen.add(url);
            sources.push({ ref: title, url });
          }
        }
      }
    } catch {}

    // Also search YouTube for video content
    try {
      const ytApiKey = process.env.YOUTUBE_API_KEY;
      if (ytApiKey) {
        const youtube = google.youtube("v3");
        const ytRes = await youtube.search.list({
          key: ytApiKey,
          part: ["snippet"],
          q: query,
          type: ["video"],
          maxResults: 3,
          relevanceLanguage: "en",
        });
        for (const item of ytRes.data.items || []) {
          const vid = item.id?.videoId;
          if (vid && item.snippet?.title) {
            const url = `https://youtube.com/watch?v=${vid}`;
            if (!seen.has(url)) {
              seen.add(url);
              sources.push({ ref: item.snippet.title, url });
            }
          }
        }
      }
    } catch {}

    return sources;
  }

  async function fetchSourceContent(url: string): Promise<string | null> {
    try {
      // YouTube: transcript
      const ytMatch = url.match(/[?&]v=([^&]+)/);
      if (ytMatch) {
        const transcript = await getVideoTranscript(ytMatch[1]);
        if (transcript?.transcript) return transcript.transcript.slice(0, 4000);
        return null;
      }

      // General web: fetch and extract text
      const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; GoScript/1.0)" },
        signal: AbortSignal.timeout(5000),
      });
      const html = await res.text();
      const text = html
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
        .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "")
        .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "")
        .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/&[^;]+;/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      return text.slice(0, 4000) || null;
    } catch {
      return null;
    }
  }

  const searchQuery = sources && sources.length > 0
    ? sources.map((s) => s.title || s.url).join(" ")
    : description;

  async function buildResearchContext() {
    const webSources = await searchInternetSources(searchQuery);
    const allRefs = [...(sources || []), ...webSources];

    const seen = new Set<string>();
    const uniqueRefs = allRefs.filter((r) => {
      if (seen.has(r.url)) return false;
      seen.add(r.url);
      return true;
    });

    // Fetch content from each source
    const contentChunks: string[] = [];
    const sourceList: { title: string; url: string }[] = [];

    for (let i = 0; i < uniqueRefs.length; i++) {
      const ref = uniqueRefs[i];
      const title = "title" in ref ? ref.title : ref.ref;
      sourceList.push({ title: title || "Untitled", url: ref.url });

      const content = await fetchSourceContent(ref.url);
      if (content) {
        contentChunks.push(
          `[Source ${i + 1}: ${title || ref.url}](${ref.url})\n${content}`
        );
      }
    }

    return {
      sourcesBlock: contentChunks.length > 0
        ? `\n\nResearch material gathered from the web (use this as the factual basis for the script):\n\n${contentChunks.join("\n\n---\n\n")}`
        : "",
      sourceList,
    };
  }

  try {
    // --- Headings generation ---
    if (mode === "headings") {
      const { sourcesBlock, sourceList } = await buildResearchContext();

      // Video analysis context
      if (saved_analysis_id) {
        const { data: sa } = await getSupabaseAdmin()
          .from("saved_analyses")
          .select("*")
          .eq("id", saved_analysis_id)
          .single();

        if (!sa) {
          return NextResponse.json({ error: "Saved analysis not found" }, { status: 404 });
        }

        if (user && sa.user_id !== user.id) {
          return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const baseContext = `Video Analysis for "${sa.video_title || "Untitled"}":\n${JSON.stringify(sa.analysis_data, null, 2)}\n\nMy video description:\n${description}`;

        const result = await callLLM(
          `You are a professional video script structure planner. Given a video analysis and a description, suggest section headings for the script.

You MUST return a JSON object with this exact structure:
{
  "headings": [
    {
      "heading": "string - section heading (e.g. 'The Problem', 'How It Works', 'Real Examples')",
      "estimated_duration_seconds": "number - how long this section should roughly take"
    }
  ]
}

The headings should follow the video's analyzed structure patterns. Scale section count and size with duration:
- 5 minutes: 3-4 sections
- 10 minutes: 5-7 sections
- 15 minutes: 7-9 sections
- 20 minutes: 10-12 sections
Do NOT include Hook or Call to Action as sections — those are separate from the body sections.

CRITICAL: The sum of all estimated_duration_seconds must approximately equal the target duration in seconds (within 10%).`,
          `${baseContext}${sourcesBlock}\n\nTarget duration: ${targetDuration} minutes\n\nSuggest section headings for this video script following the analyzed video's methodology. The total should fit within ${targetDuration} minutes. Base your suggestions on the research material provided above, not on general knowledge.`
        ) as any;

        return NextResponse.json({ headings: result.headings, sourceVideos: sourceList });
      }

      if (channel_id) {
        const { data: channel } = await getSupabaseAdmin()
          .from("channels")
          .select("name, youtube_channel_id, user_id")
          .eq("id", channel_id)
          .single();

        if (!channel) {
          return NextResponse.json({ error: "Channel not found" }, { status: 404 });
        }

        if (user && channel.user_id && channel.user_id !== user.id) {
          return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const { data: bp } = await getSupabaseAdmin()
          .from("blueprints")
          .select("blueprint_data")
          .eq("channel_id", channel_id)
          .single();

        const blueprint = bp?.blueprint_data;

        if (!blueprint) {
          return NextResponse.json(
            { error: "Channel has no blueprint. Run analysis first." },
            { status: 400 }
          );
        }

        const baseContext = `Channel: ${channel.name}\n\nChannel Blueprint:\n${JSON.stringify(blueprint, null, 2)}\n\nMy video description:\n${description}`;

        const result = await callLLM(
          `You are a professional video script structure planner. Given a channel's blueprint and a video description, suggest section headings for the script.

You MUST return a JSON object with this exact structure:
{
  "headings": [
    {
      "heading": "string - section heading (e.g. 'The Problem', 'How It Works', 'Real Examples')",
      "estimated_duration_seconds": "number - how long this section should roughly take"
    }
  ]
}

The headings should follow the channel's typical structure patterns. Scale section count and size with duration:
- 5 minutes: 3-4 sections
- 10 minutes: 5-7 sections
- 15 minutes: 7-9 sections
- 20 minutes: 10-12 sections
Do NOT include Hook or Call to Action as sections — those are separate from the body sections.

CRITICAL: The sum of all estimated_duration_seconds must approximately equal the target duration in seconds (within 10%).`,
          `${baseContext}${sourcesBlock}\n\nTarget duration: ${targetDuration} minutes\n\nSuggest section headings for this video script following the channel's methodology. The total should fit within ${targetDuration} minutes. Base your suggestions on the research material provided above, not on general knowledge.`
        ) as any;

        return NextResponse.json({ headings: result.headings, sourceVideos: sourceList });
      }

      // Standard mode headings
      const result = await callLLM(
        STANDARD_HEADINGS_PROMPT,
        `Video description: ${description}${sourcesBlock}\n\nTarget duration: ${targetDuration} minutes\n\nSuggest section headings for this video script following the inverted narrative format. The total should fit within ${targetDuration} minutes. Base your suggestions on the research material provided above, not on general knowledge.`
      ) as any;

      return NextResponse.json({ headings: result.headings, sourceVideos: sourceList });
    }

    // --- Full script generation (headings already defined) ---
    if (headings && headings.length > 0) {
      const { sourcesBlock, sourceList } = await buildResearchContext();

      const headingsBlock = `\n\nUse these EXACT section headings as the script structure:\n${headings.map((h, i) => `${i + 1}. ${h.heading}${h.estimated_duration_seconds ? ` (~${Math.round(h.estimated_duration_seconds / 60)} min)` : ""}`).join("\n")}\n\n`;

      // Video analysis context for full script
      if (saved_analysis_id) {
        const { data: sa } = await getSupabaseAdmin()
          .from("saved_analyses")
          .select("*")
          .eq("id", saved_analysis_id)
          .single();

        if (!sa) {
          return NextResponse.json({ error: "Saved analysis not found" }, { status: 404 });
        }

        if (user && sa.user_id !== user.id) {
          return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const baseContext = `Video Analysis for "${sa.video_title || "Untitled"}":\n${JSON.stringify(sa.analysis_data, null, 2)}\n\nMy video description:\n${description}`;

        const script = await callLLM(
          SCRIPT_GENERATION_SYSTEM_PROMPT,
          `${baseContext}${sourcesBlock}${visualsBlock}${headingsBlock}Generate content for each section heading following the analyzed video's style.\n\nTarget duration: ${targetDuration} minutes\n\nWrite a complete video script following the analyzed video's methodology. The total must fit within ${targetDuration} minutes. Base the script content on the research material provided above — use facts, data, and insights from the sources.`
        );

        return NextResponse.json({ script, sourceVideos: sourceList });
      }

      if (channel_id) {
        const { data: channel } = await getSupabaseAdmin()
          .from("channels")
          .select("name, youtube_channel_id, user_id")
          .eq("id", channel_id)
          .single();

        if (!channel) {
          return NextResponse.json({ error: "Channel not found" }, { status: 404 });
        }

        if (user && channel.user_id && channel.user_id !== user.id) {
          return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const { data: bp } = await getSupabaseAdmin()
          .from("blueprints")
          .select("blueprint_data")
          .eq("channel_id", channel_id)
          .single();

        const blueprint = bp?.blueprint_data;

        if (!blueprint) {
          return NextResponse.json(
            { error: "Channel has no blueprint. Run analysis first." },
            { status: 400 }
          );
        }

        const baseContext = `Channel: ${channel.name}\n\nChannel Blueprint:\n${JSON.stringify(blueprint, null, 2)}\n\nMy video description:\n${description}`;

        const script = await callLLM(
          SCRIPT_GENERATION_SYSTEM_PROMPT,
          `${baseContext}${sourcesBlock}${visualsBlock}${headingsBlock}Generate content for each section heading following the channel's style.\n\nTarget duration: ${targetDuration} minutes\n\nWrite a complete video script following the channel's methodology. The total must fit within ${targetDuration} minutes. Base the script content on the research material provided above — use facts, data, and insights from the sources.`
        );

        return NextResponse.json({ script, sourceVideos: sourceList });
      }

      // Standard mode full script from headings
      const script = await callLLM(
        STANDARD_SCRIPT_SYSTEM_PROMPT,
        `Video description: ${description}${sourcesBlock}${visualsBlock}${headingsBlock}Generate content for each section heading following the engineered framework.\n\nTarget duration: ${targetDuration} minutes\n\nWrite a complete, high-retention video script following the engineered framework. The total must fit within ${targetDuration} minutes. Base the script content on the research material provided above — use facts, data, and insights from the sources.`
      );

      return NextResponse.json({ script, sourceVideos: sourceList });
    }

    return NextResponse.json(
      { error: "Invalid request. Provide mode='headings' or an headings array." },
      { status: 400 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Script generation failed" },
      { status: 500 }
    );
  }
}
