import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabase/client";

type Granularity = "day" | "week" | "month";

interface Bucket {
  label: string;
  channels: number;
  videos: number;
  blueprints: number;
  analyses: number;
}

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const supabase = getSupabaseAdmin();

  const [channelsRes, videosRes, blueprintsRes, jobsRes, analysesRes] = await Promise.all([
    supabase.from("channels").select("id, created_at, status, updated_at"),
    supabase.from("videos").select("id, created_at, view_count"),
    supabase.from("blueprints").select("id, created_at, archived_at"),
    supabase.from("analysis_jobs").select("id, created_at, completed_at, status, progress"),
    supabase.from("video_analyses").select("id, created_at"),
  ]);

  const channels = channelsRes.data ?? [];
  const videos = videosRes.data ?? [];
  const blueprints = blueprintsRes.data ?? [];
  const jobs = jobsRes.data ?? [];
  const analyses = analysesRes.data ?? [];

  const analyzedChannels = channels.filter((c) => c.status === "completed").length;
  const completedJobs = jobs.filter((j) => j.status === "completed").length;
  const archivedBlueprints = blueprints.filter((b) => b.archived_at).length;

  const totals = {
    channels: channels.length,
    videos: videos.length,
    blueprints: blueprints.length,
    jobs: jobs.length,
    analyses: analyses.length,
    analyzedChannels,
    completedJobs,
    archivedBlueprints,
  };

  // ── Status breakdowns ──
  const channelStatus = countBy(channels, "status");
  const jobStatus = countBy(jobs, "status");

  // ── Time series ──
  const source = { channels, videos, blueprints, analyses };
  const daily = buildSeries(source, "day", 30);
  const weekly = buildSeries(source, "week", 12);
  const monthly = buildSeries(source, "month", 12);

  return NextResponse.json({
    totals,
    channelStatus,
    jobStatus,
    series: { daily, weekly, monthly },
  });
}

function countBy(rows: any[], key: string): Record<string, number> {
  const out: Record<string, number> = {};
  rows.forEach((r) => {
    const v = r[key] ?? "unknown";
    out[v] = (out[v] || 0) + 1;
  });
  return out;
}

function buildSeries(
  src: {
    channels: any[];
    videos: any[];
    blueprints: any[];
    analyses: any[];
  },
  granularity: Granularity,
  count: number
): Bucket[] {
  const now = new Date();
  const buckets: Bucket[] = [];

  for (let i = count - 1; i >= 0; i--) {
    const d = new Date(now);
    if (granularity === "day") d.setDate(d.getDate() - i);
    else if (granularity === "week") d.setDate(d.getDate() - i * 7);
    else d.setMonth(d.getMonth() - i);
    buckets.push({ label: formatLabel(d, granularity), channels: 0, videos: 0, blueprints: 0, analyses: 0 });
  }

  const bucketFor = (dateStr: string) => {
    const key = formatLabel(new Date(dateStr), granularity);
    return buckets.find((b) => b.label === key);
  };

  src.channels.forEach((r) => {
    const b = bucketFor(r.created_at);
    if (b) b.channels += 1;
  });
  src.videos.forEach((r) => {
    const b = bucketFor(r.created_at);
    if (b) b.videos += 1;
  });
  src.blueprints.forEach((r) => {
    const b = bucketFor(r.created_at);
    if (b) b.blueprints += 1;
  });
  src.analyses.forEach((r) => {
    const b = bucketFor(r.created_at);
    if (b) b.analyses += 1;
  });

  return buckets;
}

function formatLabel(d: Date, granularity: Granularity): string {
  if (granularity === "day") {
    return d.toISOString().split("T")[0].slice(5);
  }
  if (granularity === "week") {
    const start = new Date(d);
    start.setDate(start.getDate() - start.getDay());
    return start.toISOString().split("T")[0].slice(5);
  }
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}