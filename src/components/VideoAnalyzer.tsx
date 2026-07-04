"use client";

import { useState, useRef, useEffect } from "react";
import { Loader2, Play, RefreshCw, CheckCircle2, XCircle, Video, ArrowLeft, Trash2, ExternalLink, Pause, BarChart3 } from "lucide-react";
import type { VideoAnalysis, SavedAnalysis, Channel, AnalysisJob } from "@/types";

const statusLabels: Record<string, string> = {
  idle: "Paste a YouTube link to begin",
  fetching: "Fetching transcript...",
  analyzing: "Analyzing script structure...",
  completed: "Analysis complete!",
  error: "Analysis failed",
};

export function VideoAnalyzer() {
  const [url, setUrl] = useState("");
  const [phase, setPhase] = useState<"form" | "progress" | "result">("form");
  const [status, setStatus] = useState<string>("idle");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<VideoAnalysis | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const [savedAnalyses, setSavedAnalyses] = useState<SavedAnalysis[]>([]);
  const [activeChannels, setActiveChannels] = useState<(Channel & { job?: AnalysisJob })[]>([]);

  useEffect(() => {
    fetch("/api/video/analyses")
      .then((r) => r.json())
      .then((data) => setSavedAnalyses(data.analyses || []))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const fetchActive = async () => {
      try {
        const res = await fetch("/api/channels");
        const channels: Channel[] = await res.json();
        const active = channels.filter((c) =>
          ["pending", "fetching", "analyzing", "paused", "error"].includes(c.status)
        );
        const withJobs = await Promise.all(
          active.map(async (ch) => {
            try {
              const sr = await fetch(`/api/channels/${ch.id}/status`);
              const sd = await sr.json();
              return { ...ch, job: sd.job || undefined };
            } catch {
              return ch;
            }
          })
        );
        setActiveChannels(withJobs);
      } catch {}
    };
    fetchActive();
    const interval = setInterval(fetchActive, 8000);
    return () => clearInterval(interval);
  }, []);

  const channelAction = async (channelId: string, action: string) => {
    if (action === "delete") {
      if (!window.confirm("Delete this channel and all its data?")) return;
      await fetch(`/api/channels/${channelId}`, { method: "DELETE" });
      setActiveChannels((prev) => prev.filter((c) => c.id !== channelId));
      return;
    }
    if (action === "cancel" || action === "pause") {
      await fetch(`/api/channels/${channelId}/analysis`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
    } else if (action === "resume") {
      await fetch(`/api/channels/${channelId}/analysis`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "resume" }),
      });
    }
    setActiveChannels((prev) =>
      prev.map((c) =>
        c.id === channelId
          ? { ...c, status: (action === "pause" ? "paused" : action === "cancel" ? "cancelled" : action === "resume" ? "fetching" : c.status) as Channel["status"] }
          : c
      )
    );
  };

  const deleteAnalysis = async (id: string) => {
    await fetch("/api/video/analyses", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setSavedAnalyses((prev) => prev.filter((a) => a.id !== id));
  };

  const refreshActive = async () => {
    try {
      const res = await fetch("/api/channels");
      const channels: Channel[] = await res.json();
      const active = channels.filter((c) =>
        ["pending", "fetching", "analyzing", "paused", "error"].includes(c.status)
      );
      const withJobs = await Promise.all(
        active.map(async (ch) => {
          try {
            const sr = await fetch(`/api/channels/${ch.id}/status`);
            const sd = await sr.json();
            return { ...ch, job: sd.job || undefined };
          } catch {
            return ch;
          }
        })
      );
      setActiveChannels(withJobs);
    } catch {}
  };

  const analyze = async () => {
    if (!url.trim()) return;

    // Check if video already analyzed
    const normUrl = url.trim().replace(/\/$/, "");
    const existing = savedAnalyses.find((a) => a.youtube_url.replace(/\/$/, "") === normUrl);
    if (existing) {
      setResult(existing.analysis_data);
      setStatus("completed");
      setProgress(100);
      setPhase("result");
      return;
    }

    setPhase("progress");
    setStatus("fetching");
    setProgress(10);
    setError("");
    setResult(null);

    abortRef.current = new AbortController();

    try {
      setProgress(30);
      const res = await fetch("/api/video/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
        signal: abortRef.current.signal,
      });

      setStatus("analyzing");
      setProgress(60);

      const data = await res.json();
      if (data.error) {
        setStatus("error");
        setError(data.error);
        setProgress(60);
        return;
      }

      setProgress(90);

      await new Promise((r) => setTimeout(r, 400));

      setResult(data.analysis);
      setStatus("completed");
      setProgress(100);
      setPhase("result");

      refreshActive();
      fetch("/api/video/analyses")
        .then((r) => r.json())
        .then((data) => setSavedAnalyses(data.analyses || []))
        .catch(() => {});
    } catch (err: any) {
      if (err.name === "AbortError") {
        setPhase("form");
        setStatus("idle");
        setProgress(0);
        return;
      }
      setStatus("error");
      setError(err.message || "Analysis failed");
    }
  };

  const cancel = () => {
    if (abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
    }
  };

  const reset = () => {
    setPhase("form");
    setStatus("idle");
    setProgress(0);
    setResult(null);
    setError("");
    setUrl("");
  };

  const isRunning = status === "fetching" || status === "analyzing";

  return (
    <div className="rounded-xl border border-border/50 bg-card/50">
      {/* ──── Header ──── */}
      <div className="p-4 border-b border-border/30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
            <Video className="w-4 h-4 text-orange" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-sm">Single Video Analysis</h3>
            <p className="text-xs text-muted-foreground">
              Analyze any YouTube video&rsquo;s script structure
            </p>
          </div>
        </div>
      </div>

      {/* ──── Form phase ──── */}
      {phase === "form" && (
        <div className="p-4 space-y-3">
          <div className="flex gap-2">
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
              className="input-base h-10 flex-1"
              onKeyDown={(e) => e.key === "Enter" && analyze()}
            />
            <button
              onClick={analyze}
              disabled={!url.trim()}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-orange text-black text-sm font-semibold hover:bg-orange/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              <Play className="w-4 h-4" />
              Analyze
            </button>
          </div>
        </div>
      )}

      {/* ──── Progress phase ──── */}
      {phase === "progress" && (
        <div className="p-6 space-y-4">
          <div className="h-2 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange to-prussian-blue transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              {isRunning && <Loader2 className="w-4 h-4 animate-spin text-orange" />}
              <span className="text-muted-foreground">{statusLabels[status] || status}</span>
            </div>
            <span className="text-muted-foreground tabular-nums">{progress}%</span>
          </div>

          <div className="flex justify-end gap-2">
            {isRunning && (
              <button
                onClick={cancel}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border/50 text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all"
              >
                <XCircle className="w-3.5 h-3.5" />
                Cancel
              </button>
            )}
            {status === "error" && (
              <button
                onClick={analyze}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-orange text-black hover:bg-orange/90 transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Retry
              </button>
            )}
          </div>

          {error && (
            <p className="text-xs text-orange/70">{error}</p>
          )}
        </div>
      )}

      {/* ──── Result phase ──── */}
      {phase === "result" && result && (
        <div className="space-y-0">
          {/* Analysis results */}
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs text-emerald-400 mb-3">
              <CheckCircle2 className="w-4 h-4" />
              Script analysis complete
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-black/5 dark:bg-white/[0.03] p-3 border border-border/20">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Hook Style</span>
                <p className="text-sm mt-1">{result.hook_style}</p>
              </div>
              <div className="rounded-lg bg-black/5 dark:bg-white/[0.03] p-3 border border-border/20">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Tone</span>
                <p className="text-sm mt-1">{result.tone}</p>
              </div>
            </div>

            <div className="rounded-lg bg-black/5 dark:bg-white/[0.03] p-3 border border-border/20">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Structure</span>
              <div className="flex flex-wrap gap-1 mt-2">
                {result.structure.map((s, i) => (
                  <span key={i} className="text-[11px] px-2 py-0.5 rounded-full bg-orange/10 text-orange/80 border border-orange/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-black/5 dark:bg-white/[0.03] p-3 border border-border/20">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Key Techniques</span>
              <div className="flex flex-wrap gap-1 mt-2">
                {result.key_techniques.map((t, i) => (
                  <span key={i} className="text-[11px] px-2 py-0.5 rounded-full bg-prussian-blue/10 text-prussian-blue/80 border border-prussian-blue/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-black/5 dark:bg-white/[0.03] p-3 border border-border/20">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">CTA Style</span>
              <p className="text-sm mt-1">{result.cta_style}</p>
            </div>

            <div className="rounded-lg bg-black/5 dark:bg-white/[0.03] p-3 border border-border/20">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Summary</span>
              <p className="text-sm mt-1 text-muted-foreground leading-relaxed">{result.summary}</p>
            </div>
          </div>

          {/* Actions bar */}
          <div className="border-t border-border/30 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">Actions</span>
              <div className="flex gap-2">
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border/50 text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Analyze Another
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ──── In-Progress Channel Analyses ──── */}
      {activeChannels.length > 0 && (
        <div className="border-t border-border/30 p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-orange" />
            <span className="text-xs font-medium text-muted-foreground">
              Analysis In Progress ({activeChannels.length})
            </span>
          </div>
          <div className="space-y-2">
            {activeChannels.map((ch) => {
              const job = ch.job;
              const isRunning = job && ["pending", "fetching_videos", "fetching_transcripts", "analyzing_videos", "synthesizing"].includes(job.status);
              return (
                <div
                  key={ch.id}
                  className="p-3 rounded-lg bg-black/5 dark:bg-white/[0.03] border border-border/20 space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-sm text-foreground truncate font-medium">{ch.name}</p>
                      <p className="text-[11px] text-muted-foreground/60 truncate">{ch.youtube_url}</p>
                    </div>
                    <span className={`shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                      ch.status === "error" ? "text-red-400 border-red-500/30 bg-red-500/10" :
                      ch.status === "paused" ? "text-muted-foreground border-border/50 bg-black/5 dark:bg-white/5" :
                      "badge-primary"
                    }`}>
                      {ch.status}
                    </span>
                  </div>

                  {job && isRunning && (
                    <>
                      <div className="h-1.5 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-orange to-prussian-blue transition-all duration-500 ease-out"
                          style={{ width: `${job.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-muted-foreground/60">
                          {job.status === "fetching_videos" ? "Fetching video list..." :
                           job.status === "fetching_transcripts" ? `Getting transcripts (${job.processed_videos}/${job.total_videos})` :
                           job.status === "analyzing_videos" ? `Analyzing (${job.processed_videos}/${job.total_videos})` :
                           job.status === "synthesizing" ? "Creating blueprint..." :
                           job.status}
                        </span>
                        <span className="tabular-nums text-muted-foreground/40">{job.progress}%</span>
                      </div>
                    </>
                  )}

                  {job && job.status === "error" && job.error_message && (
                    <p className="text-[11px] text-orange/70">{job.error_message}</p>
                  )}

                  <div className="flex gap-1.5 pt-1">
                    {isRunning && (
                      <>
                        <button
                          onClick={() => channelAction(ch.id, "pause")}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium border border-border/50 text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/[0.04] transition-all"
                        >
                          <Pause className="w-3 h-3" />
                          Pause
                        </button>
                        <button
                          onClick={() => channelAction(ch.id, "cancel")}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium border border-red-500/20 text-red-400 hover:bg-red-500/10 transition-all"
                        >
                          <XCircle className="w-3 h-3" />
                          Cancel
                        </button>
                      </>
                    )}
                    {ch.status === "paused" && (
                      <button
                        onClick={() => channelAction(ch.id, "resume")}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium border border-prussian-blue/30 text-prussian-blue hover:bg-prussian-blue/10 transition-all"
                      >
                        <Play className="w-3 h-3" />
                        Resume
                      </button>
                    )}
                    <button
                      onClick={() => channelAction(ch.id, "delete")}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium text-red-400/60 hover:text-red-400 hover:bg-red-500/10 transition-all ml-auto"
                    >
                      <Trash2 className="w-3 h-3" />
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ──── Saved Analysis List ──── */}
      {savedAnalyses.length > 0 && (
        <div className="border-t border-border/30 p-4 space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="text-xs font-medium text-muted-foreground">
              Previous Analyses ({savedAnalyses.length > 5 ? `Last 5 of ` : ""}{savedAnalyses.length})
            </span>
          </div>
          <div className="space-y-1.5">
            {savedAnalyses.slice(0, 5).map((a) => (
              <div
                key={a.id}
                className="flex items-start gap-3 p-2.5 rounded-lg bg-black/5 dark:bg-white/[0.03] border border-border/20"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground truncate">
                    {a.video_title || "Untitled"}
                  </p>
                  <p className="text-[11px] text-muted-foreground/60 truncate">
                    {a.youtube_url}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {a.analysis_data?.key_techniques?.slice(0, 2).map((t, i) => (
                      <span key={i} className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/5 dark:bg-white/[0.04] border border-border/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-1 shrink-0">
                  <a
                    href={a.youtube_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-7 w-7 rounded-lg flex items-center justify-center text-muted-foreground/60 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/[0.04] transition-colors"
                    title="Open video"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => deleteAnalysis(a.id)}
                    className="h-7 w-7 rounded-lg flex items-center justify-center text-red-400/60 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
