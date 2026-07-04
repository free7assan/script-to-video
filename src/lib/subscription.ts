import { getSupabaseAdmin } from "./supabase/client";

export interface UsageInfo {
  channels: number;
  channelsLimit: number;
  videos: number;
  videosLimit: number;
  scripts: number;
  scriptsLimit: number;
}

export async function getUserPlan(userId: string): Promise<string> {
  const { data } = await getSupabaseAdmin()
    .from("users")
    .select("plan")
    .eq("id", userId)
    .single();
  return data?.plan || "free";
}

export function getPlanLimits(plan: string = "free") {
  if (plan === "unlimited") return { channels: Infinity, videos: Infinity, scripts: Infinity };
  return { channels: 5, videos: 5, scripts: 5 };
}

export async function getUsage(userId: string): Promise<UsageInfo> {
  const plan = await getUserPlan(userId);
  const limits = getPlanLimits(plan);

  const [{ count: channelCount }, { count: analysisCount }, { count: scriptCount }] =
    await Promise.all([
      getSupabaseAdmin()
        .from("channels")
        .select("id", { count: "exact", head: true })
        .eq("user_id", userId),
      getSupabaseAdmin()
        .from("saved_analyses")
        .select("id", { count: "exact", head: true })
        .eq("user_id", userId),
      getSupabaseAdmin()
        .from("scripts")
        .select("id", { count: "exact", head: true })
        .eq("user_id", userId),
    ]);

  return {
    channels: channelCount ?? 0,
    channelsLimit: limits.channels,
    videos: analysisCount ?? 0,
    videosLimit: limits.videos,
    scripts: scriptCount ?? 0,
    scriptsLimit: limits.scripts,
  };
}

export async function checkChannelLimit(userId: string): Promise<{
  allowed: boolean;
  usage: UsageInfo;
}> {
  const usage = await getUsage(userId);
  return {
    allowed: usage.channels < usage.channelsLimit,
    usage,
  };
}

export async function checkVideoLimit(userId: string): Promise<{
  allowed: boolean;
  usage: UsageInfo;
}> {
  const usage = await getUsage(userId);
  return {
    allowed: usage.videos < usage.videosLimit,
    usage,
  };
}

export async function checkScriptLimit(userId: string): Promise<{
  allowed: boolean;
  usage: UsageInfo;
}> {
  const usage = await getUsage(userId);
  return {
    allowed: usage.scripts < usage.scriptsLimit,
    usage,
  };
}

export function limitError(item: string) {
  return {
    error: `Free plan limit reached. You've used all available ${item}. Upgrade to create more.`,
    code: "LIMIT_REACHED",
  };
}
