"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag(...args);
}

export function GoogleAnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    let fired = false;
    const onScroll = () => {
      if (fired) return;
      const doc = document.documentElement;
      if (doc.scrollHeight <= 0) return;
      const percent = ((doc.scrollTop + window.innerHeight) / doc.scrollHeight) * 100;
      if (percent >= 90) {
        fired = true;
        gtag("event", "scroll", { percent_scrolled: 90 });
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;
      let url: URL;
      try {
        url = new URL(anchor!.href, window.location.href);
      } catch {
        return;
      }
      if (url.hostname === window.location.hostname) return;
      gtag("event", "click", {
        link_url: url.href,
        link_domain: url.hostname,
        outbound: true,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
