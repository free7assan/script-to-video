import { NextRequest, NextResponse } from "next/server";
import { posts, toPostSummary } from "@/lib/blog/posts";
import { rateLimit } from "@/lib/rateLimit";

const MAX_LIMIT = 24;
const DEFAULT_LIMIT = 9;

type BlogIndex = {
  bySlug: Map<string, ReturnType<typeof toPostSummary>>;
  allSlugs: string[];
  tagSlugs: Map<string, string[]>;
  tags: string[] | null;
};

let index: BlogIndex | null = null;

function getIndex(): BlogIndex {
  if (index) return index;

  const bySlug = new Map<string, ReturnType<typeof toPostSummary>>();
  for (const post of posts) bySlug.set(post.slug, toPostSummary(post));

  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const tagSlugs = new Map<string, string[]>();

  for (const post of sorted) {
    for (const tag of post.tags) {
      const bucket = tagSlugs.get(tag);
      if (bucket) bucket.push(post.slug);
      else tagSlugs.set(tag, [post.slug]);
    }
  }

  index = { bySlug, allSlugs: sorted.map((post) => post.slug), tagSlugs, tags: null };
  return index;
}

export function GET(request: NextRequest) {
  if (!rateLimit("blog:list", 60, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { searchParams } = new URL(request.url);
  const rawOffset = Number.parseInt(searchParams.get("offset") ?? "0", 10);
  const rawLimit = Number.parseInt(
    searchParams.get("limit") ?? String(DEFAULT_LIMIT),
    10
  );

  const offset = Number.isFinite(rawOffset) ? Math.max(rawOffset, 0) : 0;
  const limit = Number.isFinite(rawLimit)
    ? Math.min(Math.max(rawLimit, 1), MAX_LIMIT)
    : DEFAULT_LIMIT;

  const store = getIndex();
  const tagParam = searchParams.get("tag")?.trim();
  const tag = tagParam ? decodeURIComponent(tagParam) : undefined;

  if (tag) {
    if (!store.tagSlugs.has(tag)) {
      return NextResponse.json({ error: "Unknown tag" }, { status: 404 });
    }
  }

  const slugs = tag ? store.tagSlugs.get(tag)! : store.allSlugs;
  const items: ReturnType<typeof toPostSummary>[] = [];

  for (let i = offset; i < slugs.length && items.length < limit; i++) {
    const summary = store.bySlug.get(slugs[i]);
    if (summary) items.push(summary);
  }

  const total = slugs.length;

  return NextResponse.json(
    { items, total, offset, hasMore: offset + items.length < total },
    {
      headers: {
        "Cache-Control": "public, s-maxage=600, stale-while-revalidate=3600",
      },
    }
  );
}
