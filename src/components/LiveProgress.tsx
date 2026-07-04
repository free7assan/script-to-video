"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Play, RefreshCw, ArrowRight, Pause, CheckCircle2, XCircle, FileText, Video } from "lucide-react";
import type { AnalysisJob } from "@/types";

const statusLabels: Record<string, string> = {
  pending: "Waiting to start...",
  fetching_videos: "Fetching video list...",
  fetching_transcripts: "Getting transcripts...",
  analyzing_videos: "Analyzing scripts...",
  synthesizing: "Creating blueprint...",
  completed: "Analysis complete!",
  error: "Analysis failed",
  cancelled: "Cancelled",
  paused: "Paused",
};

interface StatusVideo {
  id: string;
  youtube_video_id: string;
  title: string;
  transcript: string | null;
  analysis: any;
}

interface StatusData {
  job: AnalysisJob | null;
  videos: StatusVideo[];
}

export function LiveProgress({ channelId }: { channelId: string }) {
  const [data, setData] = useState<StatusData | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchStatus = async () => {
      const res = await fetch(`/api/channels/${channelId}/status`);
      const d = await res.json();
      if (d.job) {
        setData(d);
        if (["completed", "error", "cancelled"].includes(d.job.status)) {
          clearInterval(interval);
        }
      }
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 3000);
    return () => clearInterval(interval);
  }, [channelId]);

  const doAction = async (action: string) => {
    setBusy(action);
    try {
      await fetch(`/api/channels/${channelId}/analysis`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      if (action === "resume" || action === "cancel") {
        setData(null);
      }
      router.refresh();
    } finally {
      setBusy(null);
    }
  };

  const job = data?.job;
  const videos = data?.videos || [];
  const analyzedVideos = videos.filter((v) => v.analysis);
  const isRunning = !job || ["pending", "fetching_videos", "fetching_transcripts", "analyzing_videos", "synthesizing"].includes(job.status);
  const isTerminal = job && ["completed", "error", "cancelled"].includes(job.status);

  if (!job) {
    return (
      <div className="rounded-xl border border-border/50 bg-card/50">
        <div className="p-4 border-b border-border/30">
          <div className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-orange" />
            <h3 className="font-display font-semibold text-sm">Analysis Progress</h3>
          </div>
        </div>
        <div className="p-6 text-center text-sm text-muted-foreground">
          Waiting for analysis to start...
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border/50 bg-card/50">
      {/* Header */}
      <div className="p-4 border-b border-border/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isRunning && !isTerminal ? (
              <Loader2 className="w-4 h-4 animate-spin text-orange" />
            ) : job.status === "completed" ? (
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            ) : job.status === "error" ? (
              <XCircle className="w-4 h-4 text-red-400" />
            ) : (
              <div className="w-4 h-4 rounded-full bg-muted-foreground/30" />
            )}
            <h3 className="font-display font-semibold text-sm">Analysis Progress</h3>
          </div>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
            job.status === "completed" ? "badge-prussian-blue" :
            job.status === "error" ? "text-red-400 border-red-500/30 bg-red-500/10" :
            isRunning ? "badge-primary" : "badge-muted"
          }`}>
            {job.status}
          </span>
        </div>
        {job.total_videos > 0 && (
          <p className="text-xs text-muted-foreground mt-1">
            {job.processed_videos} / {job.total_videos} videos processed
          </p>
        )}
      </div>

      <div className="p-4 space-y-4">
        {/* Progress bar (never completed) */}
        {job.status !== "completed" && (
          <div className="space-y-2">
            <div className="h-2 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange to-prussian-blue transition-all duration-500 ease-out"
                style={{ width: `${job.progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">{statusLabels[job.status] || job.status}</span>
                {job.error_message && !["__CANCEL__", "__PAUSE__"].includes(job.error_message) && (
                  <span className="text-orange/70">- {job.error_message}</span>
                )}
              </div>
              <span className="text-muted-foreground tabular-nums">{job.progress}%</span>
            </div>
          </div>
        )}

        {/* Completed summary */}
        {job.status === "completed" && (
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {job.completed_at && (
              <span>Completed {new Date(job.completed_at).toLocaleString()}</span>
            )}
            {job.model_used && (
              <span>Model: {job.model_used}</span>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-2">
          {["pending", "fetching_videos", "fetching_transcripts", "analyzing_videos", "synthesizing"].includes(job.status) && (
            <>
              <button onClick={() => doAction("pause")} disabled={busy !== null} className="btn-ghost text-xs" title="Pause">
                {busy === "pause" ? <Loader2 className="w-3 h-3 animate-spin" /> : <Pause className="w-3 h-3" />}
                Pause
              </button>
              <button onClick={() => doAction("cancel")} disabled={busy !== null} className="btn-ghost text-xs text-red-400 hover:text-red-300" title="Cancel">
                {busy === "cancel" ? <Loader2 className="w-3 h-3 animate-spin" /> : <XCircle className="w-3 h-3" />}
                Cancel
              </button>
            </>
          )}
          {job.status === "paused" && (
            <button onClick={() => doAction("resume")} disabled={busy !== null} className="btn-ghost text-xs text-prussian-blue" title="Resume">
              {busy === "resume" ? <Loader2 className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3" />}
              Resume
            </button>
          )}
          {job.status === "error" && (
            <button onClick={() => doAction("resume")} disabled={busy !== null} className="btn-ghost text-xs" title="Retry">
              {busy === "resume" ? <Loader2 className="w-3 h-3 animate-spin" /> : <RefreshCw className="w-3 h-3" />}
              Retry
            </button>
          )}
          {job.status === "cancelled" && (
            <button onClick={() => doAction("resume")} disabled={busy !== null} className="btn-ghost text-xs" title="Restart">
              {busy === "resume" ? <Loader2 className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3" />}
              Restart
            </button>
          )}
          {job.status === "completed" && (
            <button onClick={() => router.refresh()} className="btn-ghost text-xs text-prussian-blue" title="Refresh">
              <RefreshCw className="w-3 h-3" />
              Refresh
            </button>
          )}
        </div>

        {/* Analyzed videos list */}
        {analyzedVideos.length > 0 && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium pt-1 border-t border-border/30">
              <Video className="w-3 h-3" />
              Analyzed Videos ({analyzedVideos.length})
            </div>
            <div className="space-y-1 max-h-48 overflow-y-auto">
              {analyzedVideos.map((v) => (
                <div
                  key={v.id}
                  className="flex items-start gap-2 text-xs p-2 rounded-lg bg-black/5 dark:bg-white/5"
                >
                  <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground line-clamp-2">{v.title || v.youtube_video_id}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos list - still waiting for transcript/analysis */}
        {job.status !== "completed" && videos.filter((v) => !v.analysis).length > 0 && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium pt-1 border-t border-border/30">
              <FileText className="w-3 h-3" />
              Pending ({videos.filter((v) => !v.analysis).length})
            </div>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {videos.filter((v) => !v.analysis).slice(0, 10).map((v) => (
                <div
                  key={v.id}
                  className="flex items-start gap-2 text-xs p-2 rounded-lg bg-black/5 dark:bg-white/5"
                >
                  <Loader2 className="w-3 h-3 animate-spin text-orange shrink-0 mt-0.5" />
                  <span className="text-muted-foreground line-clamp-1">{v.title || v.youtube_video_id}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
