"use client";

import { BlogCard } from "@/components/blog/BlogCard";
import { LoadMore, usePaginatedPosts } from "@/components/blog/BlogPagination";
import { getBlogIcon } from "@/lib/blog/iconRegistry";
import type { BlogPostMeta, BlogPostSummary } from "@/lib/blog/posts";

const delays = [
  "animate-fade-up-d1",
  "animate-fade-up-d2",
  "animate-fade-up-d3",
  "animate-fade-up-d4",
  "animate-fade-up-d5",
];

interface BlogListProps {
  initialPosts: BlogPostSummary[];
  total: number;
  tag?: string;
  showFeatured?: boolean;
}

function toMeta(summary: BlogPostSummary): BlogPostMeta {
  return {
    slug: summary.slug,
    title: summary.title,
    excerpt: summary.excerpt,
    date: summary.date,
    author: summary.author,
    tags: summary.tags,
    readTime: summary.readTime,
    accent: summary.accent,
    icon: getBlogIcon(summary.iconName),
  };
}

export function BlogList({
  initialPosts,
  total,
  tag,
  showFeatured = false,
}: BlogListProps) {
  const { items, remaining, loading, error, loadMore } = usePaginatedPosts(
    initialPosts,
    total,
    tag
  );

  const [first, ...rest] = items;
  const featured = showFeatured ? first : undefined;
  const gridPosts = showFeatured ? rest : items;

  const controls = (
    <div className="flex flex-col items-center gap-3 mt-12">
      <LoadMore
        remaining={remaining}
        loading={loading}
        error={error}
        onLoadMore={loadMore}
      />
    </div>
  );

  if (!showFeatured) {
    return (
      <>
        {tag ? (
          <h2 className="sr-only">Articles tagged {tag}</h2>
        ) : (
          <h2 className="sr-only">All articles</h2>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {gridPosts.map((summary) => (
            <div key={summary.slug} className="animate-fade-up">
              <BlogCard post={toMeta(summary)} />
            </div>
          ))}
        </div>
        {controls}
      </>
    );
  }

  return (
    <>
      {/* ════════════════ FEATURED ════════════════ */}
      {featured && (
        <section className="relative pb-12 sm:pb-14">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.25em] uppercase">
                Latest dispatch
              </h2>
              <span className="flex-1 h-px bg-gradient-to-r from-orange/20 to-transparent" />
            </div>
            <div className="animate-fade-up">
              <BlogCard post={toMeta(featured)} featured />
            </div>
          </div>
        </section>
      )}

      {/* ════════════════ GRID ════════════════ */}
      <section className="relative pb-20 sm:pb-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.25em] uppercase">
              All posts
            </h2>
            <span className="text-[10px] font-mono text-orange/50 tracking-[0.25em] uppercase">
              {Math.min(gridPosts.length, total)} / {total}
            </span>
            <span className="flex-1 h-px bg-gradient-to-r from-orange/20 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {gridPosts.map((summary, i) => (
              <div key={summary.slug} className={delays[i % delays.length]}>
                <BlogCard post={toMeta(summary)} />
              </div>
            ))}
          </div>

          {controls}
        </div>
      </section>
    </>
  );
}
