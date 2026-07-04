"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  RefreshCw,
  Archive,
  ArchiveRestore,
  Trash2,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import type { Channel } from "@/types";

export function BlueprintCard({ channel }: { channel: Channel }) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);
  const [deleted, setDeleted] = useState(false);

  if (deleted) return null;

  const blueprint = channel.blueprint;
  if (!blueprint) return null;

  const cs = blueprint.channel_summary;
  const isArchived = !!channel.archived_at;

  const handleAction = async (action: string) => {
    setBusy(action);
    try {
      if (action === "delete") {
        await fetch(`/api/channels/${channel.id}`, { method: "DELETE" });
        setDeleted(true);
      } else if (action === "reanalyze") {
        await fetch(`/api/channels/${channel.id}/analyze`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ video_count: 20 }),
        });
        router.push(`/channels/${channel.id}/analysis`);
      } else {
        await fetch(`/api/channels/${channel.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action }),
        });
        router.refresh();
      }
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className={`rounded-xl border border-border/50 bg-card/50 ${isArchived ? 'opacity-60' : ''}`}>
      {isArchived && (
        <div className="px-4 pt-3">
          <span className="text-[10px] px-2 py-0.5 rounded-full border border-border/30 text-muted-foreground">Archived</span>
        </div>
      )}

      <div className="p-4">
        <div className="flex items-center gap-3 pb-3">
          {channel.thumbnail_url ? (
            <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-orange/10 shrink-0">
              <img src={channel.thumbnail_url} alt={channel.name} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange/20 to-prussian-blue/20 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-gradient-primary">{channel.name?.charAt(0) || "?"}</span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-semibold text-sm truncate">{channel.name}</h3>
            <p className="text-xs text-muted-foreground truncate">{channel.youtube_url}</p>
          </div>
          <span className="badge-prussian-blue shrink-0">
            <CheckCircle2 className="w-2.5 h-2.5" />
            {channel.status}
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-muted-foreground line-clamp-2">
            <span className="font-medium text-foreground/70">Niche:</span> {cs?.niche || "—"}
          </p>
          <div className="flex flex-wrap gap-1">
            {(cs?.content_pillars || []).slice(0, 3).map((p, i) => (
              <span key={i} className="tag">{p}</span>
            ))}
            {(cs?.content_pillars?.length || 0) > 3 && (
              <span className="text-[10px] text-muted-foreground self-center">+{(cs?.content_pillars?.length || 0) - 3}</span>
            )}
          </div>

          <div className="flex gap-1.5 pt-1">
            <button
              onClick={() => router.push(`/channels/${channel.id}`)}
              className="btn-icon"
              title="View"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleAction("reanalyze")}
              disabled={busy !== null}
              className="btn-icon"
              title="Reanalyze"
            >
              {busy === "reanalyze" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => handleAction(isArchived ? "unarchive" : "archive")}
              disabled={busy !== null}
              className="btn-icon"
              title={isArchived ? "Unarchive" : "Archive"}
            >
              {busy === "archive" || busy === "unarchive" ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : isArchived ? (
                <ArchiveRestore className="w-3.5 h-3.5" />
              ) : (
                <Archive className="w-3.5 h-3.5" />
              )}
            </button>
            <button
              onClick={() => { if (window.confirm(`Delete blueprint for ${channel.name}?`)) handleAction("delete"); }}
              disabled={busy !== null}
              className="btn-icon-destructive"
              title="Delete"
            >
              {busy === "delete" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
