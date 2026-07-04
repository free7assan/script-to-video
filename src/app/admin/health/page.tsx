"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Activity, Check, X, Loader2 } from "lucide-react";

interface HealthItem {
  label: string;
  status: "ok" | "fail";
  detail?: string;
}

export default function AdminHealthPage() {
  const [checks, setChecks] = useState<HealthItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/status").then((r) => r.json()),
      fetch("/api/auth/session").then((r) => r.json()),
    ])
      .then(([status, session]) => {
        const items: HealthItem[] = [
          { label: "Supabase Database", status: status.services?.supabase ? "ok" : "fail" },
          { label: "YouTube Data API", status: status.services?.youtube ? "ok" : "fail" },
          { label: "Google Gemini", status: status.services?.gemini ? "ok" : "fail" },
          { label: "OpenRouter", status: status.services?.openrouter ? "ok" : "fail" },
          { label: "OpenCode Zen", status: status.services?.opencode ? "ok" : "fail" },
          { label: "Auth Session", status: session.user ? "ok" : "fail", detail: session.user?.email },
        ];
        setChecks(items);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const okCount = checks.filter((c) => c.status === "ok").length;

  return (
    <div className="space-y-8 animate-in">
      {/* Header */}
      <div className="rounded-xl border border-border/50 bg-card/50">
        <div className="p-4 border-b border-border/30">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="btn-ghost p-1.5 -ml-1.5">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
              <Activity className="w-4 h-4 text-orange" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm">Health</h3>
              <p className="text-xs text-muted-foreground">System service status</p>
            </div>
            <div className="flex-1" />
            {!loading && (
              <span className={`text-[10px] font-mono px-2 py-1 rounded-md border ${
                okCount === checks.length
                  ? "text-emerald-500 border-emerald-500/20 bg-emerald-500/5"
                  : "text-yellow-500 border-yellow-500/20 bg-yellow-500/5"
              }`}>
                {okCount}/{checks.length} healthy
              </span>
            )}
          </div>
        </div>

        {loading ? (
          <div className="p-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="w-4 h-4 animate-spin text-orange" />
            Running checks...
          </div>
        ) : (
          <div className="divide-y divide-border/20">
            {checks.map((check) => (
              <div key={check.label} className="flex items-center gap-3 p-4">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  check.status === "ok" ? "bg-emerald-500/10" : "bg-red-500/10"
                }`}>
                  {check.status === "ok" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <X className="w-3.5 h-3.5 text-red-500" />
                  )}
                </div>
                <span className="flex-1 text-sm">{check.label}</span>
                {check.detail && (
                  <span className="text-xs text-muted-foreground/60 font-mono">{check.detail}</span>
                )}
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  check.status === "ok"
                    ? "text-emerald-500 border-emerald-500/20 bg-emerald-500/5"
                    : "text-red-500 border-red-500/20 bg-red-500/5"
                }`}>
                  {check.status === "ok" ? "OK" : "FAIL"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
