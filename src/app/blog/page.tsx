import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { BlogList } from "@/components/blog/BlogList";
import { getAllTags, getPostsByTag, posts, toPostSummary } from "@/lib/blog/posts";
import { BLOG_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — GoScript",
  description: BLOG_DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "GoScript Journal",
    description: BLOG_DESCRIPTION,
    url: "/blog",
  },
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const initialPosts = sorted.slice(0, 10).map(toPostSummary);

  const topTags = getAllTags()
    .map((tag) => ({ tag, count: getPostsByTag(tag).length }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 18);

  return (
    <div className="pb-0 overflow-hidden relative">
      {/* ──── Ambient background ──── */}
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-orange/8 via-orange/4 to-transparent blur-[120px] animate-morph-diamond" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-radial from-orange/6 via-orange/3 to-transparent blur-[100px] animate-shimmer-rotate" />
        <div className="absolute top-1/3 left-2/3 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-orange/4 via-transparent to-transparent blur-[80px] animate-aurora" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]" aria-hidden="true">
          <defs>
            <pattern id="blog-grid" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blog-grid)" />
        </svg>
        <div className="absolute inset-0 bg-noise opacity-30" />
      </div>

      <div className="relative z-10">
        {/* ════════════════ HERO ════════════════ */}
        <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-16">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-5 animate-fade-up">
                <span className="w-8 h-px bg-orange/30" />
                <span className="text-xs sm:text-sm font-mono text-orange/70 tracking-[0.2em] uppercase">
                  Journal
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.02] mb-4">
                Field notes from the{" "}
                <span
                  className="bg-gradient-to-r from-orange via-orange/80 to-orange/40 bg-clip-text text-transparent animate-shimmer-text"
                  style={{ backgroundSize: "200% auto" }}
                >
                  script lab.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-up-d2">
                Hooks, retention curves, pattern extraction, and the repeatable processes
                behind videos that actually perform. Written by the team shipping GoScript.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════ TOPICS ════════════════ */}
        {topTags.length > 0 && (
          <section className="relative pb-12 sm:pb-14">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.25em] uppercase">
                  Browse by topic
                </span>
                <span className="flex-1 h-px bg-gradient-to-r from-orange/20 to-transparent" />
              </div>
              <div className="flex flex-wrap gap-2">
                {topTags.map(({ tag, count }) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${encodeURIComponent(tag)}`}
                    className="group inline-flex items-center gap-2 h-9 px-3.5 rounded-full border border-orange/15 bg-orange/[0.03] text-xs font-mono tracking-wider uppercase text-orange/70 hover:border-orange/40 hover:bg-orange/[0.08] hover:text-orange transition-all"
                  >
                    {tag}
                    <span className="text-[10px] text-muted-foreground/40 group-hover:text-orange/60">
                      {count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════════════════ FEATURED + GRID (load more) ════════════════ */}
        <BlogList initialPosts={initialPosts} total={sorted.length} showFeatured />

        {/* ════════════════ CTA ════════════════ */}
        <section className="relative py-16 sm:py-20">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl border border-orange/20 bg-gradient-to-br from-orange/[0.04] to-card/40 overflow-hidden group text-center">
              <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-radial from-orange/10 to-transparent blur-[120px] animate-morph-diamond" />
              <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-radial from-orange/8 to-transparent blur-[100px] animate-shimmer-rotate" />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent absolute animate-scan-line" />
              </div>

              <div className="relative px-8 py-12 sm:px-20 sm:py-16">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-500">
                  <Sparkles className="w-6 h-6 text-orange" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
                  Enough theory —{" "}
                  <span className="bg-gradient-to-r from-orange via-orange/80 to-orange/40 bg-clip-text text-transparent">
                    run it.
                  </span>
                </h2>
                <p className="text-muted-foreground text-sm max-w-md mx-auto mt-3 mb-8 leading-relaxed">
                  Analyze a channel, extract its blueprint, and generate scripts built on
                  patterns that actually work.
                </p>
                <Link
                  href="/channels/new"
                  className="group/cta relative inline-flex items-center gap-2.5 h-12 px-8 rounded-xl bg-orange text-black text-sm font-semibold hover:bg-orange/90 hover:scale-[1.02] transition-all shadow-lg shadow-orange/20 animate-glow-ring"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center gap-2.5">
                    Analyze a Channel
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ──── Footer ──── */}
        <footer className="relative pt-12 pb-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-border/10 pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/10 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-orange">G</span>
                  </div>
                  <span className="text-xs font-mono text-orange/40 tracking-wider uppercase">GoScript</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground/40 tracking-wider uppercase">
                  <span className="hover:text-orange/60 transition-colors">Pattern-Based Script Intelligence</span>
                  <span className="w-px h-3 bg-muted-foreground/10" />
                  <span className="hover:text-orange/60 transition-colors">{new Date().getFullYear()}</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}