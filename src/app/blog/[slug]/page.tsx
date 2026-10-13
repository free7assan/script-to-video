import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Sparkles, Target } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { formatPostDate, getAllSlugs, getPost, getRelatedPosts } from "@/lib/blog/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return {
      title: "Post Not Found — GoScript Blog",
      robots: { index: false, follow: false },
    };
  }
  const url = `/blog/${post.slug}`;
  return {
    title: `${post.title} — GoScript Blog`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const Icon = post.icon;

  const articleUrl = `${SITE_URL}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Organization", name: post.author.name },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/icon.png`,
          },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
        url: articleUrl,
        keywords: post.tags.join(", "),
        articleSection: post.tags[0],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <div className="pb-0 overflow-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ──── Ambient background ──── */}
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-orange/8 via-orange/4 to-transparent blur-[120px] animate-morph-diamond" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-radial from-orange/6 via-orange/3 to-transparent blur-[100px] animate-shimmer-rotate" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]" aria-hidden="true">
          <defs>
            <pattern id="article-grid" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#article-grid)" />
        </svg>
        <div className="absolute inset-0 bg-noise opacity-30" />
      </div>

      <div className="relative z-10">
        {/* ════════════════ ARTICLE ════════════════ */}
        <section className="relative pt-16 sm:pt-20 pb-12">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
          <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 h-9 px-3 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all animate-fade-up"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Blog
            </Link>

            <header className="mt-8 mb-10">
              <div className="flex items-center gap-3 mb-5 animate-fade-up">
                <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange border border-orange/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-orange/70 tracking-[0.2em] uppercase">
                  GoScript Journal
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-[1.05] mb-6 animate-fade-up-d1">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-mono text-muted-foreground/60 tracking-wider uppercase animate-fade-up-d2">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span className="text-orange/40">&middot;</span>
                <span>{post.readTime}</span>
                <span className="text-muted-foreground/30">&middot;</span>
                <span>
                  {post.author.name} <span className="text-muted-foreground/40">/{post.author.role}</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-6 animate-fade-up-d3">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${encodeURIComponent(tag)}`}
                    className="text-[10px] px-2.5 py-1 rounded-full border border-orange/15 bg-orange/[0.03] text-orange/70 font-mono tracking-wider uppercase hover:border-orange/40 hover:text-orange transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </header>

            <div className="pt-8 border-t border-border/20 animate-fade-up-d4">
              {post.content.map((block, i) => (
                <div key={i}>
                  {block.heading && (
                    <h2 className="text-xl sm:text-2xl font-display font-semibold tracking-tight mt-8 first:mt-0 mb-3">
                      {block.heading}
                    </h2>
                  )}
                  {block.paragraphs?.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-muted-foreground leading-relaxed text-[15px] sm:text-base mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {block.bullets && (
                    <ul className="space-y-3 my-5">
                      {block.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-muted-foreground leading-relaxed text-[15px] sm:text-base"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2.5 shrink-0 ring-2 ring-orange/10" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                  {block.quote && (
                    <blockquote className="relative my-6 pl-5 border-l-2 border-orange/40">
                      <p className="font-display font-medium text-foreground/70 italic leading-relaxed">
                        {block.quote}
                      </p>
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ RELATED ════════════════ */}
        {related.length > 0 && (
          <section className="relative py-12 sm:py-16">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.25em] uppercase">
                  Keep reading
                </span>
                <span className="flex-1 h-px bg-gradient-to-r from-orange/20 to-transparent" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {related.map((postItem, i) => (
                  <BlogCard
                    key={postItem.slug}
                    post={postItem}
                    className={`animate-fade-up-d${(i % 5) + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════════════════ CTA ════════════════ */}
        <section className="relative py-12 sm:py-16">
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
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight">
                  Turn this into your{" "}
                  <span className="bg-gradient-to-r from-orange via-orange/80 to-orange/40 bg-clip-text text-transparent">
                    next script.
                  </span>
                </h2>
                <p className="text-muted-foreground text-sm max-w-md mx-auto mt-3 mb-8 leading-relaxed">
                  Analyze a channel, extract its structural DNA, and generate scripts
                  engineered from patterns that actually work.
                </p>
                <Link
                  href="/channels/new"
                  className="group/cta relative inline-flex items-center gap-2.5 h-12 px-8 rounded-xl bg-orange text-black text-sm font-semibold hover:bg-orange/90 hover:scale-[1.02] transition-all shadow-lg shadow-orange/20 animate-glow-ring"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center gap-2.5">
                    <Target className="w-4 h-4" />
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
                  <Link href="/blog" className="hover:text-orange/60 transition-colors">
                    Journal
                  </Link>
                  <span className="w-px h-3 bg-muted-foreground/10" />
                  <Link href="/channels/new" className="hover:text-orange/60 transition-colors">
                    Analyze a Channel
                  </Link>
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