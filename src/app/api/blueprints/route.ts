import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/client";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { searchParams } = new URL(request.url);
  const includeArchived = searchParams.get("archived") === "true";

  let query = getSupabaseAdmin()
    .from("channels")
    .select("*, blueprints(*)")
    .not("blueprints", "is", null);

  if (user) query = query.eq("user_id", user.id);

  if (!includeArchived) {
    query = query.is("blueprints.archived_at", null);
  }

  query = query.order("updated_at", { ascending: false });

  const { data, error } = await query;

  if (error) {
    let fallbackQuery = getSupabaseAdmin()
      .from("channels")
      .select("*, blueprints(*)");

    if (user) fallbackQuery = fallbackQuery.eq("user_id", user.id);

    if (!includeArchived) {
      fallbackQuery = fallbackQuery.not("blueprints", "is", null);
    }

    const fallback = await fallbackQuery.order("updated_at", { ascending: false });

    if (fallback.error) {
      return NextResponse.json({ error: fallback.error.message }, { status: 500 });
    }

    const filtered = (fallback.data || []).filter((ch: any) => {
      if (includeArchived) return true;
      if (!ch.blueprints?.[0]) return true;
      return !ch.blueprints[0].archived_at;
    });

    return NextResponse.json(
      filtered.map((ch: any) => ({
        ...ch,
        blueprint: ch.blueprints?.[0]?.blueprint_data ?? null,
        blueprints: undefined,
      }))
    );
  }

  return NextResponse.json(
    (data || []).map((ch: any) => ({
      ...ch,
      blueprint: ch.blueprints?.[0]?.blueprint_data ?? null,
      blueprints: undefined,
    }))
  );
}
