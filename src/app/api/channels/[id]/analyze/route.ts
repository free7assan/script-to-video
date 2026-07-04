import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/client";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { runAnalysisPipeline } from "@/lib/analysis/pipeline";
import { checkChannelLimit, limitError } from "@/lib/subscription";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { id } = await params;

  const { data: channel } = await getSupabaseAdmin()
    .from("channels")
    .select("*")
    .eq("id", id)
    .single();

  if (!channel) {
    return NextResponse.json({ error: "Channel not found" }, { status: 404 });
  }

  if (user && channel.user_id && channel.user_id !== user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (user) {
    const { allowed } = await checkChannelLimit(user.id);
    if (!allowed) {
      return NextResponse.json(limitError("analyses"), { status: 403 });
    }
  }

  let videoLimit = 10;
  let mode: "full" | "continue" = "full";
  try {
    const body = await request.json();
    if (body.video_count) videoLimit = Math.min(Math.max(body.video_count, 1), 100);
    if (body.mode === "continue" || body.mode === "full") mode = body.mode;
  } catch {}

  await getSupabaseAdmin()
    .from("channels")
    .update({ status: "fetching", error_message: null })
    .eq("id", id);

  runAnalysisPipeline(id, videoLimit, { mode }).catch(console.error);

  return NextResponse.json({ message: "Analysis started", video_limit: videoLimit, mode });
}
