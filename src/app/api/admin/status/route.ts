import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabase/client";

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const services: Record<string, boolean> = {
    supabase: false,
    youtube: false,
    gemini: false,
    openrouter: false,
    opencode: false,
    app_url: false,
  };

  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const { count: channelCount, error: chErr } = await getSupabaseAdmin()
        .from("channels")
        .select("*", { count: "exact", head: true });
      services.supabase = !chErr;

      const { count: videoCount } = await getSupabaseAdmin()
        .from("videos")
        .select("*", { count: "exact", head: true });

      const { count: jobCount } = await getSupabaseAdmin()
        .from("analysis_jobs")
        .select("*", { count: "exact", head: true });

      const { count: blueprintedCount } = await getSupabaseAdmin()
        .from("blueprints")
        .select("*", { count: "exact", head: true });

      const stats = {
        channels: channelCount ?? 0,
        videos: videoCount ?? 0,
        analysis_jobs: jobCount ?? 0,
        blueprints: blueprintedCount ?? 0,
      };

      services.youtube = !!process.env.YOUTUBE_API_KEY;
      services.gemini = !!process.env.GEMINI_API_KEY;
      services.openrouter = !!process.env.OPENROUTER_API_KEY;
      services.opencode = !!process.env.OPENCODE_API_KEY;
      services.app_url = !!process.env.APP_URL;

      return NextResponse.json({ services, stats });
    } catch {
      return NextResponse.json({ services, stats: null });
    }
  }

  return NextResponse.json({ services, stats: null });
}
