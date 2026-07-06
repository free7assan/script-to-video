import { HeroVisual } from "@/components/HeroVisual";
import { PipelineVisual } from "@/components/PipelineVisual";
import { CapabilityVisual } from "@/components/CapabilityVisual";
import { WorkflowVisual } from "@/components/WorkflowVisual";
import Link from "next/link";
import {
  Plus, ArrowRight, Search, Layers, Wand2, FileText,
  BarChart3, Hash, Quote, Film, Target, Crosshair,
  Sparkles, ChevronRight, Monitor, ChevronDown, Eye,
  Zap, Shuffle, Mic, ArrowUpRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="pb-0 overflow-hidden relative">
      {/* ──── Ambient background ──── */}
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-orange/8 via-orange/4 to-transparent blur-[120px] animate-morph-diamond" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-radial from-orange/6 via-orange/3 to-transparent blur-[100px] animate-shimmer-rotate" />
        <div className="absolute top-1/3 left-2/3 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-orange/4 via-transparent to-transparent blur-[80px] animate-aurora" />
        <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-radial from-foreground/3 via-transparent to-transparent blur-[100px] animate-aurora-2" />
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
        {/* HERO — cinematic split */}
        {/* ════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center pt-0 pb-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left — text (8 cols) */}
              <div className="lg:col-span-7 animate-fade-up">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-orange/20 bg-orange/[0.04] text-orange text-xs font-mono tracking-wider uppercase mb-5 sm:mb-6 group hover:bg-orange/[0.08] transition-all">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-orange animate-pulse-ring" />
                    <span className="relative rounded-full bg-orange w-full h-full" />
                  </span>
                  Video Script Intelligence
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <div className="space-y-1 sm:space-y-2 mb-5">
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-bold tracking-tight leading-[0.85] text-foreground">
                    Deconstruct.
                  </h1>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight leading-[0.85]">
                    <span className="bg-gradient-to-r from-orange via-orange/80 to-orange/40 bg-clip-text text-transparent animate-shimmer-text" style={{ backgroundSize: "200% auto" }}>
                      Remix.
                    </span>
                  </h1>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight leading-[0.85] text-foreground">
                    Perform.
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed mb-7">
                  Feed it a YouTube channel. It reverse-engineers every video&apos;s structural DNA.
                  You get actionable blueprints and scripts built from patterns that actually work.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/channels/new"
                    className="group relative inline-flex items-center gap-2.5 h-12 px-7 rounded-xl bg-orange text-black text-sm font-semibold hover:bg-orange/90 hover:scale-[1.02] transition-all shadow-lg shadow-orange/20 animate-glow-ring"
                  >
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative flex items-center gap-2.5">
                      <Target className="w-4 h-4" />
                      Analyze a Channel
                    </span>
                  </Link>
                  <Link
                    href="#pipeline"
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border border-border/30 text-foreground text-sm font-medium hover:border-orange/30 hover:bg-orange/5 transition-all group"
                  >
                    How it works
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right — hero visual (5 cols, offset) */}
              <div className="lg:col-span-5 lg:col-start-9 relative animate-fade-up-d1">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-r from-orange/15 via-orange/5 to-transparent rounded-[40px] blur-3xl opacity-70" />
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-orange/[0.06] to-card/40 border border-orange/10">
                    <HeroVisual />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="w-px h-10 bg-gradient-to-b from-orange/30 to-transparent animate-progress-pulse" />
            <span className="text-[9px] font-mono text-orange/40 tracking-[0.3em] uppercase animate-fade-up">Scroll</span>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* SOCIAL PROOF — dedicated bar */}
        {/* ════════════════════════════════════════════ */}
        <section className="relative py-14 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16">
              {[
                { value: "12+", label: "Channels Analyzed" },
                { value: "240+", label: "Videos Processed" },
                { value: "47", label: "Blueprints Extracted" },
                { value: "100%", label: "Pattern-Based" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
                  <span className="text-3xl sm:text-4xl font-display font-bold text-orange">{stat.value}</span>
                  <div className="w-px h-8 bg-orange/10" />
                  <span className="text-xs font-mono text-muted-foreground/60 tracking-wider uppercase max-w-[80px] leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* PIPELINE — timeline */}
        {/* ════════════════════════════════════════════ */}
        <section id="pipeline" className="relative py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-8 h-px bg-orange/30" />
                <span className="text-xs sm:text-sm font-mono text-orange/70 tracking-[0.2em] uppercase">Pipeline</span>
                <span className="w-8 h-px bg-orange/30" />
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-3">
                From URL to script&mdash;
              </h2>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-orange/70">
                three moves.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Connecting line (desktop) */}
              <div className="hidden lg:block absolute top-1/3 left-[calc(16.66%+28px)] right-[calc(16.66%+28px)] h-px bg-gradient-to-r from-orange/20 via-orange/40 to-orange/20" />
              <div className="hidden lg:block absolute top-1/3 left-[calc(16.66%+28px)] right-[calc(16.66%+28px)] h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent animate-width-in" style={{ animationDelay: '0.5s' }} />

              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    number: "01", icon: Search, title: "Ingest", step: "ingest" as const,
                    desc: "Drop a YouTube channel URL. We fetch their entire video roster and pull every transcript — automatically.",
                    tags: ["Transcripts", "Metadata", "History"],
                  },
                  {
                    number: "02", icon: Layers, title: "Analyze", step: "analyze" as const,
                    desc: "Our engine extracts hook styles, structural patterns, transition tactics, and engagement formulas across their catalog.",
                    tags: ["Patterns", "Structure", "DNA"],
                  },
                  {
                    number: "03", icon: Wand2, title: "Generate", step: "generate" as const,
                    desc: "Describe your video idea. Get a structured outline first, then expand it into a full script following proven patterns.",
                    tags: ["Headings", "Full Script", "Editable"],
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="group animate-fade-up"
                    style={{ animationDelay: `${0.15 + i * 0.2}s` }}
                  >
                    <div className="relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5 h-full flex flex-col">
                      {/* Large number backdrop */}
                      <div className="absolute -top-8 -right-8 text-[10rem] font-display font-bold text-foreground/[0.015] select-none leading-none pointer-events-none">
                        {step.number}
                      </div>
                      <div className="absolute -inset-20 bg-gradient-radial from-orange/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      {/* Step connector dot */}
                      <div className="hidden lg:flex absolute top-1/3 -left-[calc(28px+0.75rem)] w-3 h-3 rounded-full bg-orange/30 ring-4 ring-background z-10 group-hover:bg-orange/60 group-hover:ring-orange/10 transition-all duration-300" />

                      <div className="relative p-6 sm:p-7 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300 shrink-0">
                            <step.icon className="w-5 h-5 text-orange" />
                          </div>
                          <div>
                            <p className="text-[10px] font-mono text-orange/50 tracking-widest uppercase">Move {step.number}</p>
                            <h3 className="font-display font-semibold text-lg">{step.title}</h3>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.desc}</p>

                        <div className="mt-auto -mx-6 sm:-mx-7 -mb-6 sm:-mb-7 rounded-b-2xl overflow-hidden border-t border-border/20 bg-foreground/3">
                          <PipelineVisual step={step.step} />
                        </div>

                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {step.tags.map((t) => (
                            <span key={t} className="text-[10px] px-2.5 py-1 rounded-full border border-border/20 bg-black/[0.03] dark:bg-white/[0.03] text-muted-foreground/60 font-mono tracking-wider">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* CAPABILITIES — asymmetric magazine grid */}
        {/* ════════════════════════════════════════════ */}
        <section id="capabilities" className="relative py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-8 h-px bg-orange/30" />
                <span className="text-xs sm:text-sm font-mono text-orange/70 tracking-[0.2em] uppercase">Capabilities</span>
                <span className="w-8 h-px bg-orange/30" />
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-3">
                Everything you need to
              </h2>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-orange/70">
                reverse-engineer success.
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {/* Feature 1 — spans 7 cols */}
              <div className="md:col-span-7 group relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5 animate-fade-up">
                <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-orange/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-radial from-orange/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative p-6 sm:p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FileText className="w-5 h-5 text-orange" />
                      </div>
                      <h3 className="font-display font-semibold text-base">Transcript Ingestion</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-3xl sm:text-4xl font-display font-bold text-orange/40">99.9%</p>
                      <p className="text-[9px] font-mono text-muted-foreground/50 tracking-widest uppercase">uptime</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Automatic transcript fetching for every video in a channel. Multi-language support included.
                  </p>
                  <div className="mt-auto -mx-6 sm:-mx-7 -mb-6 sm:-mb-7 rounded-b-2xl overflow-hidden border-t border-border/20 bg-foreground/3">
                    <CapabilityVisual type="transcript" />
                  </div>
                </div>
              </div>

              {/* Feature 2 — spans 5 cols */}
              <div className="md:col-span-5 group relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-orange/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-radial from-orange/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative p-6 sm:p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <BarChart3 className="w-5 h-5 text-orange" />
                      </div>
                      <h3 className="font-display font-semibold text-base">Pattern Extraction</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-3xl sm:text-4xl font-display font-bold text-orange/40">12</p>
                      <p className="text-[9px] font-mono text-muted-foreground/50 tracking-widest uppercase">pattern types</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Identify hook formulas, structural archetypes, transition patterns, and CTA strategies across videos.
                  </p>
                  <div className="mt-auto -mx-6 sm:-mx-7 -mb-6 sm:-mb-7 rounded-b-2xl overflow-hidden border-t border-border/20 bg-foreground/3">
                    <CapabilityVisual type="patterns" />
                  </div>
                </div>
              </div>

              {/* Feature 3 — spans 5 cols */}
              <div className="md:col-span-5 group relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5 animate-fade-up" style={{ animationDelay: '0.15s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-orange/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-radial from-orange/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative p-6 sm:p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-5 h-5 text-orange" />
                      </div>
                      <h3 className="font-display font-semibold text-base">Two-Phase Generation</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-3xl sm:text-4xl font-display font-bold text-orange/40">2</p>
                      <p className="text-[9px] font-mono text-muted-foreground/50 tracking-widest uppercase">phases</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Generate section headings first. Review, reorder, edit. Then expand into a complete script.
                  </p>
                  <div className="mt-auto -mx-6 sm:-mx-7 -mb-6 sm:-mb-7 rounded-b-2xl overflow-hidden border-t border-border/20 bg-foreground/3">
                    <CapabilityVisual type="phases" />
                  </div>
                </div>
              </div>

              {/* Feature 4 — spans 7 cols */}
              <div className="md:col-span-7 group relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-orange/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-radial from-orange/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative p-6 sm:p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Hash className="w-5 h-5 text-orange" />
                      </div>
                      <h3 className="font-display font-semibold text-base">Blueprint Library</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-3xl sm:text-4xl font-display font-bold text-orange/40">&infin;</p>
                      <p className="text-[9px] font-mono text-muted-foreground/50 tracking-widest uppercase">blueprints</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Save channel analyses as blueprints. Reference them anytime for future script generation.
                  </p>
                  <div className="mt-auto -mx-6 sm:-mx-7 -mb-6 sm:-mb-7 rounded-b-2xl overflow-hidden border-t border-border/20 bg-foreground/3">
                    <CapabilityVisual type="blueprint" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* WORKFLOW — side-by-side with divider */}
        {/* ════════════════════════════════════════════ */}
        <section id="workflow" className="relative py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-8 h-px bg-orange/30" />
                <span className="text-xs sm:text-sm font-mono text-orange/70 tracking-[0.2em] uppercase">Workflow</span>
                <span className="w-8 h-px bg-orange/30" />
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-3">
                Outline first.
              </h2>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-orange/70">
                Script second.
              </p>
            </div>

            <div className="relative grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
              {/* Vertical divider */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-orange/20 to-transparent" />

              {[
                {
                  phase: "Phase 1", title: "Structure Outline", icon: Layers, visual: "outline" as const,
                  items: ["Generate section headings based on your topic", "Review, reorder, and edit each section", "Adjust estimated durations per section", "Add or remove sections freely"],
                },
                {
                  phase: "Phase 2", title: "Full Script", icon: FileText, visual: "script" as const,
                  items: ["Expand headings into complete written content", "Edit the full script body inline", "Refine title, transitions, and tone notes", "Save, copy, or download as markdown"],
                },
              ].map((col, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-orange/30 hover:shadow-lg hover:shadow-orange/5 animate-fade-up"
                  style={{ animationDelay: `${0.2 + i * 0.2}s` }}
                >
                  <div className="absolute top-0 right-0 px-3 py-1.5 rounded-bl-2xl bg-gradient-to-bl from-orange/15 to-orange/5 border-b border-l border-orange/20">
                    <span className="text-[10px] font-mono text-orange/50 tracking-widest uppercase">{col.phase}</span>
                  </div>
                  <div className="relative p-6 sm:p-7">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300">
                        <col.icon className="w-5 h-5 text-orange" />
                      </div>
                      <h3 className="font-display font-semibold text-lg">{col.title}</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {col.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange/30 mt-1.5 shrink-0 ring-2 ring-orange/10 group-hover:bg-orange/60 group-hover:ring-orange/20 transition-all duration-300" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="-mx-6 sm:-mx-7 -mb-6 sm:-mb-7 rounded-b-2xl overflow-hidden border-t border-border/20 bg-foreground/3 mt-5">
                      <WorkflowVisual phase={col.visual} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* TESTIMONIAL — dramatic pull quote */}
        {/* ════════════════════════════════════════════ */}
        <section className="relative py-24 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative border-t border-orange/10 pt-14">
              <div className="absolute -top-10 left-8 sm:left-16 text-[140px] sm:text-[200px] font-display font-bold text-orange/5 leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="w-8 h-px bg-orange/20" />
                <span className="text-xs sm:text-sm font-mono text-orange/40 tracking-[0.2em] uppercase">Testimonial</span>
                <span className="w-8 h-px bg-orange/20" />
              </div>

              <blockquote className="relative text-xl sm:text-2xl lg:text-3xl font-display font-medium text-foreground/70 leading-relaxed italic max-w-2xl mx-auto text-center">
                Instead of guessing what works, I can now look at exactly how successful
                channels structure their content and apply those patterns to my own videos.
              </blockquote>

              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-orange">GS</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">Early user</p>
                  <p className="text-xs text-muted-foreground">Video creator</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* PRICING — cleaner cards */}
        {/* ════════════════════════════════════════════ */}
        <section id="pricing" className="relative py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-8 h-px bg-orange/30" />
                <span className="text-xs sm:text-sm font-mono text-orange/70 tracking-[0.2em] uppercase">Pricing</span>
                <span className="w-8 h-px bg-orange/30" />
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-3">
                Start free.
              </h2>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-orange/70">
                Scale when you&apos;re ready.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Free */}
              <div className="group relative rounded-2xl border border-orange/30 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-orange/40 hover:shadow-xl hover:shadow-orange/10 animate-fade-up">
                <div className="absolute -inset-20 bg-gradient-radial from-orange/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="font-display font-semibold text-xl">Free</h3>
                      <p className="text-sm text-muted-foreground">For getting started</p>
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-display font-bold text-orange">$0</span>
                      <span className="text-sm text-muted-foreground ml-1">/mo</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-sm text-muted-foreground mb-7">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0 ring-2 ring-orange/15" />
                      5 channels analyzed
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0 ring-2 ring-orange/15" />
                      5 videos analyzed
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0 ring-2 ring-orange/15" />
                      5 generated scripts
                    </li>
                  </ul>
                  <Link
                    href="/channels/new"
                    className="inline-flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-orange text-black text-sm font-semibold hover:bg-orange/90 hover:scale-[1.02] transition-all shadow-lg shadow-orange/20"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Pro */}
              <div className="group relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-orange/20 hover:shadow-xl hover:shadow-orange/5 animate-fade-up opacity-70" style={{ animationDelay: '0.1s' }}>
                <div className="absolute top-0 right-0 px-3 py-1.5 rounded-bl-2xl bg-gradient-to-bl from-orange/15 to-orange/5 border-b border-l border-orange/20">
                  <span className="text-[10px] font-mono text-orange/50 tracking-widest uppercase">Coming soon</span>
                </div>
                <div className="relative p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="font-display font-semibold text-xl">Pro</h3>
                      <p className="text-sm text-muted-foreground">For power users</p>
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-display font-bold text-foreground/40">&mdash;</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-sm text-muted-foreground mb-7">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 shrink-0 ring-2 ring-transparent" />
                      Unlimited analyses
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 shrink-0 ring-2 ring-transparent" />
                      Unlimited scripts
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 shrink-0 ring-2 ring-transparent" />
                      Priority support
                    </li>
                  </ul>
                  <div className="inline-flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-foreground/5 text-muted-foreground/40 text-sm font-medium cursor-default">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* FINAL CTA — full-width impact */}
        {/* ════════════════════════════════════════════ */}
        <section className="relative py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl border border-orange/20 bg-gradient-to-br from-orange/[0.04] to-card/40 overflow-hidden group text-center">
              <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-radial from-orange/10 to-transparent blur-[120px] animate-morph-diamond" />
              <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-radial from-orange/8 to-transparent blur-[100px] animate-shimmer-rotate" />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent absolute animate-scan-line" />
              </div>

              <div className="relative px-8 py-14 sm:px-20 sm:py-20">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-500">
                  <Sparkles className="w-7 h-7 text-orange" />
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-2">
                  Ready to start
                </h2>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-orange/70 mb-3">
                  deconstructing?
                </p>
                <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8 leading-relaxed">
                  Add a channel, extract its script DNA, and start generating videos
                  engineered from patterns that actually work.
                </p>
                <Link
                  href="/channels/new"
                  className="group relative inline-flex items-center gap-2.5 h-12 px-8 rounded-xl bg-orange text-black text-sm font-semibold hover:bg-orange/90 hover:scale-[1.02] transition-all shadow-lg shadow-orange/20 animate-glow-ring"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center gap-2.5">
                    <Plus className="w-4 h-4" />
                    Add Your First Channel
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ──── Footer ──── */}
        <footer className="relative pt-16 pb-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-border/10 pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/10 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-orange">G</span>
                  </div>
                  <span className="text-xs font-mono text-orange/40 tracking-wider uppercase">GoScript</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground/40 tracking-wider uppercase">
                  <span className="hover:text-orange/60 transition-colors">Pattern-Based Script Intelligence</span>
                  <span className="w-px h-3 bg-muted-foreground/10" />
                  <span className="hover:text-orange/60 transition-colors">{new Date().getFullYear()}</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
