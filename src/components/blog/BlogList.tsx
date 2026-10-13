"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { getBlogIcon } from "@/lib/blog/iconRegistry";
import type { BlogPostMeta, BlogPostSummary } from "@/lib/blog/posts";

const delays = [
  "animate-fade-up-d1",
  "animate-fade-up-d2",
  "animate-fade-up-d3",
  "animate-fade-up-d4",
  "animate-fade-up-d5",
];

const PAGE_SIZE = 9;

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

export function BlogList({ posts }: { posts: BlogPostSummary[] }) {
  const [featured, ...rest] = posts;
  const [visible, setVisible] = useState(PAGE_SIZE);

  const remaining = Math.max(rest.length - visible, 0);

  return (
    <>
      {/* ════════════════ FEATURED ════════════════ */}
      {featured && (
        <section className="relative pb-12 sm:pb-14">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.25em] uppercase">
                Latest dispatch
              </span>
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
            <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.25em] uppercase">
              All posts
            </span>
            <span className="text-[10px] font-mono text-orange/50 tracking-[0.25em] uppercase">
              {Math.min(visible, rest.length)} / {rest.length}
            </span>
            <span className="flex-1 h-px bg-gradient-to-r from-orange/20 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {rest.map((summary, i) => (
              <div key={summary.slug} className={i >= visible ? "hidden" : delays[i % delays.length]}>
                <BlogCard post={toMeta(summary)} />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 mt-12">
            {remaining > 0 ? (
              <>
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="group relative inline-flex items-center gap-2.5 h-12 px-8 rounded-xl border border-orange/30 bg-orange/[0.04] text-sm font-semibold text-orange hover:bg-orange hover:text-black hover:scale-[1.02] transition-all duration-300"
                >
                  Load more articles
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                </button>
                <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.2em] uppercase">
                  {remaining} more to load
                </span>
              </>
            ) : (
              <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.25em] uppercase">
                End of the journal
              </span>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
