import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { callLLM } from "@/lib/analysis/llm";
import { google } from "googleapis";
import { getVideoTranscript } from "@/lib/youtube/transcript";

const MAX_IDEAS_PER_TOPIC = 6;

const SYSTEM_PROMPT = `You are a YouTube content strategist. Given a channel blueprint and recent web research about the channel's content topics, generate fresh, timely video ideas.

Base your ideas on:
- The channel's blueprint (style, audience, content pillars)
- The web research material provided (recent articles, trends, discussions in the channel's niche)
- Prioritize ideas that reference or respond to recent developments, trends, and discussions found in the research

For each content pillar in the blueprint, suggest video ideas that:
- Match the channel's tone, style, and storytelling approach
- Use proven hook patterns from the channel
- Fit within the channel's typical video length
- Appeal to the channel's target audience
- Feel like natural next videos for that channel
- Are timely and reference current trends/discussions (based on the research)

Return a JSON object with the structure:
{
  "ideas": [
    {
      "title": "Compelling video title",
      "description": "2-3 sentence concept explaining what the video covers and why it matters now",
      "topic": "The content pillar this belongs to (from the blueprint)",
      "hook_approach": "Suggested hook type based on channel's patterns",
      "estimated_duration_minutes": number,
      "reasoning": "One sentence on why this fits the channel",
      "outline": ["Section 1 heading", "Section 2 heading", "Section 3 heading"],
      "key_points": ["Specific talking point or argument", "Data point or reference to include", "Call to action or takeaway"],
      "target_keywords": ["keyword1", "keyword2", "keyword3"],
      "thumbnail_concept": "Brief description of a compelling thumbnail visual",
      "sources_to_reference": ["Source title from research", "Another source title"]
    }
  ]
}

Generate 2-3 ideas per content pillar. Make them specific, actionable, and detailed — include concrete section outlines, key talking points, searchable keywords, and thumbnail concepts.`;

const MANUAL_SYSTEM_PROMPT = `You are a YouTube content strategist. Given a topic and recent web research, generate fresh, timely video ideas that would work well for a YouTube channel.

Base your ideas on:
- The topic provided
- The web research material (recent articles, trends, discussions)
- Prioritize ideas that reference or respond to recent developments and trends found in the research

For each idea include an outline (3-5 sections), specific key points, target SEO keywords, a thumbnail concept, and which sources from the research to reference.

Return a JSON object with an "ideas" array. Each idea must have: title, description, topic, hook_approach, estimated_duration_minutes, reasoning, outline, key_points, target_keywords, thumbnail_concept, sources_to_reference.

Generate 3-5 ideas. Make them specific, actionable, and detailed.`;

function buildManualUserPrompt(topic: string, researchContext: string, excludeTitles: string[]): string {
  const excludeBlock = excludeTitles.length > 0
    ? `\n\n=== DO NOT GENERATE THESE IDEAS ===\nThe following video ideas have already been generated or saved. DO NOT propose them again:\n${excludeTitles.map((t) => `- ${t}`).join("\n")}`
    : "";

  return `Generate YouTube video ideas for the topic "${topic}" based on recent web research:

=== TOPIC ===
${topic}

=== RECENT WEB RESEARCH ===
The following content was fetched from recent search results about this topic. Use this to inform timely, relevant video ideas:
${researchContext}${excludeBlock}

Generate 3-5 creative video ideas. Return them as a JSON object with an "ideas" array where each idea has topic set to "${topic}".`;
}

function buildUserPrompt(blueprint: Record<string, unknown>, channelName: string, researchContext: string, excludeTitles: string[]): string {
  const excludeBlock = excludeTitles.length > 0
    ? `\n\n=== DO NOT GENERATE THESE IDEAS ===\nThe following video ideas have already been generated or saved. DO NOT propose them again:\n${excludeTitles.map((t) => `- ${t}`).join("\n")}`
    : "";

  return `Generate video ideas for the YouTube channel "${channelName}" based on this blueprint and recent web research:

=== BLUEPRINT ===
${JSON.stringify(blueprint, null, 2)}

=== RECENT WEB RESEARCH ===
The following content was fetched from recent search results about topics relevant to this channel. Use this to inform timely, relevant video ideas:
${researchContext}${excludeBlock}

Generate 2-3 ideas for each content pillar found in the blueprint, prioritizing ideas that relate to the recent research. For each idea include an outline (3-5 sections), specific key points, target SEO keywords, a thumbnail concept, and which sources from the research to reference. Return them as a JSON object with an "ideas" array.`;
}

async function searchInternetSources(query: string) {
  const sources: { ref: string; url: string }[] = [];
  const seen = new Set<string>();

  // Google Custom Search for general web results
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    const cseId = process.env.GOOGLE_CSE_ID;
    if (apiKey && cseId) {
      const customsearch = google.customsearch("v1");
      const res = await customsearch.cse.list({
        auth: apiKey,
        cx: cseId,
        q: query,
        num: 6,
        sort: "date",
      });
      for (const item of res.data.items || []) {
        const url = item.link;
        const title = item.title;
        if (url && title && !seen.has(url)) {
          seen.add(url);
          sources.push({ ref: title, url });
        }
      }
    }
  } catch {}

  // Also search YouTube for recent video content
  try {
    const ytApiKey = process.env.YOUTUBE_API_KEY;
    if (ytApiKey) {
      const youtube = google.youtube("v3");
      const ytRes = await youtube.search.list({
        key: ytApiKey,
        part: ["snippet"],
        q: query,
        type: ["video"],
        maxResults: 3,
        relevanceLanguage: "en",
        order: "date",
      });
      for (const item of ytRes.data.items || []) {
        const vid = item.id?.videoId;
        if (vid && item.snippet?.title) {
          const url = `https://youtube.com/watch?v=${vid}`;
          if (!seen.has(url)) {
            seen.add(url);
            sources.push({ ref: item.snippet.title, url });
          }
        }
      }
    }
  } catch {}

  return sources;
}

async function fetchSourceContent(url: string): Promise<string | null> {
  try {
    const ytMatch = url.match(/[?&]v=([^&]+)/);
    if (ytMatch) {
      const transcript = await getVideoTranscript(ytMatch[1]);
      if (transcript?.transcript) return transcript.transcript.slice(0, 3000);
      return null;
    }

    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; GoScript/1.0)" },
      signal: AbortSignal.timeout(5000),
    });
    const html = await res.text();
    const text = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "")
      .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "")
      .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&[^;]+;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return text.slice(0, 3000) || null;
  } catch {
    return null;
  }
}

async function buildResearchContext(pillars: string[], channelName: string): Promise<string> {
  const queries = pillars.map((p) => `${p} ${channelName} 2026`);
  const allRefs: { ref: string; url: string }[] = [];

  for (const query of queries.slice(0, 3)) {
    const results = await searchInternetSources(query);
    allRefs.push(...results);
  }

  const seen = new Set<string>();
  const uniqueRefs = allRefs.filter((r) => {
    if (seen.has(r.url)) return false;
    seen.add(r.url);
    return true;
  });

  const contentChunks: string[] = [];
  for (let i = 0; i < uniqueRefs.length; i++) {
    const ref = uniqueRefs[i];
    const content = await fetchSourceContent(ref.url);
    if (content) {
      contentChunks.push(
        `[Source ${i + 1}: ${ref.ref || ref.url}](${ref.url})\n${content}`
      );
    }
  }

  return contentChunks.length > 0
    ? contentChunks.join("\n\n---\n\n")
    : "No recent web research available.";
}

function capByTopic(ideas: any[], maxPerTopic: number): any[] {
  const groups: Record<string, any[]> = {};
  for (const idea of ideas) {
    const topic = idea.topic || "Other";
    if (!groups[topic]) groups[topic] = [];
    if (groups[topic].length < maxPerTopic) {
      groups[topic].push(idea);
    }
  }
  return Object.values(groups).flat();
}

export async function POST(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { channel_ids?: string[]; exclude_titles?: string[]; manual_topic?: string };
  try {
    body = await request.json();
  } catch {
    body = {};
  }

  // Fetch saved ideas to exclude already-saved titles
  const { data: savedData } = await supabase
    .from("saved_ideas")
    .select("title")
    .eq("user_id", user.id);

  const savedTitles = new Set((savedData || []).map((s: any) => s.title.toLowerCase().trim()));
  const excludeTitles = [
    ...savedTitles,
    ...(body.exclude_titles || []).map((t: string) => t.toLowerCase().trim()),
  ];
  const excludeSet = new Set(excludeTitles);

  // Fetch channels with blueprints
  let query = supabase
    .from("channels")
    .select("id, name, blueprints(blueprint_data)")
    .eq("user_id", user.id);

  if (body.channel_ids && body.channel_ids.length > 0) {
    query = query.in("id", body.channel_ids);
  }

  const { data: channels, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const validChannels = (channels || []).filter(
    (c: any) => c.blueprints?.blueprint_data
  );

  if (validChannels.length === 0) {
    return NextResponse.json(
      { error: "No analyzed channels with blueprints found", ideas: [] },
      { status: 200 }
    );
  }

  // Build research context from content pillars across all channels
  const allPillars: string[] = [];
  for (const channel of validChannels) {
    const bp = (channel as any).blueprints?.blueprint_data;
    const pillars: string[] = bp?.channel_summary?.content_pillars || [];
    allPillars.push(...pillars);
  }
  const researchContext = await buildResearchContext(
    [...new Set(allPillars.map((p) => p.toLowerCase()))],
    validChannels.map((c: any) => c.name).join(", ")
  );

  // Generate ideas for each blueprint
  const allIdeas: any[] = [];

  for (const channel of validChannels) {
    const blueprint = (channel as any).blueprints.blueprint_data;

    try {
      const result = await callLLM(
        SYSTEM_PROMPT,
        buildUserPrompt(blueprint, channel.name, researchContext, excludeTitles),
        undefined,
        4096
      );

      if (result && typeof result === "object" && "ideas" in result) {
        const ideas = (result as any).ideas
          .filter((idea: any) => !excludeSet.has((idea.title || "").toLowerCase().trim()))
          .map((idea: any) => ({
            ...idea,
            channel_id: channel.id,
            channel_name: channel.name,
          }));
        allIdeas.push(...ideas);
      }
    } catch (err) {
      console.warn(`[Ideas] Failed for channel ${channel.name}:`, err);
    }
  }

  // Manual topic generation
  if (body.manual_topic) {
    const topic = body.manual_topic.trim();
    const manualResearch = await buildResearchContext([topic], topic);
    try {
      const result = await callLLM(
        MANUAL_SYSTEM_PROMPT,
        buildManualUserPrompt(topic, manualResearch, excludeTitles),
        undefined,
        4096
      );
      if (result && typeof result === "object" && "ideas" in result) {
        const ideas = (result as any).ideas
          .filter((idea: any) => !excludeSet.has((idea.title || "").toLowerCase().trim()))
          .map((idea: any) => ({
            ...idea,
            channel_id: "",
            channel_name: "Manual",
          }));
        allIdeas.push(...ideas);
      }
    } catch (err) {
      console.warn(`[Ideas] Failed for manual topic ${topic}:`, err);
    }
  }

  const capped = capByTopic(allIdeas, MAX_IDEAS_PER_TOPIC);
  return NextResponse.json({ ideas: capped });
}
