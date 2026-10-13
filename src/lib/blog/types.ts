import type { LucideIcon } from "lucide-react";

export interface BlogContentBlock {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  quote?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: { name: string; role: string };
  tags: string[];
  readTime: string;
  accent?: string;
  icon: LucideIcon;
  content: BlogContentBlock[];
}

export type BlogPostMeta = Omit<BlogPost, "content">;

export type BlogPostSummary = Omit<BlogPost, "content" | "icon"> & {
  iconName: string;
};

export function toPostSummary(post: BlogPost): BlogPostSummary {
  const { content: _content, icon, ...rest } = post;
  return { ...rest, iconName: icon.displayName ?? "" };
}

export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
