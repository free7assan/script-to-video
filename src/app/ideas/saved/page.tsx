"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bookmark,
  Clock,
  ArrowRight,
  Loader2,
  Trash2,
  Lightbulb,
} from "lucide-react";

interface SavedIdea {
  id: string;
  title: string;
  description: string;
  topic: string;
  hook_approach: string;
  estimated_duration_minutes: number;
  reasoning: string;
  channel_name: string;
  channel_id: string;
  created_at: string;
  outline?: string[];
  key_points?: string[];
  target_keywords?: string[];
  thumbnail_concept?: string;
  sources_to_reference?: string[];
}

export default function SavedIdeasPage() {
  const [saved, setSaved] = useState<SavedIdea[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSaved = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/ideas/saved");
      const data = await res.json();
      if (res.ok) setSaved(data.saved || []);
    } catch {}
    setLoading(false);
  };

  useEffect(() => {
    fetchSaved();
  }, []);

  const remove = async (id: string) => {
    await fetch(`/api/ideas/saved/${id}`, { method: "DELETE" });
    setSaved((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-9 h-9 rounded-xl bg-orange/10 flex items-center justify-center">
          <Bookmark className="w-4.5 h-4.5 text-orange fill-orange" />
        </div>
        <div>
          <h1 className="text-xl font-display font-semibold">Saved Ideas</h1>
          <p className="text-sm text-muted-foreground">
            {saved.length} idea{saved.length !== 1 ? "s" : ""} saved
          </p>
        </div>
      </div>

      {loading && (
        <div className="rounded-2xl border border-border/30 bg-card/30 p-16 text-center">
          <Loader2 className="w-8 h-8 animate-spin text-orange mx-auto mb-4" />
        </div>
      )}

      {!loading && saved.length === 0 && (
        <div className="rounded-2xl border border-border/30 bg-card/30 p-16 text-center">
          <div className="w-14 h-14 rounded-2xl bg-orange/5 border border-orange/10 flex items-center justify-center mx-auto mb-4">
            <Bookmark className="w-6 h-6 text-orange/40" />
          </div>
          <h3 className="text-base font-display font-semibold mb-1">No saved ideas</h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
            Save ideas from the{" "}
            <Link href="/ideas" className="text-orange hover:underline">
              Ideas page
            </Link>{" "}
            to see them here.
          </p>
          <Link
            href="/ideas"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-orange text-black text-sm font-semibold hover:bg-orange/90 transition-all"
          >
            <Lightbulb className="w-4 h-4" />
            Browse Ideas
          </Link>
        </div>
      )}

      {!loading && saved.length > 0 && (
        <div className="grid sm:grid-cols-1 gap-3">
          {saved.map((idea) => (
            <div
              key={idea.id}
              className="rounded-xl border border-border/30 bg-card/40 p-4 hover:border-orange/20 transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-7 h-7 rounded-lg bg-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Bookmark className="w-3.5 h-3.5 text-orange fill-orange" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange/5 text-orange/60 font-mono">
                      {idea.topic}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold leading-snug">{idea.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {idea.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full bg-orange/5 border border-orange/10 text-orange/70">
                  <Clock className="w-2 h-2" />
                  {idea.estimated_duration_minutes} min
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full bg-foreground/5 border border-border/20 text-muted-foreground/60">
                  {idea.hook_approach}
                </span>
              </div>

              <p className="text-[11px] text-muted-foreground/40 leading-relaxed italic mb-3">
                {idea.reasoning}
              </p>

              {idea.outline && idea.outline.length > 0 && (
                <div className="mb-3">
                  <p className="text-[9px] text-muted-foreground/40 font-semibold uppercase tracking-wider mb-1.5">Outline</p>
                  <div className="space-y-0.5">
                    {idea.outline.map((item, i) => (
                      <p key={i} className="text-[10px] text-muted-foreground/60 flex items-start gap-1.5">
                        <span className="text-orange/40 mt-0.5">→</span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {idea.key_points && idea.key_points.length > 0 && (
                <div className="mb-3">
                  <p className="text-[9px] text-muted-foreground/40 font-semibold uppercase tracking-wider mb-1.5">Key Points</p>
                  <div className="space-y-0.5">
                    {idea.key_points.map((point, i) => (
                      <p key={i} className="text-[10px] text-muted-foreground/60 flex items-start gap-1.5">
                        <span className="text-orange/40 mt-0.5">•</span>
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {idea.target_keywords && idea.target_keywords.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {idea.target_keywords.map((kw, i) => (
                    <span key={i} className="text-[8px] px-1.5 py-0.5 rounded-full bg-foreground/5 border border-border/10 text-muted-foreground/40 font-mono">
                      {kw}
                    </span>
                  ))}
                </div>
              )}

              {idea.thumbnail_concept && (
                <p className="text-[10px] text-muted-foreground/40 leading-relaxed mb-3">
                  <span className="text-orange/50 text-[9px] font-semibold uppercase tracking-wider">Thumbnail: </span>
                  {idea.thumbnail_concept}
                </p>
              )}

              {idea.sources_to_reference && idea.sources_to_reference.length > 0 && (
                <div className="mb-3">
                  <p className="text-[9px] text-muted-foreground/40 font-semibold uppercase tracking-wider mb-1">Sources</p>
                  <div className="space-y-0.5">
                    {idea.sources_to_reference.map((src, i) => (
                      <p key={i} className="text-[9px] text-muted-foreground/30 truncate">
                        📎 {src}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-border/10">
                <span className="text-[10px] font-mono text-muted-foreground/30 tracking-wider">
                  {idea.channel_name}
                </span>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/scripts/new?idea=${encodeURIComponent(`Idea: ${idea.title}\n\n${idea.description}`)}`}
                    className="text-[10px] text-orange/50 hover:text-orange flex items-center gap-1 transition-colors"
                  >
                    Write script
                    <ArrowRight className="w-2.5 h-2.5" />
                  </Link>
                  <button
                    onClick={() => remove(idea.id)}
                    className="w-6 h-6 rounded flex items-center justify-center text-muted-foreground/30 hover:text-red-400 hover:bg-red-500/10 transition-all"
                    title="Remove"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
