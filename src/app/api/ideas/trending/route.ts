import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { callLLM } from "@/lib/analysis/llm";
import { google } from "googleapis";

interface TrendingVideo {
  videoId: string;
  title: string;
  channelTitle: string;
  publishedAt: string;
  viewCount?: string;
  thumbnailUrl?: string | null;
}

interface TrendingArticle {
  title: string;
  url: string;
  snippet?: string | null;
}

interface TrendingTopic {
  topic: string;
  subjects: string[];
  videos: TrendingVideo[];
  articles: TrendingArticle[];
}

export async function GET(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const topicParam = searchParams.get("topic");
  const regionCode = searchParams.get("region") || "US";
  const regionName = searchParams.get("regionName") || regionCode;

  const validRegion = /^[A-Z]{2}$/.test(regionCode) ? regionCode : "US";

  // Fetch channels with blueprints
  let query = supabase
    .from("channels")
    .select("id, name, blueprints(blueprint_data)")
    .eq("user_id", user.id);

  const { data: channels, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const validChannels = (channels || []).filter(
    (c: any) => c.blueprints?.blueprint_data
  );

  if (validChannels.length === 0) {
    return NextResponse.json({ topics: [] });
  }

  // Extract all content pillars
  const allPillars: string[] = [];
  for (const channel of validChannels) {
    const bp = (channel as any).blueprints?.blueprint_data;
    const pillars: string[] = bp?.channel_summary?.content_pillars || [];
    allPillars.push(...pillars);
  }

  // If a specific topic is requested, only search that
  const uniquePillars = [...new Set(allPillars.map((p) => p.toLowerCase().trim()))].filter(Boolean);
  const topicsToSearch = topicParam
    ? uniquePillars.filter((p) => p.includes(topicParam.toLowerCase()))
    : uniquePillars;

  if (topicsToSearch.length === 0) {
    return NextResponse.json({ topics: [] });
  }

  // Search each pillar for trending content
  const results: TrendingTopic[] = [];
  const ytApiKey = process.env.YOUTUBE_API_KEY;
  const googleApiKey = process.env.GOOGLE_API_KEY;
  const cseId = process.env.GOOGLE_CSE_ID;

  for (const pillar of topicsToSearch.slice(0, 5)) {
    const videos: TrendingVideo[] = [];
    const articles: TrendingArticle[] = [];

    // YouTube search — ordered by viewCount for trending
    if (ytApiKey) {
      try {
        const youtube = google.youtube("v3");
        const ytRes = await youtube.search.list({
          key: ytApiKey,
          part: ["snippet"],
          q: pillar,
          type: ["video"],
          maxResults: 5,
          relevanceLanguage: "en",
          order: "viewCount",
          regionCode: validRegion,
        });

        const videoIds = ytRes.data.items
          ?.map((item) => item.id?.videoId)
          .filter(Boolean) as string[] | undefined;

        // Get video statistics (view counts)
        let statsMap: Record<string, string> = {};
        if (videoIds && videoIds.length > 0) {
          try {
            const statsRes = await youtube.videos.list({
              key: ytApiKey,
              part: ["statistics", "snippet"],
              id: videoIds,
            });
            for (const item of statsRes.data.items || []) {
              if (item.id && item.statistics?.viewCount) {
                statsMap[item.id] = item.statistics.viewCount;
              }
            }
          } catch {}
        }

        for (const item of ytRes.data.items || []) {
          const vid = item.id?.videoId;
          if (vid && item.snippet?.title) {
            videos.push({
              videoId: vid,
              title: item.snippet.title,
              channelTitle: item.snippet.channelTitle || "",
              publishedAt: item.snippet.publishedAt || "",
              viewCount: statsMap[vid] || undefined,
              thumbnailUrl: item.snippet.thumbnails?.high?.url ?? item.snippet.thumbnails?.default?.url ?? undefined,
            });
          }
        }
      } catch {}
    }

    // Google Custom Search for trending articles
    if (googleApiKey && cseId) {
      try {
        const customsearch = google.customsearch("v1");
        const gRes = await customsearch.cse.list({
          auth: googleApiKey,
          cx: cseId,
          q: `${pillar} 2026 trend`,
          num: 4,
          sort: "date",
          gl: validRegion,
          cr: `country${validRegion}`,
        });
        for (const item of gRes.data.items || []) {
          if (item.link && item.title) {
            articles.push({
              title: item.title,
              url: item.link,
              snippet: item.snippet,
            });
          }
        }
      } catch {}
    }

    // Generate 5 trending subjects via LLM based on found videos + articles
    let subjects: string[] = [];
    try {
      const searchContext = [
        ...videos.slice(0, 5).map((v) => `Video: "${v.title}" by ${v.channelTitle} (${v.viewCount ? Number(v.viewCount).toLocaleString() + " views" : "recent"})`),
        ...articles.slice(0, 4).map((a) => `Article: "${a.title}" — ${a.snippet || ""}`),
      ].join("\n");

      const systemPrompt = `You are a YouTube content strategist. You MUST return a JSON object with exactly 5 trending subjects as an array of strings.

REQUIRED FORMAT (return exactly this structure, nothing else):
{"subjects":["First subject here","Second subject here","Third subject here","Fourth subject here","Fifth subject here"]}

RULES:
- Return EXACTLY 5 items in the subjects array
- Each item must be a string (short phrase, under 15 words)
- Subjects MUST be relevant to and timely for the TARGET REGION provided in the user message
- Do NOT return a single string — it MUST be an array of 5 strings
- Do NOT wrap subjects in another object
- Return ONLY the JSON object, no other text`;

      const llmResult = await callLLM(
        systemPrompt,
        `Content pillar: ${pillar}
Target region: ${regionName} (${validRegion})

Trending search results in ${regionName}:
${searchContext || "No specific results — suggest 5 trending subjects based on this topic in 2026, relevant to " + regionName + "."}`,
        undefined,
        1024
      );

      // Parse subjects from whatever the LLM returned
      const rawResult = JSON.stringify(llmResult);
      console.log(`[Trending] LLM raw for "${pillar}":`, rawResult);

      // Try multiple parsing strategies
      if (llmResult && typeof llmResult === "object") {
        const raw = (llmResult as any).subjects;
        if (Array.isArray(raw)) {
          subjects = raw.filter((s: unknown) => typeof s === "string").slice(0, 5);
        } else if (typeof raw === "string") {
          // Try splitting comma-separated or newline-separated string
          const parts = raw.split(/[,;]\s*/).map((s: string) => s.trim()).filter(Boolean);
          if (parts.length >= 2) {
            subjects = parts.slice(0, 5);
          } else {
            subjects = [raw];
          }
        }
      }

      // If still no subjects, try extracting from the raw JSON string
      if (subjects.length === 0 && rawResult) {
        const match = rawResult.match(/"subjects"\s*:\s*\[([\s\S]*?)\]/);
        if (match) {
          try {
            subjects = JSON.parse(`[${match[1]}]`).filter((s: unknown) => typeof s === "string").slice(0, 5);
          } catch {}
        }
      }

      // Last resort: try to extract numbered list from the raw text
      if (subjects.length === 0 && rawResult) {
        const lines = rawResult.split("\n").map((l: string) => l.replace(/^\d+[\.\)]\s*/, "").replace(/^[-*]\s*/, "").trim()).filter((l: string) => l.length > 5 && l.length < 100);
        if (lines.length >= 2) {
          subjects = lines.slice(0, 5);
        }
      }

      console.log(`[Trending] Final subjects for "${pillar}":`, subjects);
    } catch (err) {
      console.warn(`[Trending] LLM failed for "${pillar}":`, err);
    }

    if (videos.length > 0 || articles.length > 0) {
      results.push({ topic: pillar, subjects, videos, articles });
    }
  }

  return NextResponse.json({ topics: results });
}
