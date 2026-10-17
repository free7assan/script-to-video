import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Hash, Tag as TagIcon } from "lucide-react";
import { BlogList } from "@/components/blog/BlogList";
import { getAllTags, getPostsByTag, toPostSummary } from "@/lib/blog/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const count = getPostsByTag(decoded).length;
  if (count === 0) {
    return { title: "Topic Not Found — GoScript Blog", robots: { index: false, follow: false } };
  }
  const title = `${decoded} — GoScript Journal`;
  const description = `${count} articles on ${decoded} from the GoScript Journal, covering YouTube scripting, retention, packaging, and the workflows behind videos that perform.`;
  return {
    title,
    description,
    alternates: { canonical: `/blog/tag/${encodeURIComponent(decoded)}` },
    openGraph: { type: "website", title, description, url: `/blog/tag/${encodeURIComponent(decoded)}` },
  };
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const tagPosts = getPostsByTag(decoded).sort((a, b) => b.date.localeCompare(a.date));
  if (tagPosts.length === 0) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${decoded} — GoScript Journal`,
    url: `${SITE_URL}/blog/tag/${encodeURIComponent(decoded)}`,
    isPartOf: { "@type": "Blog", name: `${SITE_NAME} Journal`, url: `${SITE_URL}/blog` },
  };

  return (
    <div className="pb-0 overflow-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-orange/8 via-orange/4 to-transparent blur-[120px] animate-morph-diamond" />
        <div className="absolute inset-0 bg-noise opacity-30" />
      </div>

      <div className="relative z-10">
        <section className="relative pt-24 sm:pt-28 pb-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 h-9 px-3 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Blog
            </Link>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange border border-orange/10 flex items-center justify-center">
                <TagIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.25em] uppercase">
                  Topic
                </span>
                <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                  {decoded}
                </h1>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {tagPosts.length} {tagPosts.length === 1 ? "article" : "articles"} filed under{" "}
              <span className="text-orange/70 font-mono">{decoded}</span>.
            </p>
          </div>
        </section>

        <section className="relative pb-20 sm:pb-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogList
              initialPosts={tagPosts.slice(0, 12).map(toPostSummary)}
              total={tagPosts.length}
              tag={decoded}
            />

            <div className="mt-14 pt-8 border-t border-border/10">
              <div className="flex items-center gap-2 mb-4 text-[10px] font-mono text-muted-foreground/50 tracking-[0.25em] uppercase">
                <Hash className="w-3 h-3" />
                Other topics
              </div>
              <div className="flex flex-wrap gap-2">
                {getAllTags()
                  .filter((t) => t !== decoded)
                  .slice(0, 24)
                  .map((t) => (
                    <Link
                      key={t}
                      href={`/blog/tag/${encodeURIComponent(t)}`}
                      className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full border border-orange/15 bg-orange/[0.03] text-[10px] font-mono tracking-wider uppercase text-orange/70 hover:border-orange/40 hover:text-orange transition-all"
                    >
                      {t}
                    </Link>
                  ))}
              </div>
            </div>

            <div className="flex justify-center mt-14">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2.5 h-12 px-8 rounded-xl border border-orange/30 bg-orange/[0.04] text-sm font-semibold text-orange hover:bg-orange hover:text-black transition-all duration-300"
              >
                All articles
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
