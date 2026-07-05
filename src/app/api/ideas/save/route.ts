import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/client";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.title) {
    return NextResponse.json({ error: "title is required" }, { status: 400 });
  }

  const admin = getSupabaseAdmin();

  const { error: insertError } = await admin
    .from("saved_ideas")
    .insert({
      user_id: user.id,
      title: body.title,
      description: body.description || "",
      topic: body.topic || "",
      hook_approach: body.hook_approach || "",
      estimated_duration_minutes: body.estimated_duration_minutes || 10,
      reasoning: body.reasoning || "",
      channel_name: body.channel_name || "",
      channel_id: body.channel_id || "",
      outline: body.outline || [],
      key_points: body.key_points || [],
      target_keywords: body.target_keywords || [],
      thumbnail_concept: body.thumbnail_concept || "",
      sources_to_reference: body.sources_to_reference || [],
    });

  if (insertError?.message?.includes("does not exist")) {
    return NextResponse.json({
      error: "Database table 'saved_ideas' missing. Run the SQL from supabase/migrations/00012_saved_ideas.sql in your Supabase SQL editor.",
      needsSetup: true,
    }, { status: 500 });
  }

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
