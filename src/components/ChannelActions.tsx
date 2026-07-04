"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Trash2,
  Loader2,
  Pause,
  XCircle,
  Play,
  RefreshCw,
  Archive,
  ArchiveRestore,
} from "lucide-react";
import type { Channel } from "@/types";

export function ChannelActions({ channel }: { channel: Channel }) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);

  const handleAction = async (action: string) => {
    setBusy(action);
    try {
      if (action === "delete") {
        if (!window.confirm(`Delete ${channel.name} and all its data?`)) return;
        await fetch(`/api/channels/${channel.id}`, { method: "DELETE" });
        router.push("/");
        return;
      }

      if (action === "analyze") {
        await fetch(`/api/channels/${channel.id}/analyze`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mode: "full" }),
        });
      } else if (action === "continue") {
        await fetch(`/api/channels/${channel.id}/analyze`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mode: "continue" }),
        });
      } else if (action === "cancel" || action === "pause") {
        await fetch(`/api/channels/${channel.id}/analysis`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action }),
        });
      } else if (action === "resume") {
        await fetch(`/api/channels/${channel.id}/analysis`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "resume" }),
        });
      } else {
        await fetch(`/api/channels/${channel.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action }),
        });
      }

      router.refresh();
    } finally {
      setBusy(null);
    }
  };

  const isNotStarted = channel.status === "pending";
  const isRunning = channel.status === "fetching" || channel.status === "analyzing";
  const isPaused = channel.status === "paused";
  const isCancelled = channel.status === "cancelled";
  const isError = channel.status === "error";
  const isCompleted = channel.status === "completed";
  const isArchived = !!channel.archived_at;

  const btn = (label: string, icon: any, action: string, opts?: { variant?: string; destructive?: boolean }) => (
    <button
      onClick={() => handleAction(action)}
      disabled={busy !== null}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
        opts?.destructive
          ? "text-red-400 border border-red-500/20 hover:bg-red-500/10 hover:border-red-500/30"
          : "text-muted-foreground border border-border/50 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 hover:border-border"
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {busy === action ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : icon}
      {label}
    </button>
  );

  return (
    <div className="rounded-xl border border-border/50 bg-card/50 p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground font-medium">Actions</span>
        <div className="flex gap-2">
          {isNotStarted && btn("Start Analysis", <Play className="w-3.5 h-3.5" />, "analyze")}
          {isRunning && (
            <>
              {btn("Pause", <Pause className="w-3.5 h-3.5" />, "pause")}
              {btn("Cancel", <XCircle className="w-3.5 h-3.5" />, "cancel", { destructive: true })}
            </>
          )}
          {(isPaused || isCancelled) && btn("Continue", <Play className="w-3.5 h-3.5" />, "continue")}
          {(isError || isCompleted) && btn(isError ? "Retry" : "Re-analyze", <RefreshCw className="w-3.5 h-3.5" />, "analyze")}
          {channel.blueprint && btn(isArchived ? "Unarchive" : "Archive", isArchived ? <ArchiveRestore className="w-3.5 h-3.5" /> : <Archive className="w-3.5 h-3.5" />, isArchived ? "unarchive" : "archive")}
          {btn("", <Trash2 className="w-3.5 h-3.5" />, "delete", { destructive: true })}
        </div>
      </div>
    </div>
  );
}
