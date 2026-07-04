"use client";

import { useEffect, useState } from "react";
import type { Channel, AnalysisJob } from "@/types";
import { useRouter } from "next/navigation";
import { CheckCircle2, AlertCircle, Clock, PauseCircle, XCircle, Loader2 } from "lucide-react";

const statusConfig: Record<string, { color: string; icon: any; label: string }> = {
  pending: { color: "badge-muted", icon: Clock, label: "Pending" },
  fetching: { color: "badge-primary", icon: Clock, label: "Analyzing" },
  analyzing: { color: "badge-primary", icon: Clock, label: "Analyzing" },
  completed: { color: "badge-secondary", icon: CheckCircle2, label: "Complete" },
  error: { color: "badge-primary", icon: AlertCircle, label: "Error" },
  cancelled: { color: "badge-muted", icon: XCircle, label: "Cancelled" },
  paused: { color: "badge-muted", icon: PauseCircle, label: "Paused" },
};

const runningStatuses = new Set(["pending", "fetching_videos", "fetching_transcripts", "analyzing_videos", "synthesizing"]);

function LiveChannelProgress({ channelId }: { channelId: string }) {
  const [job, setJob] = useState<AnalysisJob | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/channels/${channelId}/status`);
        const data = await res.json();
        if (data.job) {
          setJob(data.job);
          if (["completed", "error", "cancelled"].includes(data.job.status)) {
            clearInterval(interval);
          }
        }
      } catch {}
    };
    fetchJob();
    const interval = setInterval(fetchJob, 5000);
    return () => clearInterval(interval);
  }, [channelId]);

  if (!job) return null;

  const isRunning = runningStatuses.has(job.status);

  return (
    <div className="mt-3 space-y-1.5">
      {isRunning && (
        <div className="h-1 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange to-prussian-blue transition-all duration-500 ease-out"
            style={{ width: `${job.progress}%` }}
          />
        </div>
      )}
      <div className="flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5">
          {isRunning && <Loader2 className="w-3 h-3 animate-spin text-orange" />}
          <span className="text-muted-foreground/60">
            {job.status === "completed" ? `${job.processed_videos} videos analyzed` :
             job.status === "fetching_videos" ? "Fetching video list..." :
             job.status === "fetching_transcripts" ? `Transcripts: ${job.processed_videos}/${job.total_videos}` :
             job.status === "analyzing_videos" ? `Analyzing: ${job.processed_videos}/${job.total_videos}` :
             job.status === "synthesizing" ? "Creating blueprint..." :
             job.status === "paused" ? "Paused" :
             job.status === "error" ? "Failed" :
             job.status === "cancelled" ? "Cancelled" :
             job.status}
          </span>
        </div>
        {isRunning && job.total_videos > 0 && (
          <span className="tabular-nums text-muted-foreground/40">
            {job.progress}%
          </span>
        )}
      </div>
    </div>
  );
}

export function ChannelCard({ channel }: { channel: Channel }) {
  const router = useRouter();
  const cfg = statusConfig[channel.status] || statusConfig.pending;
  const StatusIcon = cfg.icon;
  const showLiveProgress = ["pending", "fetching", "analyzing", "paused", "error", "cancelled", "completed"].includes(channel.status);

  return (
    <button
      onClick={() => router.push(`/channels/${channel.id}`)}
      className="card-base w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/40"
    >
      <div className="p-4">
        <div className="flex items-start gap-3.5">
          {channel.thumbnail_url ? (
            <div className="relative shrink-0">
              <div className="w-11 h-11 rounded-full overflow-hidden ring-1 ring-orange/10">
                <img
                  src={channel.thumbnail_url}
                  alt={channel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-background bg-background flex items-center justify-center">
                <StatusIcon className="w-2.5 h-2.5 text-orange" />
              </div>
            </div>
          ) : (
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange/20 to-prussian-blue/20 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-gradient-primary">
                {channel.name?.charAt(0) || "?"}
              </span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <h3 className="font-display font-semibold text-sm truncate group-hover:text-orange transition-colors duration-200">
                {channel.name}
              </h3>
              <span className={`${cfg.color} shrink-0`}>
                <StatusIcon className="w-2.5 h-2.5" />
                {cfg.label}
              </span>
            </div>
            <p className="text-xs text-muted-foreground truncate">
              {channel.youtube_url}
            </p>
            {channel.blueprint?.channel_summary && (
              <div className="mt-2 flex flex-wrap gap-1">
                {(channel.blueprint.channel_summary.content_pillars || []).slice(0, 2).map((pillar, i) => (
                  <span key={i} className="tag">
                    {pillar}
                  </span>
                ))}
                {(channel.blueprint.channel_summary.content_pillars?.length || 0) > 2 && (
                  <span className="text-[10px] text-muted-foreground self-center">+{channel.blueprint.channel_summary.content_pillars.length - 2}</span>
                )}
              </div>
            )}
            {channel.status === "error" && channel.error_message && (
              <p className="text-[11px] text-orange/70 mt-1.5 line-clamp-1">{channel.error_message}</p>
            )}
            {showLiveProgress && <LiveChannelProgress channelId={channel.id} />}
          </div>
        </div>
      </div>
    </button>
  );
}
