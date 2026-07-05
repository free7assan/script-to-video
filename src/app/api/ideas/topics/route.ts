import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: channels, error } = await supabase
    .from("channels")
    .select("id, name, blueprints(blueprint_data)")
    .eq("user_id", user.id)
    .not("blueprints", "is", null);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Extract topics (content_pillars) from each blueprint
  const topics: Record<string, { channels: { id: string; name: string }[] }> = {};

  for (const channel of channels || []) {
    const bp = (channel as any).blueprints?.blueprint_data;
    if (!bp?.channel_summary?.content_pillars) continue;

    const pillars: string[] = bp.channel_summary.content_pillars;
    for (const pillar of pillars) {
      if (!topics[pillar]) {
        topics[pillar] = { channels: [] };
      }
      if (!topics[pillar].channels.find((c) => c.id === channel.id)) {
        topics[pillar].channels.push({ id: channel.id, name: channel.name });
      }
    }
  }

  const sorted = Object.entries(topics)
    .map(([topic, data]) => ({ topic, ...data }))
    .sort((a, b) => b.channels.length - a.channels.length);

  return NextResponse.json({ topics: sorted });
}
