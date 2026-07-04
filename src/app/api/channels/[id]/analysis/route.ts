import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/client";
import { createSupabaseServerClient } from "@/lib/supabase/server";

async function safeUpdate(
  table: string,
  updates: Record<string, any>,
  match: Record<string, any>
) {
  const { error } = await getSupabaseAdmin()
    .from(table)
    .update(updates as any)
    .match(match);

  if (error && error.code === "23514") {
    const signal = updates.status === "cancelled" ? "__CANCEL__"
      : updates.status === "paused" ? "__PAUSE__"
      : updates.status === "pending" ? "__RESUME__"
      : null;

    if (signal && table === "analysis_jobs") {
      await getSupabaseAdmin()
        .from(table)
        .update({ error_message: signal } as any)
        .match(match);
    }
    return false;
  }

  return !error;
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { id } = await params;

  const { data: channel } = await getSupabaseAdmin()
    .from("channels")
    .select("id, status, user_id")
    .eq("id", id)
    .single();

  if (!channel) {
    return NextResponse.json({ error: "Channel not found" }, { status: 404 });
  }

  if (user && channel.user_id && channel.user_id !== user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  let body: { action?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { action } = body;

  if (action === "cancel" || action === "pause") {
    const jobStatus = action === "cancel" ? "cancelled" : "paused";
    const channelStatus = action === "cancel" ? "cancelled" : "paused";

    const { data: jobs } = await getSupabaseAdmin()
      .from("analysis_jobs")
      .select("id")
      .eq("channel_id", id)
      .order("created_at", { ascending: false })
      .limit(1);

    if (jobs && jobs.length > 0) {
      await safeUpdate("analysis_jobs", { status: jobStatus }, { id: jobs[0].id });
    }

    await safeUpdate("channels", { status: channelStatus }, { id });

    return NextResponse.json({ message: `Analysis ${action}ed` });
  }

  if (action === "resume") {
    const { data: jobs } = await getSupabaseAdmin()
      .from("analysis_jobs")
      .select("id, status")
      .eq("channel_id", id)
      .order("created_at", { ascending: false })
      .limit(1);

    if (jobs && jobs.length > 0) {
      await safeUpdate("analysis_jobs", { status: "pending", error_message: null }, { id: jobs[0].id });
    }

    await safeUpdate("channels", { status: "fetching" }, { id });

    const { runAnalysisPipeline } = await import("@/lib/analysis/pipeline");
    runAnalysisPipeline(id, 1, { mode: "continue" }).catch(console.error);

    return NextResponse.json({ message: "Analysis resumed" });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
