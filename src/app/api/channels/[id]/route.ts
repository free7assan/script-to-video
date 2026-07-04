import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/client";
import { createSupabaseServerClient } from "@/lib/supabase/server";

async function getChannelWithOwnership(id: string) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  let query = getSupabaseAdmin()
    .from("channels")
    .select("*, blueprints(*)")
    .eq("id", id);

  if (user) query = query.eq("user_id", user.id);

  const { data: channel, error } = await query.single();
  return { channel: channel as any, error, user };
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { channel, error } = await getChannelWithOwnership(id);

  if (error || !channel) return NextResponse.json({ error: "Channel not found" }, { status: 404 });

  return NextResponse.json({
    ...channel,
    blueprint: channel.blueprints?.[0]?.blueprint_data ?? null,
    blueprints: undefined,
  });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { channel } = await getChannelWithOwnership(id);

  if (!channel) {
    return NextResponse.json({ error: "Channel not found" }, { status: 404 });
  }

  const { error } = await getSupabaseAdmin()
    .from("channels")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Channel deleted" });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { channel } = await getChannelWithOwnership(id);

  if (!channel) {
    return NextResponse.json({ error: "Channel not found" }, { status: 404 });
  }

  let body: { action?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { action } = body;

  if (action === "archive") {
    await getSupabaseAdmin()
      .from("blueprints")
      .update({ archived_at: new Date().toISOString() })
      .eq("channel_id", id);
    return NextResponse.json({ message: "Channel archived" });
  }

  if (action === "unarchive") {
    await getSupabaseAdmin()
      .from("blueprints")
      .update({ archived_at: null })
      .eq("channel_id", id);
    return NextResponse.json({ message: "Channel unarchived" });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
