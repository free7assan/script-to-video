"use client";

import { useEffect, useState, FormEvent } from "react";
import {
  ArrowLeft, Check, Loader2, Settings2, Server,
  Database, Activity, ShieldAlert, ChevronRight,
  Globe, Video, Key, Brain, Toolbox, Shield,
  Eye, EyeOff, LogIn, X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import { Sidebar } from "@/components/Sidebar";

interface Preset {
  value: string;
  label: string;
}

interface SystemStatus {
  services: Record<string, boolean>;
  stats: {
    channels: number;
    videos: number;
    analysis_jobs: number;
    blueprints: number;
  } | null;
}

const SERVICE_META: Record<string, { label: string; icon: typeof Server; color: string }> = {
  supabase: { label: "Supabase Database", icon: Database, color: "text-emerald-500" },
  youtube: { label: "YouTube Data API", icon: Video, color: "text-red-500" },
  gemini: { label: "Google Gemini", icon: Brain, color: "text-blue-400" },
  openrouter: { label: "OpenRouter", icon: Globe, color: "text-yellow-500" },
  opencode: { label: "OpenCode Zen", icon: Key, color: "text-orange" },
  app_url: { label: "App URL", icon: Server, color: "text-muted-foreground" },
};

function StatCard({ label, value, icon: Icon }: { label: string; value: string | number; icon: typeof Database }) {
  return (
    <div className="rounded-xl border border-border/30 bg-card/30 p-4 hover:border-orange/20 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-orange" />
        </div>
        <span className="text-xs text-muted-foreground font-medium">{label}</span>
      </div>
      <p className="text-2xl font-display font-bold">{value}</p>
    </div>
  );
}

export default function AdminPage() {
  const [current, setCurrent] = useState("");
  const [presets, setPresets] = useState<Preset[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [customModel, setCustomModel] = useState("");
  const [showCustom, setShowCustom] = useState(false);
  const [status, setStatus] = useState<SystemStatus | null>(null);
  const [statusLoading, setStatusLoading] = useState(true);
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => { fetchModelsAndStatus(); }, []);

  async function fetchModelsAndStatus() {
    try {
      const [modelData, statusData] = await Promise.all([
        fetch("/api/admin/model").then((r) => r.json()),
        fetch("/api/admin/status").then((r) => r.json()),
      ]);
      setCurrent(modelData.current);
      setPresets(modelData.presets);
      const isPreset = modelData.presets.some((p: Preset) => p.value === modelData.current);
      if (!isPreset && modelData.current) {
        setShowCustom(true);
        setCustomModel(modelData.current);
      }
      setStatus(statusData);
    } catch {} finally {
      setLoading(false);
      setStatusLoading(false);
    }
  }

  const selectModel = async (value: string) => {
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch("/api/admin/model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: value }),
      });
      if (res.ok) {
        setCurrent(value);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }
    } catch {}
    setSaving(false);
  };

  const saveCustom = () => {
    if (!customModel.trim()) return;
    selectModel(customModel.trim());
  };

  // ──── Admin login / access gate ────
  if (authLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="w-4 h-4 animate-spin text-orange" />
          Loading...
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-5 h-5 text-orange" />
            </div>
            <h1 className="text-xl font-display font-semibold">Admin access</h1>
            <p className="text-sm text-muted-foreground mt-1">Sign in with an admin account</p>
          </div>

          <form
            onSubmit={async (e: FormEvent) => {
              e.preventDefault();
              setLoginError("");
              setLoginLoading(true);
              try {
                const supabase = createSupabaseBrowserClient();
                const { error } = await supabase.auth.signInWithPassword({
                  email: loginEmail,
                  password: loginPassword,
                });
                if (error) throw new Error(error.message);
                router.refresh();
              } catch (err: any) {
                setLoginError(err.message);
              } finally {
                setLoginLoading(false);
              }
            }}
            className="space-y-4"
          >
            {loginError && (
              <div className="text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {loginError}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="admin@example.com"
                className="input-base"
                required
                autoFocus
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-base pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="btn-secondary w-full h-11 glow-primary"
            >
              {loginLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              {loginLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (!user.isAdmin) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4 max-w-sm">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto">
            <X className="w-5 h-5 text-red-500" />
          </div>
          <h1 className="text-xl font-display font-semibold">Access denied</h1>
          <p className="text-sm text-muted-foreground">
            Signed in as <strong>{user.email}</strong>. This area requires admin privileges.
          </p>
          <Link href="/dashboard" className="btn-secondary h-10 inline-flex items-center glow-primary">
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const configuredCount = status
    ? Object.values(status.services).filter(Boolean).length
    : 0;
  const totalServices = status ? Object.keys(status.services).length : 0;

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-56 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8 animate-in">
      {/* ──── Header ──── */}
      <div className="rounded-xl border border-border/50 bg-card/50">
        <div className="p-4 border-b border-border/30">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="btn-ghost p-1.5 -ml-1.5">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
              <Settings2 className="w-4 h-4 text-orange" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm">Settings</h3>
              <p className="text-xs text-muted-foreground">Manage system configuration</p>
            </div>
            <div className="flex-1" />
            <UserBadge />
          </div>
        </div>

        {/* Mini stats row */}
        <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard label="Channels" value={status?.stats?.channels ?? "—"} icon={Database} />
          <StatCard label="Videos" value={status?.stats?.videos ?? "—"} icon={Activity} />
          <StatCard label="Blueprints" value={status?.stats?.blueprints ?? "—"} icon={ShieldAlert} />
          <StatCard label="Analysis Jobs" value={status?.stats?.analysis_jobs ?? "—"} icon={Toolbox} />
        </div>
      </div>

      {/* ──── AI Model ──── */}
      <div className="rounded-xl border border-border/50 bg-card/50">
        <div className="p-4 border-b border-border/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
              <Brain className="w-4 h-4 text-orange" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm">AI Model</h3>
              <p className="text-xs text-muted-foreground">Select which AI model to use for script generation and channel analysis</p>
            </div>
            <div className="flex-1" />
            {saved && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-500">
                <Check className="w-3.5 h-3.5" />
                Updated
              </div>
            )}
          </div>
        </div>
        <div className="p-5 space-y-3">
          {loading ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground py-4">
              <Loader2 className="w-4 h-4 animate-spin text-orange" />
              Loading models...
            </div>
          ) : (
            <>
              <div className="space-y-1.5">
                {presets.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => selectModel(preset.value)}
                    disabled={saving}
                    className={`w-full flex items-center gap-3 p-3.5 rounded-xl border text-left text-sm transition-all ${
                      current === preset.value
                        ? "border-orange/30 bg-gradient-to-r from-orange/5 to-transparent text-foreground"
                        : "border-border/30 bg-background/30 text-muted-foreground hover:text-foreground hover:border-border/50 hover:bg-foreground/[0.02]"
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${
                      current === preset.value ? "border-orange" : "border-muted-foreground/25"
                    }`}>
                      {current === preset.value && (
                        <div className="w-2 h-2 rounded-full bg-orange" />
                      )}
                    </div>
                    <span className="flex-1">{preset.label}</span>
                    {saving && current === preset.value && (
                      <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0 text-orange" />
                    )}
                    {!saving && current === preset.value && (
                      <Check className="w-3.5 h-3.5 shrink-0 text-orange/60" />
                    )}
                  </button>
                ))}
              </div>

              <details
                className="text-sm border border-border/20 rounded-xl"
                onToggle={(e) => setShowCustom((e.target as HTMLDetailsElement).open)}
              >
                <summary className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors text-xs font-medium px-4 py-3 flex items-center gap-2">
                  <Toolbox className="w-3.5 h-3.5" />
                  Custom model
                  <ChevronRight className="w-3 h-3 ml-auto transition-transform duration-200 [[open]_&]:rotate-90" />
                </summary>
                <div className="px-4 pb-4 flex flex-col gap-2 border-t border-border/20 pt-3">
                  <div className="flex gap-2">
                    <input
                      value={customModel}
                      onChange={(e) => setCustomModel(e.target.value)}
                      placeholder="e.g. openrouter:anthropic/claude-sonnet"
                      className="input-base h-9 flex-1"
                    />
                    <button
                      onClick={saveCustom}
                      disabled={!customModel.trim() || saving}
                      className="btn-secondary h-9 text-xs"
                    >
                      Apply
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Format: <code className="text-orange">provider:model_name</code> &mdash; e.g.{" "}
                    <code className="text-orange">openrouter:anthropic/claude-sonnet</code> or{" "}
                    <code className="text-orange">local:llama-3.2-3b-instruct</code>
                  </p>
                </div>
              </details>
            </>
          )}
        </div>
      </div>

      {/* ──── System Status ──── */}
      <div className="rounded-xl border border-border/50 bg-card/50">
        <div className="p-4 border-b border-border/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
              <Activity className="w-4 h-4 text-orange" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm">System Status</h3>
              <p className="text-xs text-muted-foreground">
                {statusLoading
                  ? "Checking..."
                  : `${configuredCount} of ${totalServices} services configured`}
              </p>
            </div>
            <div className="flex-1" />
            {!statusLoading && status && (
              <div className={`text-xs font-mono px-2 py-1 rounded-md border ${
                configuredCount === totalServices
                  ? "text-emerald-500 border-emerald-500/20 bg-emerald-500/5"
                  : "text-yellow-500 border-yellow-500/20 bg-yellow-500/5"
              }`}>
                {configuredCount === totalServices ? "All systems nominal" : `${totalServices - configuredCount} missing`}
              </div>
            )}
          </div>
        </div>
        <div className="p-5">
          {statusLoading ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground py-4">
              <Loader2 className="w-4 h-4 animate-spin text-orange" />
              Checking services...
            </div>
          ) : (
            <div className="grid gap-2">
              {Object.entries(SERVICE_META).map(([key, meta]) => {
                const ok = status?.services[key];
                return (
                  <div
                    key={key}
                    className="flex items-center gap-3 p-3 rounded-xl border border-border/20 bg-background/30"
                  >
                    <meta.icon className={`w-4 h-4 ${ok ? meta.color : "text-muted-foreground/40"}`} />
                    <span className="flex-1 text-sm">{meta.label}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      ok
                        ? "text-emerald-500 border-emerald-500/20 bg-emerald-500/5"
                        : "text-muted-foreground/40 border-border/20 bg-black/[0.02] dark:bg-white/[0.02]"
                    }`}>
                      {ok ? "Configured" : "Missing"}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
        </div>
          </main>
            </div>
  );
}

function UserBadge() {
  const { user, loading } = useAuth();

  if (loading || !user) return null;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/20 bg-background/30 text-xs">
      <Shield className={`w-3.5 h-3.5 ${user.isAdmin ? "text-orange" : "text-muted-foreground/50"}`} />
      <span className="text-muted-foreground">{user.email}</span>
      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full border ${
        user.isAdmin
          ? "text-orange border-orange/20 bg-orange/5"
          : "text-muted-foreground/40 border-border/20"
      }`}>
        {user.isAdmin ? "admin" : "user"}
      </span>
    </div>
  );
}
