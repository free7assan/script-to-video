export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
  process.env.APP_URL ??
  "http://localhost:3000";

export const SITE_NAME = "GoScript";

export const SITE_DESCRIPTION =
  "Analyze YouTube channels, extract their script methodology, and write videos built on patterns that actually work.";

export const BLOG_DESCRIPTION =
  "Field notes from the script lab: hooks, retention curves, pattern extraction, and the repeatable workflows behind videos that perform.";
