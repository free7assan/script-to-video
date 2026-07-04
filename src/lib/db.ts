import { getSupabaseAdmin } from "./supabase/client";
import type { Channel, BlueprintRow, Video, VideoAnalysisRow } from "@/types";

function reshapeChannel(row: Record<string, any>, blueprintRow: BlueprintRow | null): Channel {
  const { blueprints, ...rest } = row;
  return {
    ...rest,
    blueprint: blueprintRow?.blueprint_data ?? null,
    archived_at: blueprintRow?.archived_at ?? rest.archived_at ?? null,
  } as Channel;
}

function reshapeVideo(row: Record<string, any>, analysisRow: VideoAnalysisRow | null): Video {
  const { video_analyses, ...rest } = row;
  return {
    ...rest,
    analysis: video_analyses?.analysis_data ?? null,
  } as Video;
}

export async function getChannelsWithBlueprints(userId?: string) {
  let query = getSupabaseAdmin()
    .from("channels")
    .select("*, blueprints(*)")
    .order("created_at", { ascending: false });

  if (userId) query = query.eq("user_id", userId);

  const { data, error } = await query;

  if (error) throw error;
  return (data || []).map((row: any) =>
    reshapeChannel(row, row.blueprints?.[0] ?? null)
  );
}

export async function getChannelWithBlueprint(id: string, userId?: string) {
  let query = getSupabaseAdmin()
    .from("channels")
    .select("*, blueprints(*)")
    .eq("id", id);

  if (userId) query = query.eq("user_id", userId);

  const { data, error } = await query.single();

  if (error || !data) return null;
  return reshapeChannel(data, (data as any).blueprints?.[0] ?? null);
}

export async function getVideosWithAnalyses(channelId: string, userId?: string) {
  let query = getSupabaseAdmin()
    .from("videos")
    .select("*, video_analyses(*)")
    .eq("channel_id", channelId)
    .order("published_at", { ascending: false });

  if (userId) {
    const { data: ch } = await getSupabaseAdmin()
      .from("channels")
      .select("id")
      .eq("id", channelId)
      .eq("user_id", userId)
      .maybeSingle();
    if (!ch) return [];
  }

  const { data, error } = await query;

  if (error) throw error;
  return (data || []).map((row: any) =>
    reshapeVideo(row, row.video_analyses ?? null)
  );
}

export async function getBlueprintByChannelId(channelId: string) {
  const { data, error } = await getSupabaseAdmin()
    .from("blueprints")
    .select("*")
    .eq("channel_id", channelId)
    .maybeSingle();

  if (error) return null;
  return data as BlueprintRow | null;
}

export async function getDashboardStats(userId?: string) {
  const supabase = getSupabaseAdmin();

  const channelsRes = await (userId
    ? supabase.from("channels").select("id", { count: "exact", head: true }).eq("user_id", userId)
    : supabase.from("channels").select("id", { count: "exact", head: true }));

  let channelIds: string[] | undefined;
  if (userId) {
    const { data: ids } = await supabase
      .from("channels")
      .select("id")
      .eq("user_id", userId);
    channelIds = ids?.map((r: any) => r.id) || [];
  }

  const videosRes = channelIds && channelIds.length === 0
    ? { count: 0 }
    : await (channelIds
      ? supabase.from("videos").select("id", { count: "exact", head: true }).in("channel_id", channelIds!)
      : supabase.from("videos").select("id", { count: "exact", head: true }));

  const blueprintsRes = channelIds && channelIds.length === 0
    ? { count: 0 }
    : await (channelIds
      ? supabase.from("blueprints").select("id", { count: "exact", head: true }).in("channel_id", channelIds!)
      : supabase.from("blueprints").select("id", { count: "exact", head: true }));

  const scriptsRes = await (userId
    ? supabase.from("scripts").select("id", { count: "exact", head: true }).eq("user_id", userId)
    : supabase.from("scripts").select("id", { count: "exact", head: true }));

  return {
    channels: channelsRes.count ?? 0,
    videos: videosRes.count ?? 0,
    scripts: scriptsRes.count ?? 0,
    blueprints: blueprintsRes.count ?? 0,
  };
}

export async function getRecentScripts(limit = 5, userId?: string) {
  let query = getSupabaseAdmin()
    .from("scripts")
    .select("id, title, description, duration_minutes, created_at, channel_id")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (userId) query = query.eq("user_id", userId);

  const { data, error } = await query;
  if (error) return [];
  return data || [];
}

export async function getRecentChannels(limit = 10, userId?: string) {
  let query = getSupabaseAdmin()
    .from("channels")
    .select("*, blueprints(*)")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (userId) query = query.eq("user_id", userId);

  const { data, error } = await query;
  if (error) return [];
  return (data || []).map((row: any) =>
    reshapeChannel(row, row.blueprints?.[0] ?? null)
  );
}

export async function updateBlueprintArchive(channelId: string, archived: boolean) {
  if (archived) {
    await getSupabaseAdmin()
      .from("blueprints")
      .update({ archived_at: new Date().toISOString() })
      .eq("channel_id", channelId);
  } else {
    await getSupabaseAdmin()
      .from("blueprints")
      .update({ archived_at: null })
      .eq("channel_id", channelId);
  }
}
