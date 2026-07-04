"use client";

import { useState, useRef, useEffect } from "react";
import {
  Loader2,
  Play,
  RefreshCw,
  CheckCircle2,
  XCircle,
  ListVideo,
  ArrowLeft,
  Pause,
  StopCircle,
  Users,
  Globe,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import type { Channel, AnalysisJob } from "@/types";

const STATUS_LABELS: Record<string, string> = {
  idle: "Paste a channel URL to begin",
  pending: "Waiting to start...",
  fetching_videos: "Fetching video list...",
  fetching_transcripts: "Getting transcripts...",
  analyzing_videos: "Analyzing script structure...",
  synthesizing: "Creating blueprint...",
  completed: "Analysis complete!",
  error: "Analysis failed",
  cancelled: "Analysis cancelled",
  paused: "Analysis paused",
};

export function ChannelAnalyzer() {
  const [url, setUrl] = useState("");
  const [phase, setPhase] = useState<"form" | "progress" | "result">("form");
  const [status, setStatus] = useState<string>("idle");
  const [progress, setProgress] = useState(0);
  const [channel, setChannel] = useState<Channel | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [channelId, setChannelId] = useState<string | null>(null);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, []);

  function stopPolling() {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  }

  async function startPolling(id: string) {
    const poll = async () => {
      const res = await fetch(`/api/channels/${id}/status`);
      const data = await res.json();

      if (!data.job) return;

      setProgress(data.job.progress);
      setStatus(data.job.status);

      if (data.job.status === "completed") {
        stopPolling();
        const chanRes = await fetch(`/api/channels/${id}`);
        const chanData = await chanRes.json();
        setChannel(chanData);
        setPhase("result");
        fetch("/api/channels")
          .then((r) => r.json())
          .then((data) => setPreviousChannels(data || []))
          .catch(() => {});
        return;
      }

      if (data.job.status === "error" || data.job.status === "cancelled") {
        stopPolling();
        setError(data.job.error_message || `Analysis ${data.job.status}`);
        return;
      }
    };

    await poll();
    pollingRef.current = setInterval(poll, 3000);
  }

  async function startAnalysis() {
    if (!url.trim()) return;

    // Check if channel already exists
    const normUrl = url.trim().replace(/\/$/, "");
    const existing = [...activeChannels, ...previousChannels].find(
      (c) => c.youtube_url && c.youtube_url.replace(/\/$/, "") === normUrl
    );
    if (existing) {
      window.location.href = `/channels/${existing.id}`;
      return;
    }

    setPhase("progress");
    setStatus("pending");
    setProgress(0);
    setError("");
    setChannel(null);

    try {
      const res = await fetch("/api/channels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ youtube_url: url.trim() }),
      });

      const data = await res.json();
      if (data.error) {
        setStatus("error");
        setError(data.error);
        return;
      }

      const id = data.id;

      if (["error", "cancelled", "paused"].includes(data.status)) {
        await fetch(`/api/channels/${id}/analyze`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mode: data.status === "paused" ? "continue" : "full" }),
        });
      }

      setChannelId(id);
      startPolling(id);
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "Failed to start analysis");
    }
  }

  async function handleAction(action: string) {
    if (!channelId) return;
    setBusy(action);
    try {
      await fetch(`/api/channels/${channelId}/analysis`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });

      if (action === "cancel") {
        stopPolling();
        setStatus("cancelled");
        setError("Analysis cancelled");
      } else if (action === "pause") {
        stopPolling();
        setStatus("paused");
      } else if (action === "resume") {
        setStatus("pending");
        setProgress(0);
        startPolling(channelId);
      }
    } catch {
      // ignore
    } finally {
      setBusy(null);
    }
  }

  function reset() {
    stopPolling();
    setPhase("form");
    setStatus("idle");
    setProgress(0);
    setChannel(null);
    setError("");
    setUrl("");
    setChannelId(null);
  }

  const [activeChannels, setActiveChannels] = useState<(Channel & { job?: AnalysisJob })[]>([]);
  const [previousChannels, setPreviousChannels] = useState<Channel[]>([]);

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

  useEffect(() => {
    fetch("/api/channels")
      .then((r) => r.json())
      .then((data) => setPreviousChannels(data || []))
      .catch(() => {});
  }, []);

  const channelAction = async (chId: string, action: string) => {
    if (action === "delete") {
      if (!window.confirm("Delete this channel and all its data?")) return;
      await fetch(`/api/channels/${chId}`, { method: "DELETE" });
      setActiveChannels((prev) => prev.filter((c) => c.id !== chId));
      return;
    }
    if (action === "cancel" || action === "pause") {
      await fetch(`/api/channels/${chId}/analysis`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
    } else if (action === "resume") {
      await fetch(`/api/channels/${chId}/analysis`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "resume" }),
      });
    }
    setActiveChannels((prev) =>
      prev.map((c) =>
        c.id === chId
          ? { ...c, status: (action === "pause" ? "paused" : action === "cancel" ? "cancelled" : action === "resume" ? "fetching" : c.status) as Channel["status"] }
          : c
      )
    );
  };

  const isRunning = ["pending", "fetching_videos", "fetching_transcripts", "analyzing_videos", "synthesizing"].includes(status);
  const isTerminal = ["completed", "error", "cancelled"].includes(status);
  const b = channel?.blueprint;

  return (
    <div className="rounded-xl border border-border/50 bg-card/50">
      {/* ──── Header ──── */}
      <div className="p-4 border-b border-border/30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
            <ListVideo className="w-4 h-4 text-orange" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-sm">Channel Analysis</h3>
            <p className="text-xs text-muted-foreground">
              Analyze a YouTube channel&rsquo;s video script methodology
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
              placeholder="https://youtube.com/@channel or /channel/UC..."
              className="input-base h-10 flex-1"
              onKeyDown={(e) => e.key === "Enter" && startAnalysis()}
            />
            <button
              onClick={startAnalysis}
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
              <span className="text-muted-foreground">{STATUS_LABELS[status] || status}</span>
            </div>
            <span className="text-muted-foreground tabular-nums">{progress}%</span>
          </div>

          {error && (
            <p className="text-xs text-orange/70">{error}</p>
          )}

          <div className="flex justify-end gap-2">
            {isRunning && (
              <>
                <button
                  onClick={() => handleAction("pause")}
                  disabled={busy !== null}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border/50 text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                >
                  {busy === "pause" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Pause className="w-3.5 h-3.5" />}
                  Pause
                </button>
                <button
                  onClick={() => handleAction("cancel")}
                  disabled={busy !== null}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border/50 text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                >
                  {busy === "cancel" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <StopCircle className="w-3.5 h-3.5" />}
                  Cancel
                </button>
              </>
            )}
            {!isRunning && !isTerminal && status === "paused" && (
              <button
                onClick={() => handleAction("resume")}
                disabled={busy !== null}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-orange text-black hover:bg-orange/90 transition-all"
              >
                {busy === "resume" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                Resume
              </button>
            )}
            {status === "error" && (
              <button
                onClick={startAnalysis}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-orange text-black hover:bg-orange/90 transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Retry
              </button>
            )}
            {status === "cancelled" && (
              <button
                onClick={() => handleAction("resume")}
                disabled={busy !== null}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-orange text-black hover:bg-orange/90 transition-all"
              >
                {busy === "resume" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                Resume
              </button>
            )}
          </div>
        </div>
      )}

      {/* ──── Result phase ──── */}
      {phase === "result" && channel && b && (
        <div className="space-y-0">
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs text-emerald-400 mb-3">
              <CheckCircle2 className="w-4 h-4" />
              Channel analysis complete
            </div>

            {/* Channel info */}
            <div className="flex items-center gap-3 rounded-lg bg-black/5 dark:bg-white/[0.03] p-3 border border-border/20">
              {channel.thumbnail_url ? (
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-orange/20 shrink-0">
                  <img
                    src={channel.thumbnail_url}
                    alt={channel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange/20 to-prussian-blue/20 flex items-center justify-center shrink-0 ring-2 ring-orange/20">
                  <span className="text-sm font-bold text-orange">
                    {channel.name?.charAt(0) || "?"}
                  </span>
                </div>
              )}
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{channel.name}</p>
                {channel.subscriber_count && (
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <Users className="w-3 h-3" />
                    {channel.subscriber_count.toLocaleString()} subscribers
                  </p>
                )}
              </div>
            </div>

            {/* Blueprint sections */}
            <div className="rounded-lg bg-black/5 dark:bg-white/[0.03] p-3 border border-border/20">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                Channel Summary
              </span>
              <p className="text-sm mt-1">{b.channel_summary?.channel_style}</p>
              {b.channel_summary?.niche && (
                <p className="text-xs text-muted-foreground mt-1">
                  Niche: {b.channel_summary.niche}
                </p>
              )}
              {b.channel_summary?.target_audience && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  Audience: {b.channel_summary.target_audience}
                </p>
              )}
            </div>

            <div className="rounded-lg bg-black/5 dark:bg-white/[0.03] p-3 border border-border/20">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                Video Structure
              </span>
              <p className="text-xs text-muted-foreground mt-1">
                {b.video_structure?.typical_structure_summary}
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {b.video_structure?.hook_patterns?.map((h, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-orange/10 text-orange/80 border border-orange/20"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-black/5 dark:bg-white/[0.03] p-3 border border-border/20">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                Script Methodology
              </span>
              <p className="text-xs text-muted-foreground mt-1">
                {b.script_methodology?.storytelling_approach}
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {b.script_methodology?.opening_formulas?.map((o, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-prussian-blue/10 text-prussian-blue/80 border border-prussian-blue/20"
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-black/5 dark:bg-white/[0.03] p-3 border border-border/20">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                Content Themes
              </span>
              <div className="flex flex-wrap gap-1 mt-2">
                {b.content_themes?.recurring_topics?.map((t, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-orange/10 text-orange/80 border border-orange/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions bar */}
          <div className="border-t border-border/30 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">Actions</span>
              <div className="flex gap-2">
                <Link
                  href={`/channels/${channel.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-prussian-blue text-white hover:bg-prussian-blue/90 transition-all"
                >
                  <Globe className="w-3.5 h-3.5" />
                  View Channel
                </Link>
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

      {/* ──── Error but no job phase (e.g. cancelled before result) ──── */}
      {phase === "progress" && isTerminal && status !== "completed" && channel && (
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs text-orange/70">
            {status === "error" ? <XCircle className="w-4 h-4" /> : <StopCircle className="w-4 h-4" />}
            {STATUS_LABELS[status] || status}
          </div>
          {error && <p className="text-xs text-orange/70">{error}</p>}
          <div className="flex justify-end gap-2">
            {status === "error" && (
              <button
                onClick={startAnalysis}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-orange text-black hover:bg-orange/90 transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Retry
              </button>
            )}
            {status === "cancelled" && channelId && (
              <button
                onClick={() => handleAction("resume")}
                disabled={busy !== null}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-orange text-black hover:bg-orange/90 transition-all"
              >
                {busy === "resume" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                Resume
              </button>
            )}
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border/50 text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            >
              Start Over
            </button>
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
            {activeChannels.slice(0, 5).map((ch) => {
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

      {/* ──── Previous Channels ──── */}
      {previousChannels.length > 0 && (
        <div className="border-t border-border/30 p-4 space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="text-xs font-medium text-muted-foreground">
              Previous Channels ({previousChannels.length > 5 ? `Last 5 of ` : ""}{previousChannels.length})
            </span>
          </div>
          <div className="space-y-1.5">
            {previousChannels.slice(0, 5).map((ch) => (
              <Link
                key={ch.id}
                href={`/channels/${ch.id}`}
                className="flex items-start gap-3 p-2.5 rounded-lg bg-black/5 dark:bg-white/[0.03] border border-border/20 hover:border-border/50 transition-all group"
              >
                {ch.thumbnail_url ? (
                  <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-orange/10 shrink-0">
                    <img src={ch.thumbnail_url} alt={ch.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange/20 to-prussian-blue/20 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-gradient-primary">{ch.name?.charAt(0) || "?"}</span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground truncate font-medium group-hover:text-orange transition-colors">{ch.name}</p>
                  <p className="text-[11px] text-muted-foreground/60 truncate">{ch.youtube_url}</p>
                  {ch.blueprint?.channel_summary && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {(ch.blueprint.channel_summary.content_pillars || []).slice(0, 2).map((p, i) => (
                        <span key={i} className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/5 dark:bg-white/[0.04] border border-border/30">
                          {p}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
