"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChannelCard } from "@/components/ChannelCard";
import type { Channel, SavedAnalysis } from "@/types";
import { Library, Loader2, EyeOff, Eye, Trash2, Video, CheckCircle2, ExternalLink } from "lucide-react";

export default function BlueprintsPage() {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [loading, setLoading] = useState(true);
  const [showArchived, setShowArchived] = useState(false);
  const [analyses, setAnalyses] = useState<SavedAnalysis[]>([]);
  const [analysesLoading, setAnalysesLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/blueprints${showArchived ? "?archived=true" : ""}`)
      .then((r) => r.json())
      .then((data) => setChannels(data))
      .finally(() => setLoading(false));
  }, [showArchived]);

  useEffect(() => {
    setAnalysesLoading(true);
    fetch("/api/video/analyses")
      .then((r) => r.json())
      .then((data) => setAnalyses(data.analyses ?? []))
      .finally(() => setAnalysesLoading(false));
  }, []);

  const deleteAnalysis = async (id: string) => {
    await fetch("/api/video/analyses", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setAnalyses((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="space-y-8 animate-in">
      {/* Header */}
      <div className="rounded-xl border border-border/50 bg-card/50">
        <div className="p-4 border-b border-border/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
              <Library className="w-4 h-4 text-orange" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm">Blueprints</h3>
              <p className="text-xs text-muted-foreground">Saved channel script methodology analyses</p>
            </div>
            <div className="flex-1" />
            <button
              onClick={() => setShowArchived(!showArchived)}
              className="btn-ghost text-xs"
            >
              {showArchived ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              {showArchived ? "Active" : "Archived"}
            </button>
          </div>
        </div>
      </div>

      {/* Channel Blueprints */}
      {loading ? (
        <div className="flex items-center justify-center py-24">
          <Loader2 className="w-5 h-5 animate-spin mr-3 text-orange" />
          <span className="text-sm text-muted-foreground">Loading blueprints...</span>
        </div>
      ) : channels.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border/50 bg-card/50 p-12 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange/10 to-prussian-blue/10 flex items-center justify-center mx-auto mb-5 ring-1 ring-orange/10">
            <Library className="w-7 h-7 text-orange/60" />
          </div>
          <h2 className="text-xl font-display font-semibold mb-2">
            {showArchived ? "No archived blueprints" : "No blueprints yet"}
          </h2>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-8 leading-relaxed">
            {showArchived
              ? ""
              : "Complete an analysis to generate a blueprint"}
          </p>
          <Link
            href="/channels/new"
            className="btn-primary glow-primary"
          >
            <Library className="w-4 h-4" />
            Add Channel
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          <h3 className="font-display font-semibold text-xs text-muted-foreground/50 uppercase tracking-wider">
            Channel Blueprints ({channels.length})
          </h3>
          {channels.map((channel) => (
            <ChannelCard key={channel.id} channel={channel} />
          ))}
        </div>
      )}

      {/* Video Analyses */}
      <div className="space-y-3">
        <h3 className="font-display font-semibold text-xs text-muted-foreground/50 uppercase tracking-wider">
          Video Analyses ({analyses.length})
        </h3>
        {analysesLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-4 h-4 animate-spin mr-2 text-orange" />
            <span className="text-xs text-muted-foreground">Loading...</span>
          </div>
        ) : analyses.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border/50 bg-card/50 p-8 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/10 to-prussian-blue/10 flex items-center justify-center mx-auto mb-3">
              <Video className="w-5 h-5 text-orange/60" />
            </div>
            <p className="text-sm text-muted-foreground/50">No video analyses yet</p>
            <p className="text-xs text-muted-foreground/40 mt-1">
              Analyze a video to save its script structure here
            </p>
            <Link
              href="/video/analyze"
              className="btn-secondary mt-4 inline-flex glow-primary"
            >
              <Video className="w-4 h-4" />
              Analyze a Video
            </Link>
          </div>
        ) : (
          <div className="space-y-2">
            {analyses.map((a) => (
              <div
                key={a.id}
                className="rounded-xl border border-border/50 bg-card/50 p-4 hover:border-border/80 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Video className="w-4 h-4 text-orange" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <a
                      href={a.youtube_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium truncate block hover:text-orange transition-colors"
                    >
                      {a.video_title || a.youtube_url}
                      <ExternalLink className="w-3 h-3 inline ml-1 text-muted-foreground/40" />
                    </a>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {a.analysis_data.structure?.slice(0, 4).map((s, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-orange/10 text-orange/80 border border-orange/20">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-[11px] text-muted-foreground/50">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        {a.analysis_data.hook_style}
                      </span>
                      <span>{new Date(a.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteAnalysis(a.id)}
                    className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground/30 hover:text-red-400 hover:bg-red-500/10 transition-all"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
            <div className="text-center pt-2">
              <Link
                href="/video/analyze"
                className="btn-ghost text-xs"
              >
                <Video className="w-3.5 h-3.5" />
                Analyze another video
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
