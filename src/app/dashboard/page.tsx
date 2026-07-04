import Link from "next/link";
import { ChannelCard } from "@/components/ChannelCard";
import {
  LayoutDashboard, Plus, Video, FileText, Library,
  ArrowRight, Clock, BarChart3, Shield,
} from "lucide-react";
import { getDashboardStats, getRecentScripts, getRecentChannels } from "@/lib/db";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getUsage } from "@/lib/subscription";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  const [stats, recentScripts, channels, usage] = await Promise.all([
    getDashboardStats(userId).catch(() => ({ channels: 0, videos: 0, scripts: 0, blueprints: 0 })),
    getRecentScripts(5, userId).catch(() => []),
    getRecentChannels(10, userId).catch(() => []),
    getUsage(userId!).catch(() => null),
  ]);

  const statCards = [
    { label: "Channels", value: stats.channels, icon: BarChart3, href: "/channels/new", color: "from-orange/10 to-amber/10 text-orange" },
    { label: "Videos Analyzed", value: stats.videos, icon: Video, href: "/video/analyze", color: "from-sky-500/10 to-cyan-500/10 text-sky-600" },
    { label: "Scripts Generated", value: stats.scripts, icon: FileText, href: "/scripts", color: "from-emerald-500/10 to-teal-500/10 text-emerald-600" },
    { label: "Blueprints", value: stats.blueprints, icon: Library, href: "/blueprints", color: "from-violet-500/10 to-pink-500/10 text-violet-600" },
  ];

  return (
    <div className="space-y-6 animate-in">
      {/* Header */}
      <div className="rounded-xl border border-border/50 bg-card/50">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
              <LayoutDashboard className="w-4 h-4 text-orange" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm">Dashboard</h3>
              <p className="text-xs text-muted-foreground">Overview of your channels, scripts, and analysis</p>
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              <Link href="/video/analyze" className="btn-secondary glow-primary">
                <Video className="w-4 h-4" />
                Add Video
              </Link>
              <Link href="/channels/new" className="btn-primary glow-primary">
                <Plus className="w-4 h-4" />
                Add Channel
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-3">
        {statCards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-xl border border-border/50 bg-card/50 p-4 hover:border-border/80 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                <card.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-2xl font-display font-semibold">{card.value}</p>
                <p className="text-[11px] text-muted-foreground/60">{card.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Usage */}
      {usage && (
        <div className="rounded-xl border border-border/50 bg-card/50 p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-orange" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-semibold text-sm">Free Plan</h3>
              <p className="text-xs text-muted-foreground">
                {usage.channels}/{usage.channelsLimit} channels &middot; {usage.videos}/{usage.videosLimit} videos &middot; {usage.scripts}/{usage.scriptsLimit} scripts
              </p>
            </div>
            <Link href="/pricing" className="text-[11px] text-orange hover:text-orange/80 transition-colors shrink-0">
              Upgrade
            </Link>
          </div>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-[11px] text-muted-foreground/60 mb-1">
                <span>Channels</span>
                <span>{usage.channels} / {usage.channelsLimit}</span>
              </div>
              <div className="h-1.5 rounded-full bg-black/10 dark:bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full bg-orange transition-all"
                  style={{ width: `${Math.min((usage.channels / usage.channelsLimit) * 100, 100)}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] text-muted-foreground/60 mb-1">
                <span>Videos</span>
                <span>{usage.videos} / {usage.videosLimit}</span>
              </div>
              <div className="h-1.5 rounded-full bg-black/10 dark:bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full bg-sky-500 transition-all"
                  style={{ width: `${Math.min((usage.videos / usage.videosLimit) * 100, 100)}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] text-muted-foreground/60 mb-1">
                <span>Scripts</span>
                <span>{usage.scripts} / {usage.scriptsLimit}</span>
              </div>
              <div className="h-1.5 rounded-full bg-black/10 dark:bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all"
                  style={{ width: `${Math.min((usage.scripts / usage.scriptsLimit) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recent Scripts + Quick actions */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 rounded-xl border border-border/50 bg-card/50">
          <div className="p-4 border-b border-border/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-orange" />
              <h3 className="font-display font-semibold text-sm">Recent Scripts</h3>
            </div>
            {stats.scripts > 0 && (
              <Link href="/scripts" className="text-[11px] text-orange hover:text-orange/80 transition-colors flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            )}
          </div>
          <div className="p-4">
            {recentScripts.length === 0 ? (
              <div className="py-8 text-center">
                <FileText className="w-8 h-8 text-muted-foreground/20 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground/50">No scripts yet</p>
                <p className="text-xs text-muted-foreground/40 mt-1">Generate your first script</p>
              </div>
            ) : (
              <div className="space-y-1">
                {recentScripts.map((s: any) => (
                  <Link
                    key={s.id}
                    href={`/scripts/new?edit=${s.id}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/[0.02] transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                      <FileText className="w-3.5 h-3.5 text-orange" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm truncate">{s.title || "Untitled"}</p>
                      <p className="text-[11px] text-muted-foreground/50 truncate">{s.description || "No description"}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] text-muted-foreground/40">{s.duration_minutes} min</span>
                      <span className="text-[11px] text-muted-foreground/30">
                        {new Date(s.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick actions */}
        <div className="rounded-xl border border-border/50 bg-card/50">
          <div className="p-4 border-b border-border/30">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange" />
              <h3 className="font-display font-semibold text-sm">Quick Actions</h3>
            </div>
          </div>
          <div className="p-4 space-y-2">
            {[
              { href: "/scripts/new", label: "Generator", desc: "Create a new script", icon: Plus },
              { href: "/scripts", label: "Scripts", desc: `${stats.scripts} saved scripts`, icon: FileText },
              stats.blueprints > 0
                ? { href: "/blueprints", label: "Blueprints", desc: `${stats.blueprints} saved blueprints`, icon: Library }
                : { href: "/channels/new", label: "Channel Analyzer", desc: "Extract a full blueprint", icon: BarChart3 },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg border border-border/30 hover:bg-orange/5 hover:border-orange/20 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-orange" />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground/50">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Channels */}
      {channels.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold text-sm text-muted-foreground/70">
              Active Channels <span className="text-muted-foreground/30 font-normal">({channels.length})</span>
            </h3>
          </div>
          {channels.map((channel: any, i: number) => (
            <div key={channel.id} className={`animate-in animate-in-delay-${Math.min(i + 1, 5)}`}>
              <ChannelCard channel={channel} />
            </div>
          ))}
        </div>
      )}

      {/* Empty state when no channels */}
      {channels.length === 0 && (
        <div className="rounded-xl border border-dashed border-border/50 bg-card/50 p-12 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange/10 to-prussian-blue/10 flex items-center justify-center mx-auto mb-5 ring-1 ring-orange/10">
            <span className="text-2xl font-display font-bold text-gradient-primary">VS</span>
          </div>
          <h2 className="text-xl font-display font-semibold mb-2">No channels yet</h2>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-8 leading-relaxed">
            Add a YouTube channel to analyze its video script methodology and generate blueprints
          </p>
          <Link href="/channels/new" className="btn-primary glow-primary">
            <Plus className="w-4 h-4" />
            Add Your First Channel
          </Link>
        </div>
      )}
    </div>
  );
}
