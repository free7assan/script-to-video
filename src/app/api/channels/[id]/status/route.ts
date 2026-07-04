import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/client";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { id } = await params;

  const { data: channel } = await getSupabaseAdmin()
    .from("channels")
    .select("id, user_id")
    .eq("id", id)
    .single();

  if (!channel) return NextResponse.json({ error: "Channel not found" }, { status: 404 });

  if (user && channel.user_id && channel.user_id !== user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { data: job, error } = await getSupabaseAdmin()
    .from("analysis_jobs")
    .select("*")
    .eq("channel_id", id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const { data: videos } = await getSupabaseAdmin()
    .from("videos")
    .select("id, youtube_video_id, title, transcript, video_analyses(analysis_data)")
    .eq("channel_id", id)
    .order("published_at", { ascending: false });

  return NextResponse.json({
    job,
    videos: (videos ?? []).map((v: any) => ({
      id: v.id,
      youtube_video_id: v.youtube_video_id,
      title: v.title,
      transcript: v.transcript,
      analysis: v.video_analyses?.analysis_data ?? null,
    })),
  });
}
