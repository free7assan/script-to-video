import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/client";

const SQL = `
CREATE TABLE IF NOT EXISTS saved_ideas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  topic TEXT NOT NULL DEFAULT '',
  hook_approach TEXT NOT NULL DEFAULT '',
  estimated_duration_minutes INTEGER NOT NULL DEFAULT 10,
  reasoning TEXT NOT NULL DEFAULT '',
  channel_name TEXT NOT NULL DEFAULT '',
  channel_id TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_saved_ideas_user_id ON saved_ideas(user_id);

ALTER TABLE saved_ideas ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage own saved ideas" ON saved_ideas;
CREATE POLICY "Users can manage own saved ideas" ON saved_ideas
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
`;

export async function GET() {
  const admin = getSupabaseAdmin();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!url) {
    return NextResponse.json({ error: "NEXT_PUBLIC_SUPABASE_URL not set" }, { status: 500 });
  }

  try {
    const res = await fetch(`${url}/rest/v1/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        "X-HTTP-Method-Override": "GET",
      },
    });

    // Try the insert approach — if table exists, this succeeds
    const { error: testError } = await admin
      .from("saved_ideas")
      .select("id", { count: "exact", head: true });

    if (!testError) {
      return NextResponse.json({ ok: true, message: "saved_ideas table already exists" });
    }

    if (testError?.message?.includes("does not exist")) {
      return NextResponse.json({
        error: "Run the SQL from supabase/migrations/00012_saved_ideas.sql manually in your Supabase dashboard SQL editor.",
        sql: SQL,
      }, { status: 500 });
    }

    return NextResponse.json({ error: testError.message }, { status: 500 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
