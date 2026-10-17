const PRODUCTION_URL = "https://www.goscript.app";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  // On Vercel, always advertise the stable production domain in canonical/OG URLs
  // rather than the per-deployment VERCEL_URL (which would leak preview URLs).
  if (process.env.VERCEL) return PRODUCTION_URL;

  return (process.env.APP_URL ?? PRODUCTION_URL).replace(/\/$/, "");
}

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = "GoScript";

export const SITE_DESCRIPTION =
  "Analyze YouTube channels, extract their script methodology, and write videos built on patterns that actually work.";

export const BLOG_DESCRIPTION =
  "Field notes from the script lab: hooks, retention curves, pattern extraction, and the repeatable workflows behind videos that perform.";
