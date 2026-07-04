import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/client";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { extractYouTubeChannelIdentifier } from "@/lib/utils";
import { resolveChannelId, getChannelInfo } from "@/lib/youtube/channel";
import { runAnalysisPipeline } from "@/lib/analysis/pipeline";

export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  let query = getSupabaseAdmin()
    .from("channels")
    .select("*")
    .order("created_at", { ascending: false });

  if (user) query = query.eq("user_id", user.id);

  const { data: channels, error } = await query;

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(channels);
}

export async function POST(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { youtube_url?: string; video_count?: number };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { youtube_url, video_count } = body;
  if (!youtube_url || typeof youtube_url !== "string") {
    return NextResponse.json({ error: "YouTube URL is required" }, { status: 400 });
  }

  const videoLimit = Math.min(Math.max(video_count ?? 10, 1), 100);

  const identifier = extractYouTubeChannelIdentifier(youtube_url);
  if (!identifier) {
    return NextResponse.json(
      { error: "Could not parse YouTube channel URL. Try a format like:\n• https://youtube.com/@channelname\n• https://youtube.com/channel/UC...\n• https://youtube.com/c/channelname" },
      { status: 400 }
    );
  }

  try {
    const youtubeChannelId = await resolveChannelId(identifier);

    const { data: existing } = await getSupabaseAdmin()
      .from("channels")
      .select("id, status, name")
      .eq("youtube_channel_id", youtubeChannelId)
      .single();

    if (existing) {
      return NextResponse.json(existing);
    }

    const info = await getChannelInfo(youtubeChannelId);

    const { data: channel, error } = await getSupabaseAdmin()
      .from("channels")
      .insert({
        youtube_channel_id: youtubeChannelId,
        youtube_url,
        name: info.name,
        thumbnail_url: info.thumbnail_url,
        subscriber_count: info.subscriber_count,
        description: info.description,
        status: "fetching",
        user_id: user.id,
      })
      .select()
      .single();

    if (error) throw error;

    runAnalysisPipeline(channel.id, videoLimit).catch(console.error);

    return NextResponse.json(channel, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to process channel" },
      { status: 500 }
    );
  }
}
