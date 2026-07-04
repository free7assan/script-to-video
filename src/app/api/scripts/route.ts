import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient, createSupabaseAdminClient } from "@/lib/supabase/server";
import type { SaveScriptInput } from "@/types";
import { checkScriptLimit, limitError } from "@/lib/subscription";

export async function GET() {
  const supabase = await createSupabaseServerClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: scripts, error } = await supabase
    .from("scripts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(scripts ?? []);
}

export async function POST(request: NextRequest) {
  let body: SaveScriptInput;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.title && !body.description) {
    return NextResponse.json({ error: "title or description required" }, { status: 400 });
  }

  const supabase = await createSupabaseServerClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { allowed } = await checkScriptLimit(user.id);
  if (!allowed) {
    return NextResponse.json(limitError("scripts"), { status: 403 });
  }

  const admin = await createSupabaseAdminClient();

  const { data, error } = await admin
    .from("scripts")
    .insert({
      user_id: user.id,
      channel_id: body.channel_id || null,
      title: body.title,
      description: body.description,
      duration_minutes: body.duration_minutes ?? 10,
      script_content: body.script_content,
      mode: body.mode || "full",
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
