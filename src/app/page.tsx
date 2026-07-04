import { HeroVisual } from "@/components/HeroVisual";
import { PipelineVisual } from "@/components/PipelineVisual";
import { CapabilityVisual } from "@/components/CapabilityVisual";
import { WorkflowVisual } from "@/components/WorkflowVisual";
import Link from "next/link";
import {
  Plus, ArrowRight, Search, Layers, Wand2, FileText,
  BarChart3, Hash, Quote, Film, Target, Crosshair,
  Sparkles, ChevronRight, Monitor, ChevronDown,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="pb-32 overflow-hidden relative">
      {/* ──── Ambient background ──── */}
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-orange/8 via-orange/4 to-transparent blur-[120px] animate-morph-diamond" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-radial from-orange/6 via-orange/3 to-transparent blur-[100px] animate-shimmer-rotate" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-foreground/3 via-foreground/1 to-transparent blur-[150px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" aria-hidden="true">
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
        {/* HERO — split layout */}
        {/* ════════════════════════════════════════════ */}
        <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center pt-0 pb-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left — text */}
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-orange/20 bg-orange/[0.04] text-orange text-xs font-mono tracking-wider uppercase mb-6 sm:mb-8">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-orange animate-pulse-ring" />
                    <span className="relative rounded-full bg-orange w-full h-full" />
                  </span>
                  Video Script Intelligence
                </div>

                <h1 className="space-y-3 mb-4 sm:mb-6">
                  <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight leading-[0.9]">
                    <span className="text-foreground">Deconstruct.</span>
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight leading-[0.9]">
                    <span className="bg-gradient-to-r from-orange via-orange/80 to-orange/40 bg-clip-text text-transparent animate-shimmer-text" style={{ backgroundSize: "200% auto" }}>
                      Remix. Perform.
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
                  Feed it a YouTube channel. It extracts the structural DNA of every video.
                  You get actionable blueprints and generate scripts that borrow from proven patterns.
                </p>

                <div className="flex flex-wrap gap-3 mt-6 sm:mt-8">
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

                {/* Stats inline */}
                <div className="flex items-center gap-6 mt-10 sm:mt-12">
                  {[
                    { value: "12+", label: "Channels" },
                    { value: "240+", label: "Videos" },
                    { value: "47", label: "Blueprints" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl font-display font-bold text-orange">{stat.value}</span>
                      <span className="text-[8px] font-mono text-muted-foreground/40 tracking-widest uppercase">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — hero visual */}
              <div className="relative animate-fade-up-d2">
                <HeroVisual />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[7px] font-mono text-orange/20 tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-orange/20 to-transparent animate-progress-pulse" />
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* PIPELINE */}
        {/* ════════════════════════════════════════════ */}
        <section id="pipeline" className="relative py-32 sm:py-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-8 h-px bg-orange/30" />
                <span className="text-xs sm:text-sm font-mono text-orange/50 tracking-[0.2em] uppercase">Pipeline</span>
                <span className="w-8 h-px bg-orange/30" />
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-3">
                From URL to script —
              </h2>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-orange/70">
                three moves.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {[
                {
                  number: "01", icon: Search, title: "Ingest", step: "ingest" as const,
                  desc: "Drop a YouTube channel URL. We fetch their video roster and pull transcripts for each one — automatically.",
                  tags: ["Transcripts", "Metadata", "History"],
                },
                {
                  number: "02", icon: Layers, title: "Analyze", step: "analyze" as const,
                  desc: "Our engine extracts hook styles, structural patterns, transitions, and engagement tactics across their entire catalog.",
                  tags: ["Patterns", "Structure", "DNA"],
                },
                {
                  number: "03", icon: Wand2, title: "Generate", step: "generate" as const,
                  desc: "Describe your video idea. Get a structured outline first, then expand it into a full script following proven methodology.",
                  tags: ["Headings", "Full Script", "Editable"],
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="group animate-fade-up"
                  style={{ animationDelay: `${0.1 + i * 0.15}s` }}
                >
                  <div className="relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5 h-full flex flex-col">
                    <div className="absolute -top-6 -right-6 text-9xl font-display font-bold text-foreground/[0.02] select-none leading-none pointer-events-none">
                      {step.number}
                    </div>
                    <div className="absolute -inset-20 bg-gradient-radial from-orange/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="relative p-6 sm:p-7 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <step.icon className="w-5 h-5 text-orange" />
                        </div>
                        <div>
                          <p className="text-[8px] font-mono text-orange/40 tracking-widest uppercase">Move {step.number}</p>
                          <h3 className="font-display font-semibold text-base">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>

                      {/* Mockup screenshot */}
                      <div className="mt-auto rounded-xl border border-border/20 bg-foreground/3 p-3 sm:p-4">
                        <PipelineVisual step={step.step} />
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {step.tags.map((t) => (
                          <span key={t} className="text-[8px] px-2 py-1 rounded-full border border-border/20 bg-black/[0.03] dark:bg-white/[0.03] text-muted-foreground/50 font-mono tracking-wider">
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
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* CAPABILITIES */}
        {/* ════════════════════════════════════════════ */}
        <section className="relative py-32 sm:py-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-8 h-px bg-orange/30" />
                <span className="text-xs sm:text-sm font-mono text-orange/50 tracking-[0.2em] uppercase">Capabilities</span>
                <span className="w-8 h-px bg-orange/30" />
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-3">
                Everything you need to
              </h2>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-orange/70">
                reverse-engineer success.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: FileText, title: "Transcript Ingestion", type: "transcript" as const,
                  desc: "Automatic transcript fetching for every video in a channel. Multi-language support included.",
                  value: "99.9%", meta: "uptime",
                },
                {
                  icon: BarChart3, title: "Pattern Extraction", type: "patterns" as const,
                  desc: "Identify hook formulas, structural archetypes, transition patterns, and CTA strategies across videos.",
                  value: "12", meta: "pattern types",
                },
                {
                  icon: Target, title: "Two-Phase Generation", type: "phases" as const,
                  desc: "Generate section headings first. Review, reorder, edit. Then expand into a complete script.",
                  value: "2", meta: "phases",
                },
                {
                  icon: Hash, title: "Blueprint Library", type: "blueprint" as const,
                  desc: "Save channel analyses as blueprints. Reference them anytime for future script generation.",
                  value: "∞", meta: "blueprints",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5 animate-fade-up"
                  style={{ animationDelay: `${0.1 + i * 0.12}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-orange/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-radial from-orange/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-5 h-5 text-orange" />
                        </div>
                        <h3 className="font-display font-semibold text-base">{item.title}</h3>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-3xl sm:text-4xl font-display font-bold text-orange/40">{item.value}</p>
                        <p className="text-[7px] font-mono text-muted-foreground/30 tracking-widest uppercase">{item.meta}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                    {/* Image/mockup area */}
                    <div className="rounded-xl border border-border/20 bg-foreground/3 p-3 sm:p-4">
                      <CapabilityVisual type={item.type} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* WORKFLOW */}
        {/* ════════════════════════════════════════════ */}
        <section className="relative py-32 sm:py-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-8 h-px bg-orange/30" />
                <span className="text-xs sm:text-sm font-mono text-orange/50 tracking-[0.2em] uppercase">Workflow</span>
                <span className="w-8 h-px bg-orange/30" />
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-3">
                Outline first.
              </h2>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-orange/70">
                Script second.
              </p>
            </div>

            <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-xl bg-orange/10 border border-orange/20 items-center justify-center z-10 backdrop-blur-sm">
                <span className="text-base font-bold text-orange">&amp;</span>
              </div>

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
                    <span className="text-[8px] font-mono text-orange/50 tracking-widest uppercase">{col.phase}</span>
                  </div>

                  <div className="relative p-6 sm:p-7">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <col.icon className="w-5 h-5 text-orange" />
                      </div>
                      <h3 className="font-display font-semibold text-lg">{col.title}</h3>
                    </div>

                    <ul className="space-y-2.5 mb-5">
                      {col.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange/30 mt-1.5 shrink-0 ring-2 ring-orange/10 group-hover:bg-orange/60 group-hover:ring-orange/20 transition-all duration-300" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Mockup */}
                    <div className="rounded-xl border border-border/20 bg-foreground/3 p-3 sm:p-4">
                      <WorkflowVisual phase={col.visual} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* TESTIMONIAL */}
        {/* ════════════════════════════════════════════ */}
        <section className="relative py-32 sm:py-40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative border-t border-orange/10 pt-12">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[100px] font-display font-bold text-orange/5 leading-none select-none">
                &ldquo;
              </div>

              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="w-8 h-px bg-orange/20" />
                <span className="text-xs sm:text-sm font-mono text-orange/40 tracking-[0.2em] uppercase">Testimonial</span>
                <span className="w-8 h-px bg-orange/20" />
              </div>

              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-foreground/70 leading-relaxed italic max-w-2xl mx-auto">
                Instead of guessing what works, I can now look at exactly how successful
                channels structure their content and apply those patterns to my own videos.
              </blockquote>

              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-orange">VS</span>
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
        {/* CTA */}
        {/* ════════════════════════════════════════════ */}
        <section className="relative py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl border border-orange/20 bg-gradient-to-br from-orange/[0.04] to-card/40 overflow-hidden group text-center">
              <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-radial from-orange/10 to-transparent blur-[100px] animate-morph-diamond" />
              <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-radial from-orange/8 to-transparent blur-[100px] animate-shimmer-rotate" />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent absolute animate-scan-line" />
              </div>

              <div className="relative px-8 py-16 sm:px-16 sm:py-20">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-7 h-7 text-orange" />
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-3">
                  Ready to start
                </h2>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-orange/70 mb-4">
                  deconstructing?
                </p>
                <p className="text-muted-foreground text-sm max-w-md mx-auto mb-10 leading-relaxed">
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
            <div className="flex items-center justify-center gap-4 text-[8px] font-mono text-orange/20 tracking-widest uppercase">
              <span>VideosScripter</span>
              <span className="w-px h-3 bg-orange/10" />
              <span>Pattern-Based Script Intelligence</span>
              <span className="w-px h-3 bg-orange/10" />
              <span>{new Date().getFullYear()}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
