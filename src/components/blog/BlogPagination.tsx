"use client";

import { useCallback, useState } from "react";
import { ChevronDown, Loader2 } from "lucide-react";
import type { BlogPostSummary } from "@/lib/blog/posts";

const DEFAULT_PAGE_SIZE = 9;

interface PaginatedPosts {
  items: BlogPostSummary[];
  total: number;
  remaining: number;
  loading: boolean;
  error: boolean;
  loadMore: () => void;
}

export function usePaginatedPosts(
  initialPosts: BlogPostSummary[],
  initialTotal: number,
  tag?: string,
  pageSize: number = DEFAULT_PAGE_SIZE
): PaginatedPosts {
  const [items, setItems] = useState(initialPosts);
  const [total, setTotal] = useState(initialTotal);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const remaining = Math.max(total - items.length, 0);

  const loadMore = useCallback(async () => {
    if (loading || items.length >= total) return;

    setLoading(true);
    setError(false);

    try {
      const params = new URLSearchParams({
        offset: String(items.length),
        limit: String(pageSize),
      });
      if (tag) params.set("tag", tag);

      const res = await fetch(`/api/blog?${params.toString()}`, {
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      const data = (await res.json()) as {
        items: BlogPostSummary[];
        total: number;
      };

      setTotal(data.total);
      if (data.items.length > 0) {
        setItems((prev) => [...prev, ...data.items]);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [items.length, loading, pageSize, tag, total]);

  return { items, total, remaining, loading, error, loadMore };
}

interface LoadMoreProps {
  remaining: number;
  loading: boolean;
  error: boolean;
  onLoadMore: () => void;
}

export function LoadMore({ remaining, loading, error, onLoadMore }: LoadMoreProps) {
  if (remaining === 0) {
    return (
      <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.25em] uppercase">
        End of the journal
      </span>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={onLoadMore}
        disabled={loading}
        aria-busy={loading}
        className="group relative inline-flex items-center gap-2.5 h-12 px-8 rounded-xl border border-orange/30 bg-orange/[0.04] text-sm font-semibold text-orange hover:bg-orange hover:text-black hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 transition-all duration-300"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
        ) : (
          <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
        )}
        {loading ? "Loading" : "Load more articles"}
      </button>
      {error ? (
        <span className="text-[10px] font-mono text-red-400/70 tracking-[0.2em] uppercase">
          Couldn&apos;t load more — try again
        </span>
      ) : (
        <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.2em] uppercase">
          {remaining} more to load
        </span>
      )}
    </>
  );
}
