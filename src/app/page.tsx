import Link from "next/link";
import {
  Plus,
  ArrowUpRight,
  ChevronRight,
  Layers,
  FileText,
  BarChart3,
  Hash,
  Target,
  Sparkles,
} from "lucide-react";
import { HeroVisual } from "@/components/HeroVisual";
import { CapabilityVisual } from "@/components/CapabilityVisual";
import { WorkflowVisual } from "@/components/WorkflowVisual";
import { Reveal } from "@/components/landing/Reveal";
import { CountUp } from "@/components/landing/CountUp";
import { NicheMarquee } from "@/components/landing/NicheMarquee";
import { FeatureTabs } from "@/components/landing/FeatureTabs";

const STATS = [
  { value: 12, suffix: "+", label: "Channels indexed" },
  { value: 240, suffix: "+", label: "Videos parsed" },
  { value: 12, suffix: "", label: "Pattern types" },
  { value: 100, suffix: "%", label: "Pattern-based" },
];

const FEATURES = [
  {
    span: "md:col-span-7",
    visual: "patterns" as const,
    icon: BarChart3,
    title: "Pattern Extraction",
    metric: "12",
    metricLabel: "pattern types",
    body: "Hook formulas, structural archetypes, transition tactics, and CTA strategy mapped across the whole catalog, not guessed from one video.",
    highlighted: true,
  },
  {
    span: "md:col-span-5",
    visual: "transcript" as const,
    icon: FileText,
    title: "Transcript Ingestion",
    metric: "99.9%",
    metricLabel: "uptime",
    body: "Every video in a channel pulled with its transcript, metadata, and publish date. Multi-language handled by default.",
    highlighted: false,
  },
  {
    span: "md:col-span-5",
    visual: "phases" as const,
    icon: Target,
    title: "Two-Phase Generation",
    metric: "2",
    metricLabel: "phases",
    body: "Generate the section outline first. Review, reorder, and edit it. Then expand into a complete script, section by section.",
    highlighted: false,
  },
  {
    span: "md:col-span-7",
    visual: "blueprint" as const,
    icon: Hash,
    title: "Blueprint Library",
    metric: "\u221e",
    metricLabel: "blueprints",
    body: "Save a channel analysis as a reusable blueprint. Reference it whenever you script, so a winning structure stays on hand.",
    highlighted: false,
  },
];

const CAPABILITY_TAGS = [
  "Hook formulas", "Structural archetypes", "Transition tactics",
  "CTA strategy", "Pacing curves", "Retention beats",
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* ──── Ambient background ──── */}
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[15%] left-[20%] w-[340px] h-[340px] sm:w-[560px] sm:h-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-orange/8 via-orange/4 to-transparent blur-[70px] sm:blur-[130px] animate-morph-diamond" />
        <div className="hidden sm:block absolute bottom-[10%] right-[15%] w-[480px] h-[480px] translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-radial from-orange/6 via-orange/3 to-transparent blur-[110px] animate-shimmer-rotate" />
        <div className="hidden sm:block absolute top-[45%] left-[65%] w-[360px] h-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-orange/4 to-transparent blur-[90px] animate-aurora" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]" aria-hidden="true">
          <defs>
            <pattern id="grid" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute inset-0 bg-noise opacity-30" />
      </div>

      <div className="relative z-10">
        {/* ════════════════════════════════════════════ */}
        {/* HERO */}
        {/* ════════════════════════════════════════════ */}
        <section className="relative min-h-[100svh] flex items-center pt-24 pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left — text */}
              <div className="lg:col-span-7">
                <div className="animate-fade-up inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-orange/20 bg-orange/[0.04] text-orange text-[11px] font-mono tracking-[0.15em] uppercase group hover:bg-orange/[0.08] transition-colors">
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inset-0 rounded-full bg-orange animate-pulse-ring" />
                    <span className="relative rounded-full bg-orange w-full h-full" />
                  </span>
                  Pattern-based script intelligence
                </div>

                <h1 className="mt-6 font-display font-bold tracking-[-0.03em] leading-[0.94] text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5rem]">
                  Reverse-engineer
                  <br />
                  the videos that
                  <br />
                  <span className="relative inline-block">
                    <span
                      aria-hidden
                      className="absolute inset-x-[-0.12em] bottom-[0.08em] h-[0.3em] -skew-x-12 bg-orange/25"
                    />
                    <span className="relative">actually work</span>
                  </span>
                  <span className="text-orange">.</span>
                </h1>

                <p className="animate-fade-up-d1 mt-7 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Feed GoScript a YouTube channel. It reads every transcript and
                  reverse-engineers the structural DNA behind the videos that perform.
                  You get blueprints and full scripts built on patterns, not vibes.
                </p>

                <div className="animate-fade-up-d2 mt-9 flex flex-wrap items-center gap-3">
                  <Link
                    href="/channels/new"
                    className="group relative inline-flex items-center gap-2.5 h-12 px-7 rounded-xl bg-orange text-black text-sm font-semibold hover:bg-orange/90 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-orange/20"
                  >
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative flex items-center gap-2.5">
                      <Target className="w-4 h-4" />
                      Analyze a channel
                    </span>
                  </Link>
                  <Link
                    href="#pipeline"
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border border-border/40 bg-foreground/[0.02] backdrop-blur-sm text-foreground text-sm font-medium hover:border-orange/30 hover:bg-orange/5 transition-all duration-200 group"
                  >
                    See how it works
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Spec strip */}
                <div className="animate-fade-up-d3 mt-12 grid grid-cols-2 sm:grid-cols-4 divide-x divide-border/20 border border-border/20 rounded-xl overflow-hidden bg-card/20 backdrop-blur-sm">
                  {[
                    { k: "Input", v: "Channel URL" },
                    { k: "Reads", v: "Full catalog" },
                    { k: "Output", v: "Scripts" },
                    { k: "Basis", v: "Patterns" },
                  ].map((s) => (
                    <div key={s.k} className="px-4 py-3.5">
                      <p className="text-[10px] font-mono tracking-[0.18em] uppercase text-muted-foreground/50">
                        {s.k}
                      </p>
                      <p className="mt-1 text-sm font-display font-medium">{s.v}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — instrument panel */}
              <div className="animate-fade-up lg:col-span-5 lg:col-start-9">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-r from-orange/15 via-orange/5 to-transparent rounded-[40px] blur-3xl opacity-70" />
                  <div className="relative rounded-2xl overflow-hidden border border-orange/10 bg-gradient-to-br from-orange/[0.06] to-card/40 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 px-4 h-9 border-b border-border/25 bg-background/40">
                      <span className="w-2 h-2 rounded-full bg-orange/50" />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                      <span className="ml-3 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground/50">
                        goscript / pipeline
                      </span>
                    </div>
                    <HeroVisual />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5">
            <div className="w-px h-10 bg-gradient-to-b from-orange/30 to-transparent animate-progress-pulse" />
            <span className="text-[9px] font-mono text-orange/40 tracking-[0.3em] uppercase">
              Scroll
            </span>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* METRICS + SOCIAL PROOF */}
        {/* ════════════════════════════════════════════ */}
        <section className="relative py-20 sm:py-24 border-y border-border/15 bg-card/[0.08]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex items-center gap-4 mb-12">
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-orange/70">
                  00 / Signal
                </span>
                <span className="flex-1 h-px bg-gradient-to-r from-orange/20 to-transparent" />
              </div>
            </Reveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              {STATS.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 90}>
                  <div>
                    <p className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-foreground">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 text-xs font-mono tracking-[0.14em] uppercase text-muted-foreground/60">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-16 pt-10 border-t border-border/15">
                <p className="text-center text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground/50 mb-7">
                  Built for creators working across
                </p>
                <NicheMarquee />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* PIPELINE — interactive showcase */}
        {/* ════════════════════════════════════════════ */}
        <section id="pipeline" className="relative py-24 sm:py-32 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="max-w-2xl mb-14">
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-orange/70">
                    01 / Pipeline
                  </span>
                  <span className="flex-1 h-px bg-gradient-to-r from-orange/20 to-transparent" />
                </div>
                <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
                  From URL to script
                  <br />
                  in <span className="text-orange">three moves</span>.
                </h2>
                <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                  One continuous flow. Pick a step to see exactly what happens inside it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <FeatureTabs />
            </Reveal>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* CAPABILITIES — bento grid */}
        {/* ════════════════════════════════════════════ */}
        <section id="capabilities" className="relative py-24 sm:py-32 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="max-w-2xl mb-14">
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-orange/70">
                    02 / Capabilities
                  </span>
                  <span className="flex-1 h-px bg-gradient-to-r from-orange/20 to-transparent" />
                </div>
                <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
                  Everything you need to
                  <br />
                  <span className="text-orange">reverse-engineer success</span>.
                </h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-12 gap-4 sm:gap-5">
              {FEATURES.map((f, i) => (
                <Reveal
                  key={f.title}
                  delay={i * 80}
                  className={f.span}
                >
                  <div
                    className={`group relative h-full rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                      f.highlighted
                        ? "border-orange/30 bg-gradient-to-br from-orange/[0.07] via-card/40 to-card/20 hover:border-orange/50 hover:shadow-xl hover:shadow-orange/10"
                        : "border-border/30 bg-card/40 hover:border-orange/25 hover:shadow-lg hover:shadow-orange/5"
                    }`}
                  >
                    {f.highlighted && (
                      <>
                        <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-radial from-orange/15 to-transparent blur-3xl pointer-events-none" />
                        <div className="absolute top-0 left-0 px-3 py-1.5 rounded-br-2xl bg-gradient-to-br from-orange/20 to-orange/5 border-b border-r border-orange/20">
                          <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-orange/80">
                            Core engine
                          </span>
                        </div>
                      </>
                    )}
                    <div className="relative p-6 sm:p-7 h-full flex flex-col">
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                            <f.icon className="w-5 h-5 text-orange" />
                          </div>
                          <h3 className="font-display font-semibold text-base tracking-tight">
                            {f.title}
                          </h3>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-3xl font-display font-bold text-orange/40 leading-none">
                            {f.metric}
                          </p>
                          <p className="mt-1 text-[9px] font-mono tracking-[0.16em] uppercase text-muted-foreground/50">
                            {f.metricLabel}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {f.body}
                      </p>
                      <div className="-mx-6 sm:-mx-7 -mb-6 sm:-mb-7 mt-auto rounded-b-2xl overflow-hidden border-t border-border/20 bg-foreground/[0.02]">
                        <CapabilityVisual type={f.visual} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap gap-2">
                {CAPABILITY_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1.5 rounded-full border border-border/25 bg-foreground/[0.02] text-muted-foreground/70 font-mono tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* WORKFLOW — outline then script */}
        {/* ════════════════════════════════════════════ */}
        <section id="workflow" className="relative py-24 sm:py-32 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="max-w-2xl mb-14">
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-orange/70">
                    03 / Workflow
                  </span>
                  <span className="flex-1 h-px bg-gradient-to-r from-orange/20 to-transparent" />
                </div>
                <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
                  Outline first.
                  <br />
                  <span className="text-orange">Script second</span>.
                </h2>
                <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Structure comes before prose. Lock the shape, then let the engine fill it.
                </p>
              </div>
            </Reveal>

            <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
              <div className="hidden md:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-orange/20 to-transparent" />

              {[
                {
                  phase: "Phase 1",
                  title: "Structure outline",
                  icon: Layers,
                  visual: "outline" as const,
                  items: [
                    "Generate section headings from your topic",
                    "Reorder, rename, or edit each section",
                    "Set estimated durations per section",
                    "Add or drop sections freely",
                  ],
                },
                {
                  phase: "Phase 2",
                  title: "Full script",
                  icon: FileText,
                  visual: "script" as const,
                  items: [
                    "Expand headings into complete written content",
                    "Edit the full body inline",
                    "Refine title, transitions, and tone notes",
                    "Save, copy, or export as markdown",
                  ],
                },
              ].map((col, i) => (
                <Reveal key={col.phase} delay={i * 140}>
                  <div className="group relative h-full rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-orange/25 hover:shadow-lg hover:shadow-orange/5">
                    <div className="absolute top-0 right-0 px-3 py-1.5 rounded-bl-2xl bg-gradient-to-bl from-orange/15 to-orange/5 border-b border-l border-orange/20">
                      <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-orange/60">
                        {col.phase}
                      </span>
                    </div>
                    <div className="relative p-6 sm:p-7">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                          <col.icon className="w-5 h-5 text-orange" />
                        </div>
                        <h3 className="font-display font-semibold text-lg tracking-tight">
                          {col.title}
                        </h3>
                      </div>
                      <ul className="space-y-2.5">
                        {col.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-orange/30 mt-1.5 shrink-0 ring-2 ring-orange/10 transition-all duration-300 group-hover:bg-orange/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="-mx-6 sm:-mx-7 -mb-6 sm:-mb-7 mt-6 rounded-b-2xl overflow-hidden border-t border-border/20 bg-foreground/[0.02]">
                        <WorkflowVisual phase={col.visual} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* TESTIMONIAL */}
        {/* ════════════════════════════════════════════ */}
        <section className="relative py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal variant="fade">
              <div className="relative border-t border-orange/10 pt-14">
                <div className="absolute -top-8 left-2 sm:left-10 text-[140px] sm:text-[190px] font-display font-bold text-orange/5 leading-none select-none pointer-events-none">
                  &ldquo;
                </div>
                <figure className="relative">
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-foreground/70 leading-relaxed italic max-w-2xl mx-auto text-center">
                    Instead of guessing what works, I can look at exactly how
                    successful channels structure their content and apply those
                    patterns to my own videos.
                  </blockquote>
                  <figcaption className="flex items-center justify-center gap-4 mt-8">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-orange">GS</span>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium">Early user</p>
                      <p className="text-xs text-muted-foreground">Video creator</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* PRICING */}
        {/* ════════════════════════════════════════════ */}
        <section id="pricing" className="relative py-24 sm:py-32 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="max-w-2xl mb-14">
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-orange/70">
                    04 / Pricing
                  </span>
                  <span className="flex-1 h-px bg-gradient-to-r from-orange/20 to-transparent" />
                </div>
                <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
                  Start free.
                  <br />
                  <span className="text-orange">Scale when ready</span>.
                </h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
              {/* Free */}
              <Reveal delay={80}>
                <div className="group relative h-full rounded-2xl border border-orange/30 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-orange/50 hover:shadow-xl hover:shadow-orange/10">
                  <div className="absolute -inset-20 bg-gradient-radial from-orange/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="relative p-6 sm:p-7 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <h3 className="font-display font-semibold text-xl tracking-tight">Free</h3>
                        <p className="text-sm text-muted-foreground">For getting started</p>
                      </div>
                      <div className="text-right">
                        <span className="text-4xl font-display font-bold text-orange">$0</span>
                        <span className="text-sm text-muted-foreground ml-1">/mo</span>
                      </div>
                    </div>
                    <ul className="space-y-2.5 text-sm text-muted-foreground mb-7">
                      {["5 channels analyzed", "5 videos analyzed", "5 generated scripts"].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0 ring-2 ring-orange/15" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/channels/new"
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-orange text-black text-sm font-semibold hover:bg-orange/90 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-orange/20"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Get started
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* Pro */}
              <Reveal delay={160}>
                <div className="group relative h-full rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm overflow-hidden opacity-70">
                  <div className="absolute top-0 right-0 px-3 py-1.5 rounded-bl-2xl bg-gradient-to-bl from-orange/15 to-orange/5 border-b border-l border-orange/20">
                    <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-orange/60">
                      Coming soon
                    </span>
                  </div>
                  <div className="relative p-6 sm:p-7 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <h3 className="font-display font-semibold text-xl tracking-tight">Pro</h3>
                        <p className="text-sm text-muted-foreground">For power users</p>
                      </div>
                      <div className="text-right">
                        <span className="text-4xl font-display font-bold text-foreground/40">&mdash;</span>
                      </div>
                    </div>
                    <ul className="space-y-2.5 text-sm text-muted-foreground mb-7">
                      {["Unlimited analyses", "Unlimited scripts", "Priority support"].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 shrink-0 ring-2 ring-transparent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto inline-flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-foreground/5 text-muted-foreground/40 text-sm font-medium cursor-default">
                      Coming soon
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* FINAL CTA */}
        {/* ════════════════════════════════════════════ */}
        <section className="relative py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal variant="scale">
              <div className="relative rounded-3xl border border-orange/20 bg-gradient-to-br from-orange/[0.05] to-card/40 overflow-hidden group">
                <div className="absolute -top-32 -left-24 w-80 h-80 rounded-full bg-gradient-radial from-orange/10 to-transparent blur-[120px] animate-morph-diamond" />
                <div className="absolute -bottom-32 -right-24 w-80 h-80 rounded-full bg-gradient-radial from-orange/8 to-transparent blur-[100px] animate-shimmer-rotate" />
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent absolute animate-scan-line" />
                </div>

                <div className="relative px-8 py-14 sm:px-16 sm:py-20 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/20 flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:scale-105">
                    <Sparkles className="w-6 h-6 text-orange" />
                  </div>

                  <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.03] mb-4">
                    Stop guessing.
                    <br />
                    Start <span className="text-orange">deconstructing</span>.
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto mb-9 leading-relaxed">
                    Add a channel, extract its script DNA, and generate videos
                    engineered from patterns that actually work.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href="/channels/new"
                      className="group/btn relative inline-flex items-center gap-2.5 h-12 px-7 rounded-xl bg-orange text-black text-sm font-semibold hover:bg-orange/90 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-orange/20"
                    >
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                      <span className="relative flex items-center gap-2.5">
                        <Plus className="w-4 h-4" />
                        Add your first channel
                      </span>
                    </Link>
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border border-border/40 bg-foreground/[0.02] backdrop-blur-sm text-foreground text-sm font-medium hover:border-orange/30 hover:bg-orange/5 transition-all duration-200 group/link"
                    >
                      Read the field notes
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ──── Footer ──── */}
        <footer className="relative pt-16 pb-10 border-t border-border/15">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
              <div className="max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/10 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-orange">G</span>
                  </div>
                  <span className="text-xs font-mono text-orange/60 tracking-[0.2em] uppercase">
                    GoScript
                  </span>
                </div>
                <p className="text-xs text-muted-foreground/60 leading-relaxed">
                  Pattern-based script intelligence for YouTube. Deconstruct, remix, perform.
                </p>
              </div>

              <nav className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 text-sm">
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-muted-foreground/40">
                    Product
                  </span>
                  <Link href="/channels/new" className="text-muted-foreground hover:text-orange/80 transition-colors">Channel Analyzer</Link>
                  <Link href="/video/analyze" className="text-muted-foreground hover:text-orange/80 transition-colors">Video Analyzer</Link>
                  <Link href="/blueprints" className="text-muted-foreground hover:text-orange/80 transition-colors">Blueprints</Link>
                  <Link href="/scripts/new" className="text-muted-foreground hover:text-orange/80 transition-colors">Generator</Link>
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-muted-foreground/40">
                    Explore
                  </span>
                  <Link href="#pipeline" className="text-muted-foreground hover:text-orange/80 transition-colors">How it works</Link>
                  <Link href="#capabilities" className="text-muted-foreground hover:text-orange/80 transition-colors">Capabilities</Link>
                  <Link href="#pricing" className="text-muted-foreground hover:text-orange/80 transition-colors">Pricing</Link>
                  <Link href="/blog" className="text-muted-foreground hover:text-orange/80 transition-colors">Blog</Link>
                </div>
                <div className="flex flex-col gap-2.5 col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-muted-foreground/40">
                    Get started
                  </span>
                  <Link href="/signup" className="text-muted-foreground hover:text-orange/80 transition-colors">Create account</Link>
                  <Link href="/login" className="text-muted-foreground hover:text-orange/80 transition-colors">Sign in</Link>
                </div>
              </nav>
            </div>

            <div className="mt-12 pt-6 border-t border-border/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-muted-foreground/40 tracking-wider">
                &copy; {new Date().getFullYear()} GoScript
              </span>
              <span className="text-[11px] font-mono text-muted-foreground/40 tracking-[0.16em] uppercase">
                Deconstruct &middot; Remix &middot; Perform
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
