"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Loader2,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Pause,
  StopCircle,
  Play,
  Video,
  FileText,
} from "lucide-react";
import type { AnalysisJob } from "@/types";

interface StatusVideo {
  id: string;
  youtube_video_id: string;
  title: string;
  transcript: string | null;
  analysis: any;
}

const statusLabels: Record<string, string> = {
  pending: "Waiting to start...",
  fetching_videos: "Fetching video list...",
  fetching_transcripts: "Getting transcripts...",
  analyzing_videos: "Analyzing scripts...",
  synthesizing: "Creating blueprint...",
  completed: "Analysis complete!",
  error: "Analysis failed",
  cancelled: "Analysis cancelled",
  paused: "Analysis paused",
};

export function AnalysisProgress({ channelId }: { channelId: string }) {
  const [job, setJob] = useState<AnalysisJob | null>(null);
  const [videos, setVideos] = useState<StatusVideo[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/channels/${channelId}/status`);
      const data = await res.json();

      if (data.job) {
        const terminalStates = ["completed", "error", "cancelled"];
        setJob(data.job);
        if (terminalStates.includes(data.job.status)) {
          clearInterval(interval);
        }
      }
      if (data.videos) {
        setVideos(data.videos);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);
  }, [channelId]);

  const handleAction = async (action: string) => {
    setBusy(action);
    try {
      await fetch(`/api/channels/${channelId}/analysis`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      if (action === "resume") {
        setJob(null);
      }
    } finally {
      setBusy(null);
    }
  };

  if (!job) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span className="ml-3 text-muted-foreground">Starting analysis...</span>
        </CardContent>
      </Card>
    );
  }

  const isRunning = ["pending", "fetching_videos", "fetching_transcripts", "analyzing_videos", "synthesizing"].includes(job.status);
  const isTerminal = ["completed", "error", "cancelled"].includes(job.status);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {job.status === "completed" ? (
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          ) : job.status === "error" ? (
            <XCircle className="w-5 h-5 text-destructive" />
          ) : job.status === "cancelled" ? (
            <StopCircle className="w-5 h-5 text-muted-foreground" />
          ) : (
            <Loader2 className="w-5 h-5 animate-spin" />
          )}
          Analysis Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Progress value={job.progress} className="w-full" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{statusLabels[job.status] || job.status}</span>
          <span>{job.progress}%</span>
        </div>
        {job.total_videos > 0 && (
          <div className="flex gap-2 text-sm">
            <Badge variant="secondary">
              {job.processed_videos} / {job.total_videos} videos
            </Badge>
          </div>
        )}
        {job.error_message && (
          <p className="text-sm text-destructive">{job.error_message}</p>
        )}

        <div className="flex gap-2 pt-2">
          {isRunning && (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleAction("pause")}
                disabled={busy !== null}
                className="flex-1"
              >
                {busy === "pause" ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Pause className="w-4 h-4 mr-2" />
                )}
                Pause
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleAction("cancel")}
                disabled={busy !== null}
                className="flex-1"
              >
                {busy === "cancel" ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <StopCircle className="w-4 h-4 mr-2" />
                )}
                Cancel
              </Button>
            </>
          )}
          {job.status === "paused" && (
            <Button
              variant="default"
              size="sm"
              onClick={() => handleAction("resume")}
              disabled={busy !== null}
              className="flex-1"
            >
              {busy === "resume" ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              Resume
            </Button>
          )}
          {job.status === "completed" && (
            <Button
              onClick={() => router.push(`/channels/${channelId}`)}
              className="flex-1"
            >
              View Blueprint
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
          {job.status === "error" && (
            <Button
              onClick={() => {
                fetch(`/api/channels/${channelId}/analyze`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ mode: "full" }),
                });
                setJob(null);
              }}
              variant="outline"
              className="flex-1"
            >
              Retry Analysis
            </Button>
          )}
          {job.status === "cancelled" && (
            <Button
              onClick={() => {
                handleAction("resume");
              }}
              variant="outline"
              className="flex-1"
            >
              Restart Analysis
            </Button>
          )}
        </div>

        {/* Analyzed videos list */}
        {videos.filter((v) => v.analysis).length > 0 && (
          <div className="pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Video className="w-4 h-4" />
              <span className="font-medium">Analyzed Videos ({videos.filter((v) => v.analysis).length})</span>
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {videos.filter((v) => v.analysis).map((v) => (
                <div
                  key={v.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-black/5 dark:bg-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-sm text-foreground line-clamp-2">{v.title || v.youtube_video_id}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {v.youtube_video_id}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pending videos */}
        {!["completed", "error", "cancelled"].includes(job.status) && videos.filter((v) => !v.analysis).length > 0 && (
          <div className="pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <FileText className="w-4 h-4" />
              <span className="font-medium">
                Pending ({videos.filter((v) => !v.analysis).length})
              </span>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {videos.filter((v) => !v.analysis).slice(0, 20).map((v) => (
                <div
                  key={v.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-black/5 dark:bg-white/5"
                >
                  <Loader2 className="w-4 h-4 animate-spin text-orange shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-sm text-foreground line-clamp-1">{v.title || v.youtube_video_id}</p>
                    {v.transcript && (
                      <p className="text-xs text-muted-foreground mt-0.5">Transcript ready</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
