import { google, youtube_v3 } from "googleapis";

const youtube = google.youtube("v3");

function getAuth() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) throw new Error("Missing YOUTUBE_API_KEY env variable");
  return apiKey;
}

export async function resolveChannelId(identifier: {
  type: "id" | "handle" | "custom" | "user";
  value: string;
}): Promise<string> {
  if (identifier.type === "id") return identifier.value;

  const apiKey = getAuth();

  if (identifier.type === "handle") {
    const res = await youtube.channels.list({
      key: apiKey,
      part: ["id"],
      forHandle: identifier.value,
    });
    if (res.data.items?.[0]?.id) return res.data.items[0].id;
  }

  const res = await youtube.search.list({
    key: apiKey,
    part: ["snippet"],
    q: identifier.value,
    type: ["channel"],
    maxResults: 1,
  });

  const channelId = res.data.items?.[0]?.snippet?.channelId;
  if (!channelId) throw new Error(`Channel not found for "${identifier.value}"`);
  return channelId;
}

export async function getChannelInfo(channelId: string) {
  const apiKey = getAuth();

  const res = await youtube.channels.list({
    key: apiKey,
    part: ["snippet", "statistics"],
    id: [channelId],
  });

  const channel = res.data.items?.[0];
  if (!channel) throw new Error("Channel not found");

  return {
    name: channel.snippet?.title ?? "Unknown",
    description: channel.snippet?.description ?? null,
    thumbnail_url: channel.snippet?.thumbnails?.high?.url ?? null,
    subscriber_count: channel.statistics?.subscriberCount
      ? parseInt(channel.statistics.subscriberCount)
      : null,
    youtube_channel_id: channelId,
  };
}

export async function getChannelVideos(
  channelId: string,
  maxResults = 100
) {
  const apiKey = getAuth();

  const channelRes = await youtube.channels.list({
    key: apiKey,
    part: ["contentDetails"],
    id: [channelId],
  });

  const uploadsPlaylistId =
    channelRes.data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploadsPlaylistId) throw new Error("No uploads playlist found");

  const videos: youtube_v3.Schema$PlaylistItem[] = [];
  let pageToken: string | undefined;

  while (videos.length < maxResults) {
    const res = await youtube.playlistItems.list({
      key: apiKey,
      part: ["snippet", "contentDetails"],
      playlistId: uploadsPlaylistId,
      maxResults: Math.min(50, maxResults - videos.length),
      pageToken,
    });

    if (res.data.items) videos.push(...res.data.items);
    pageToken = res.data.nextPageToken ?? undefined;
    if (!pageToken) break;
  }

  return videos.slice(0, maxResults).map((item) => ({
    youtube_video_id: item.snippet?.resourceId?.videoId ?? "",
    title: item.snippet?.title ?? "Untitled",
    description: item.snippet?.description ?? null,
    published_at: item.snippet?.publishedAt ?? "",
  }));
}

export async function searchChannelByHandle(handle: string) {
  const apiKey = getAuth();

  const res = await youtube.search.list({
    key: apiKey,
    part: ["snippet"],
    q: handle,
    type: ["channel"],
    maxResults: 1,
  });

  return res.data.items?.[0]?.snippet?.channelId ?? null;
}
