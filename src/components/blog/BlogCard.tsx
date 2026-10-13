import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatPostDate, type BlogPostMeta } from "@/lib/blog/posts";

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
  className?: string;
}

export function BlogCard({ post, featured = false, className = "" }: BlogCardProps) {
  const Icon = post.icon;

  return (
    <article
      className={`group relative h-full ${
        featured
          ? "card-accent bg-gradient-to-br from-card/60 to-card/30 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5"
          : "card-hover hover:border-orange/25 hover:shadow-lg hover:shadow-orange/5"
      } hover:-translate-y-0.5 transition-all duration-500 ${className}`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`relative flex flex-col h-full ${featured ? "p-6 sm:p-8" : "p-5 sm:p-6"}`}
        aria-label={post.title}
      >
        <div className="absolute -inset-24 bg-gradient-radial from-orange/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative flex items-start justify-between gap-4 mb-4 shrink-0">
          <div
            className={`rounded-xl bg-orange/10 text-orange border border-orange/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300 ${
              featured ? "w-14 h-14" : "w-11 h-11"
            }`}
          >
            <Icon className={featured ? "w-6 h-6" : "w-5 h-5"} />
          </div>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-orange/50 inline-flex items-center gap-1.5 pt-1 shrink-0">
            {featured && (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse-glow inline-block" />
                Featured
              </>
            )}
            <ArrowUpRight
              className={`text-muted-foreground/40 group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ${
                featured ? "w-5 h-5" : "w-4 h-4"
              }`}
            />
          </span>
        </div>

        <div className="relative flex flex-wrap gap-1.5 mb-3 shrink-0">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2.5 py-1 rounded-full border border-orange/15 bg-orange/[0.03] text-orange/70 font-mono tracking-wider uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className={`font-display font-semibold tracking-tight text-foreground group-hover:text-orange transition-colors duration-300 ${
            featured ? "text-2xl sm:text-3xl mb-3" : "text-lg sm:text-xl leading-snug mb-2"
          }`}
        >
          {post.title}
        </h3>

        <p
          className={`text-sm text-muted-foreground leading-relaxed mb-6 ${
            featured ? "line-clamp-3" : "line-clamp-2"
          }`}
        >
          {post.excerpt}
        </p>

        <div className="relative flex items-center gap-2 mt-auto text-[10px] font-mono text-muted-foreground/60 tracking-wider uppercase">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span className="text-orange/40">&middot;</span>
          <span>{post.readTime}</span>
          <span className="text-muted-foreground/30">&middot;</span>
          <span className="truncate">
            {post.author.name} / {post.author.role}
          </span>
        </div>
      </Link>
    </article>
  );
}