import { notFound } from "next/navigation";
import { BlueprintViewer } from "@/components/BlueprintViewer";
import { LiveProgress } from "@/components/LiveProgress";
import { ChannelActions } from "@/components/ChannelActions";
import { getChannelWithBlueprint } from "@/lib/db";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ChannelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  const c = await getChannelWithBlueprint(id, user?.id);
  if (!c) notFound();

  return (
    <div className="space-y-8 animate-in">
      {/* Back */}
      <Link
        href="/blueprints"
        className="btn-ghost text-sm w-fit"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blueprints
      </Link>

      {/* Header Card */}
      <div className="rounded-xl border border-border/50 bg-card/50">
        <div className="p-4 border-b border-border/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
              <Play className="w-4 h-4 text-orange" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-display font-semibold text-sm truncate">{c.name}</h3>
                <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                  c.status === "completed" ? "badge-prussian-blue" :
                  c.status === "error" ? "text-red-400 border-red-500/30 bg-red-500/10" :
                  c.status === "paused" ? "badge-muted" :
                  "badge-primary"
                }`}>
                  {c.status}
                </span>
              </div>
              <p className="text-xs text-muted-foreground truncate">
                {c.youtube_url}
                {c.subscriber_count && <> &middot; {c.subscriber_count.toLocaleString()} subscribers</>}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Analysis Progress - always visible */}
        <LiveProgress channelId={c.id} />

        {/* Blueprint - if available */}
        {c.blueprint && <BlueprintViewer blueprint={c.blueprint} />}

        {/* Error detail (only when no blueprint) */}
        {c.status === "error" && !c.blueprint && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-8 text-center">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-lg">!</span>
            </div>
            <p className="text-red-400/80 text-sm">
              {c.error_message || "Analysis failed"}
            </p>
          </div>
        )}

        <ChannelActions channel={c} />
      </div>
    </div>
  );
}
