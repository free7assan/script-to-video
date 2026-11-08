"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  BarChart3,
  Database,
  Users,
  Video,
  ShieldAlert,
  Clock,
  ArrowLeft,
  TrendingUp,
  Film,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";

interface AnalyticsData {
  totals: {
    channels: number;
    videos: number;
    blueprints: number;
    jobs: number;
  };
  channelStatus: Record<string, number>;
  jobStatus: Record<string, number>;
  series: {
    daily: Array<{ label: string; channels: number; videos: number; blueprints: number }>;
    weekly: Array<{ label: string; channels: number; videos: number; blueprints: number }>;
    monthly: Array<{ label: string; channels: number; videos: number; blueprints: number }>;
  };
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/analytics")
      .then((r) => r.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Activity className="w-4 h-4 animate-spin text-purple-500" />
          Loading analytics…
        </div>
      </div>
    );
  }

  const totals = [
    { label: "Channels", value: data?.totals?.channels ?? 0, icon: Database, color: "bg-purple-100 text-purple-600" },
    { label: "Videos", value: data?.totals?.videos ?? 0, icon: Video, color: "bg-orange-100 text-orange-600" },
    { label: "Blueprints", value: data?.totals?.blueprints ?? 0, icon: LayoutGrid, color: "bg-emerald-100 text-emerald-600" },
    { label: "Jobs", value: data?.totals?.jobs ?? 0, icon: ShieldAlert, color: "bg-amber-100 text-amber-600" },
  ];

  return (
    <div className="space-y-8 animate-in">
      {/* Header */}
      <div className="rounded-xl border border-border/50 bg-card/50 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="btn-ghost p-1.5 -ml-1.5">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm">Analytics</h3>
              <p className="text-xs text-muted-foreground">Channel &amp; activity overview</p>
            </div>
          </div>
          <div className="flex-1" />
        </div>
      </div>

      {/* Totals row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {totals.map((t) => (
          <StatCard key={t.label} {...t} />
        ))}
      </div>

      {/* Time-series section */}
      <section className="grid lg:grid-cols-3 gap-8">
        <ChartPanel
          title="Daily (last 30 days)"
          icon={TrendingUp}
          type="line"
          series={data?.series?.daily?.map((d) => d.channels) ?? []}
          labels={data?.series?.daily?.map((d) => d.label) ?? []}
          subtitle="Channels added per day"
        />
        <ChartPanel
          title="Weekly (last 12 weeks)"
          icon={TrendingUp}
          type="line"
          series={data?.series?.weekly?.map((d) => d.channels) ?? []}
          labels={data?.series?.weekly?.map((d) => d.label) ?? []}
          subtitle="Channels added per week"
        />
        <ChartPanel
          title="Monthly (last 12 months)"
          icon={TrendingUp}
          type="line"
          series={data?.series?.monthly?.map((d) => d.channels) ?? []}
          labels={data?.series?.monthly?.map((d) => d.label) ?? []}
          subtitle="Channels added per month"
        />
      </section>

      {/* All-items combined trend */}
      <section className="rounded-xl border border-border/30 bg-card/30 p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
            <Activity className="w-3.5 h-3.5 text-purple-600" />
          </div>
          <h4 className="text-xs text-muted-foreground font-medium">Channels + Videos + Blueprints trend</h4>
          <div className="flex-1" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <CombinedSparkline
            title="Channels"
            color="text-purple-600"
            data={data?.series?.daily?.map((d) => d.channels) ?? []}
            labels={data?.series?.daily?.map((d) => d.label) ?? []}
          />
          <CombinedSparkline
            title="Videos"
            color="text-orange-600"
            data={data?.series?.daily?.map((d) => d.videos) ?? []}
            labels={data?.series?.daily?.map((d) => d.label) ?? []}
          />
          <CombinedSparkline
            title="Blueprints"
            color="text-emerald-600"
            data={data?.series?.daily?.map((d) => d.blueprints) ?? []}
            labels={data?.series?.daily?.map((d) => d.label) ?? []}
          />
        </div>
      </section>

      {/* Channel status breakdown */}
      <section className="grid md:grid-cols-3 gap-6">
        <ChartPanel
          title="Channel status"
          icon={Database}
          type="donut"
          values={Object.values(data?.channelStatus ?? {})}
          labels={Object.keys(data?.channelStatus ?? {})}
        />
        <ChartPanel
          title="Job status"
          icon={ShieldAlert}
          type="donut"
          values={Object.values(data?.jobStatus ?? {})}
          labels={Object.keys(data?.jobStatus ?? {})}
        />
        <ChartPanel
          title="Content mix"
          icon={Film}
          type="donut"
          values={[data?.totals?.channels ?? 0, data?.totals?.videos ?? 0, data?.totals?.blueprints ?? 0]}
          labels={["Channels", "Videos", "Blueprints"]}
        />
      </section>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, color }: { label: string; value: number; icon: any; color: string }) {
  return (
    <div className={`rounded-xl border border-border/30 bg-card/30 p-4 ${color}`}>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[color:inherit]">
          <Icon className="w-4 h-4" style={{ opacity: 0.15 }} />
        </div>
        <span className="text-xs text-muted-foreground font-medium">{label}</span>
      </div>
      <p className="text-2xl font-display font-bold">{value}</p>
    </div>
  );
}

function ChartPanel({ title, icon: Icon, type, series, labels, values, subtitle }: any) {
  return (
    <div className="rounded-xl border border-border/30 bg-card/30 p-5 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
          <Icon className="w-3.5 h-3.5 text-purple-600" />
        </div>
        <h4 className="text-xs text-muted-foreground font-medium">{title}</h4>
        <div className="flex-1" />
      </div>
      {subtitle && <p className="text-[10px] text-muted-foreground mb-4">{subtitle}</p>}
      {type === "line" && <LineChart series={series ?? []} labels={labels ?? []} />}
      {type === "donut" && <DonutChart values={values ?? []} labels={labels ?? []} />}
    </div>
  );
}

function LineChart({ series, labels }: { series: number[]; labels: string[] }) {
  if (!series.length) return <EmptyChart />;
  const width = 360;
  const height = 160;
  const padding = 24;
  const plotW = width - padding * 2;
  const plotH = height - padding * 2;
  const max = Math.max(...series, 1);

  return (
    <svg width={width} height={height} className="w-full h-auto text-purple-600">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        points={series
          .map((v, i) => {
            const x = padding + (i / Math.max(series.length - 1, 1)) * plotW;
            const y = height - padding - (v / max) * plotH;
            return `${x},${y}`;
          })
          .join(" ")}
      />
      {series.map((v, i) => {
        const x = padding + (i / Math.max(series.length - 1, 1)) * plotW;
        const y = height - padding - (v / max) * plotH;
        return <circle key={i} cx={x} cy={y} r={2.5} fill="currentColor" />;
      })}
      <g className="text-[9px] text-muted-foreground">
        {labels.map((label, i) => {
          const x = padding + (i / Math.max(series.length - 1, 1)) * plotW;
          return <text key={i} x={x} y={height - 8} textAnchor="middle">{label}</text>;
        })}
      </g>
    </svg>
  );
}

function DonutChart({ values, labels }: { values: number[]; labels: string[] }) {
  const cx = 90;
  const cy = 90;
  const r = 70;
  const strokeWidth = 16;
  const total = values.reduce((a, b) => a + b, 0) || 1;
  const colors = ["hsl(260 72% 55%)", "hsl(35 100% 50%)", "hsl(199 80% 50%)", "hsl(0 70% 50%)", "hsl(280 80% 50%)"];
  let startAngle = 0;

  const arcs = values.map((v, i) => {
    const sweepAngle = (v / total) * 360;
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = ((startAngle + sweepAngle) * Math.PI) / 180;
    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);
    const largeArcFlag = sweepAngle > 180 ? 1 : 0;
    const d = `M ${x1} ${y1} A ${r} ${r} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
    startAngle += sweepAngle;
    return (
      <path
        key={i}
        d={d}
        fill="none"
        stroke={colors[i] ?? colors[0]}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    );
  });

  return (
    <div className="flex items-center justify-center h-[180px]">
      <svg width={180} height={180} viewBox="0 0 180 180">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="hsl(0 0% 10% / 0.06)" strokeWidth={strokeWidth} />
        {arcs}
      </svg>
      <div className="text-center mt-4">
        <div className="text-2xl font-display font-bold text-purple-600">{total}</div>
        <div className="text-xs text-muted-foreground">Total items</div>
      </div>
    </div>
  );
}

function CombinedSparkline({ title, color, data, labels }: { title: string; color: string; data: number[]; labels: string[] }) {
  const max = Math.max(...data, 1);
  return (
    <div className="rounded-xl border border-border/20 bg-black/20 p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-muted-foreground">{title}</span>
        <span className={`text-xs font-bold ${color}`}>{data[data.length - 1] ?? 0}</span>
      </div>
      <svg width="140" height="80" className="w-full h-auto">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className={`opacity-70 ${color}`}
          points={data
            .map((v, i) => {
              const x = (i / Math.max(data.length - 1, 1)) * 140;
              const y = 80 - (v / max) * 70;
              return `${x},${y}`;
            })
            .join(" ")}
        />
      </svg>
      <div className="flex justify-between text-[9px] text-muted-foreground mt-2">
        {labels.length ? <span>{labels[0]}</span> : null}
        {labels.length ? <span>{labels[labels.length - 1]}</span> : null}
      </div>
    </div>
  );
}

function EmptyChart() {
  return <div className="flex items-center justify-center h-40 text-muted-foreground text-xs">No data available</div>;
}