import { NextRequest, NextResponse } from "next/server";
import { extractYouTubeVideoId } from "@/lib/utils";
import { analyzeSingleVideo } from "@/lib/analysis/pipeline";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getSupabaseAdmin } from "@/lib/supabase/client";
import { checkVideoLimit, limitError } from "@/lib/subscription";

async function getYouTubeTitle(url: string): Promise<string> {
  try {
    const videoId = extractYouTubeVideoId(url);
    if (!videoId) return "";
    const res = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`);
    const data = await res.json();
    return data.title || "";
  } catch {
    return "";
  }
}

export async function POST(request: NextRequest) {
  let body: { url?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.url) {
    return NextResponse.json({ error: "url is required" }, { status: 400 });
  }

  const videoId = extractYouTubeVideoId(body.url);
  if (!videoId) {
    return NextResponse.json(
      { error: "Invalid YouTube URL. Use youtube.com/watch?v= or youtu.be/ links." },
      { status: 400 }
    );
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      const { allowed } = await checkVideoLimit(user.id);
      if (!allowed) {
        return NextResponse.json(limitError("analyses"), { status: 403 });
      }
    }

    const result = await analyzeSingleVideo(videoId, body.url);
    if (!result) {
      return NextResponse.json(
        { error: "No transcript available for this video. It may not have captions." },
        { status: 404 }
      );
    }

    let savedId: string | null = null;
    if (user) {
      const videoTitle = await getYouTubeTitle(body.url);
      const { data } = await getSupabaseAdmin()
        .from("saved_analyses")
        .insert({
          user_id: user.id,
          youtube_url: body.url,
          video_title: videoTitle,
          analysis_data: result.analysis,
        })
        .select("id")
        .single();
      savedId = data?.id || null;
    }

    return NextResponse.json({ analysis: result.analysis, transcript: result.transcript.slice(0, 500), saved_id: savedId });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Analysis failed" },
      { status: 500 }
    );
  }
}
