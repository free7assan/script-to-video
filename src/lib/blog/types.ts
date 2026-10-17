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

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/**
 * Formats an ISO date (YYYY-MM-DD) without timezone or locale involvement so
 * the server-rendered markup always matches the client during hydration.
 */
export function formatPostDate(date: string): string {
  const [year, month, day] = date.slice(0, 10).split("-");
  const monthName = MONTHS[Number(month) - 1];
  if (!year || !monthName || !day) return date;
  return `${monthName} ${Number(day)}, ${year}`;
}
