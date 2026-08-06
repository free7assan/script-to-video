"use client";

import { useState, useEffect, useCallback } from "react";
import {
  TrendingUp,
  RefreshCw,
  ExternalLink,
  Eye,
  Loader2,
  Newspaper,
  Flame,
  Sparkles,
  Globe2,
} from "lucide-react";

const REGIONS = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "FR", name: "France" },
  { code: "DE", name: "Germany" },
  { code: "ES", name: "Spain" },
  { code: "IT", name: "Italy" },
  { code: "NL", name: "Netherlands" },
  { code: "BR", name: "Brazil" },
  { code: "MX", name: "Mexico" },
  { code: "IN", name: "India" },
  { code: "JP", name: "Japan" },
  { code: "KR", name: "South Korea" },
  { code: "SG", name: "Singapore" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "AE", name: "UAE" },
  { code: "MA", name: "Morocco" },
  { code: "EG", name: "Egypt" },
  { code: "ZA", name: "South Africa" },
];

interface TrendingVideo {
  videoId: string;
  title: string;
  channelTitle: string;
  publishedAt: string;
  viewCount?: string;
  thumbnailUrl?: string;
}

interface TrendingArticle {
  title: string;
  url: string;
  snippet?: string;
}

interface TrendingTopic {
  topic: string;
  subjects: string[];
  videos: TrendingVideo[];
  articles: TrendingArticle[];
}

function formatViews(views?: string): string {
  if (!views) return "";
  const n = parseInt(views, 10);
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return views;
}

function timeAgo(dateStr: string): string {
  const ms = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(ms / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

export default function TrendingPage() {
  const [topics, setTopics] = useState<TrendingTopic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [region, setRegion] = useState("US");
  const [regionLoading, setRegionLoading] = useState(false);

  const fetchTrending = useCallback(async (regionCode?: string) => {
    setLoading(true);
    setError(null);
    try {
      const selectedRegion = regionCode || region;
      const regionName = REGIONS.find((r) => r.code === selectedRegion)?.name || selectedRegion;
      const params = new URLSearchParams({ region: selectedRegion, regionName });
      const res = await fetch(`/api/ideas/trending?${params.toString()}`);
      const data = await res.json();
      if (res.ok) {
        setTopics(data.topics || []);
      } else {
        setError(data.error || "Failed to load trending");
      }
    } catch {
      setError("Network error — could not load trending");
    }
    setLoading(false);
  }, [region]);

  useEffect(() => {
    fetchTrending();
  }, [fetchTrending]);

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value;
    setRegion(next);
    setRegionLoading(true);
    fetchTrending(next);
    setTimeout(() => setRegionLoading(false), 600);
  };

  return (
    <div className="max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-orange/10 flex items-center justify-center">
              <Flame className="w-4.5 h-4.5 text-orange" />
            </div>
            <h1 className="text-xl font-display font-semibold">Trending</h1>
          </div>
          <p className="text-sm text-muted-foreground ml-12">
            Trending videos and articles in your channel niches
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative">
            <Globe2 className="w-3.5 h-3.5 text-muted-foreground/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={region}
              onChange={handleRegionChange}
              disabled={loading}
              className="h-9 pl-9 pr-8 rounded-lg bg-card/30 border border-border/30 text-sm text-foreground/80 focus:outline-none focus:border-orange/40 transition-all cursor-pointer appearance-none disabled:opacity-50"
              title="Select region"
            >
              {REGIONS.map((r) => (
                <option key={r.code} value={r.code}>
                  {r.name} · {r.code}
                </option>
              ))}
            </select>
            <svg
              className="w-3 h-3 text-muted-foreground/40 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            {regionLoading && (
              <Loader2 className="w-3 h-3 animate-spin text-orange absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none" />
            )}
          </div>
          <button
            onClick={() => fetchTrending()}
            disabled={loading}
            className="h-9 w-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all disabled:opacity-50"
            title="Refresh"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-400 mb-8">
          {error}
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground/40" />
        </div>
      )}

      {!loading && topics.length === 0 && !error && (
        <div className="rounded-xl border border-border/20 bg-card/30 p-8 text-center">
          <TrendingUp className="w-6 h-6 text-muted-foreground/20 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground/50">
            No trending data yet. Analyze a channel first to get content pillars.
          </p>
        </div>
      )}

      {/* Topic sections */}
      <div className="space-y-8">
        {topics.map((topic) => (
          <section key={topic.topic} className="rounded-xl border border-border/20 bg-card/30 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-3.5 h-3.5 text-orange/60" />
              <h2 className="text-sm font-display font-semibold capitalize">{topic.topic}</h2>
            </div>

            {/* Trending subjects */}
            {topic.subjects && topic.subjects.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-3 h-3 text-orange/50" />
                  <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-wider">
                    Trending Subjects
                  </span>
                  <span className="flex-1 h-px bg-border/10" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {topic.subjects.map((subject, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-orange/5 border border-orange/10 text-orange/70 hover:bg-orange/10 hover:border-orange/20 transition-all cursor-default"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Videos column */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="w-3 h-3 text-muted-foreground/40" />
                  <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-wider">
                    Trending Videos
                  </span>
                  <span className="flex-1 h-px bg-border/10" />
                </div>
                <div className="space-y-2">
                  {topic.videos.map((video) => (
                    <a
                      key={video.videoId}
                      href={`https://youtube.com/watch?v=${video.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-foreground/[0.02] transition-all group"
                    >
                      <div className="w-20 h-12 rounded-md overflow-hidden bg-card shrink-0 relative">
                        {video.thumbnailUrl ? (
                          <img
                            src={video.thumbnailUrl}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-foreground/5 flex items-center justify-center">
                            <Eye className="w-3 h-3 text-foreground/10" />
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium leading-snug line-clamp-2 group-hover:text-orange transition-colors">
                          {video.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] text-muted-foreground/50 truncate">
                            {video.channelTitle}
                          </span>
                          {video.viewCount && (
                            <>
                              <span className="text-[8px] text-muted-foreground/30">·</span>
                              <span className="text-[10px] text-muted-foreground/50 shrink-0">
                                {formatViews(video.viewCount)} views
                              </span>
                            </>
                          )}
                          <span className="text-[8px] text-muted-foreground/30">·</span>
                          <span className="text-[10px] text-muted-foreground/40 shrink-0">
                            {timeAgo(video.publishedAt)}
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 text-muted-foreground/20 group-hover:text-orange/40 transition-colors shrink-0 mt-1" />
                    </a>
                  ))}
                  {topic.videos.length === 0 && (
                    <p className="text-[11px] text-muted-foreground/30 italic px-2">
                      No videos found
                    </p>
                  )}
                </div>
              </div>

              {/* Articles column */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Newspaper className="w-3 h-3 text-muted-foreground/40" />
                  <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-wider">
                    Articles
                  </span>
                  <span className="flex-1 h-px bg-border/10" />
                </div>
                <div className="space-y-2">
                  {topic.articles.map((article, i) => (
                    <a
                      key={i}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 rounded-lg hover:bg-foreground/[0.02] transition-all group"
                    >
                      <p className="text-xs font-medium leading-snug line-clamp-2 group-hover:text-orange transition-colors">
                        {article.title}
                      </p>
                      {article.snippet && (
                        <p className="text-[10px] text-muted-foreground/50 leading-relaxed line-clamp-2 mt-0.5">
                          {article.snippet}
                        </p>
                      )}
                      <div className="flex items-center gap-1 mt-1">
                        <ExternalLink className="w-2.5 h-2.5 text-muted-foreground/20" />
                        <span className="text-[9px] text-muted-foreground/30 truncate">
                          {new URL(article.url).hostname.replace("www.", "")}
                        </span>
                      </div>
                    </a>
                  ))}
                  {topic.articles.length === 0 && (
                    <p className="text-[11px] text-muted-foreground/30 italic px-2">
                      No articles found
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
