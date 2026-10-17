"use client";

import { useState } from "react";
import { Search, Layers, Wand2, type LucideIcon } from "lucide-react";
import { PipelineVisual } from "@/components/PipelineVisual";

type Step = "ingest" | "analyze" | "generate";

interface TabData {
  id: Step;
  index: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  body: string;
  bullets: string[];
  tags: string[];
}

const TABS: TabData[] = [
  {
    id: "ingest",
    index: "01",
    label: "Ingest",
    icon: Search,
    headline: "Point it at a channel.",
    body: "Drop a YouTube channel URL. The engine pulls the full video roster and every transcript, automatically, in one pass.",
    bullets: [
      "Whole-catalog fetch, not one video at a time",
      "Transcripts captured with metadata and publish dates",
      "Multi-language channels handled without setup",
    ],
    tags: ["Transcripts", "Metadata", "History"],
  },
  {
    id: "analyze",
    index: "02",
    label: "Analyze",
    icon: Layers,
    headline: "Extract the structural DNA.",
    body: "Across the catalog, the engine maps how the channel actually writes: the hooks it opens with and the patterns it repeats.",
    bullets: [
      "Hook formulas and cold-open tactics",
      "Structural archetypes and pacing curves",
      "Transition playbooks and CTA strategy",
    ],
    tags: ["Patterns", "Structure", "DNA"],
  },
  {
    id: "generate",
    index: "03",
    label: "Generate",
    icon: Wand2,
    headline: "Write with the blueprint.",
    body: "Give it your idea. Get a section outline first, refine it, then expand into a full script that follows the patterns that work.",
    bullets: [
      "Outline-first flow you can reorder and edit",
      "Full draft expanded section by section",
      "Export as clean, editable markdown",
    ],
    tags: ["Outline", "Full Script", "Editable"],
  },
];

export function FeatureTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
      {/* ── Tab list ── */}
      <div
        role="tablist"
        aria-label="How GoScript works"
        aria-orientation="vertical"
        className="lg:col-span-5 flex flex-col gap-2"
      >
        {TABS.map((t, i) => {
          const selected = i === active;
          return (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`panel-${t.id}`}
              onClick={() => setActive(i)}
              className={`group relative text-left rounded-2xl border p-5 sm:p-6 transition-all duration-200 ${
                selected
                  ? "border-orange/30 bg-gradient-to-br from-orange/[0.07] to-transparent"
                  : "border-border/30 bg-card/30 hover:border-border/60 hover:bg-card/50"
              }`}
            >
              <span
                aria-hidden
                className={`absolute left-0 top-5 bottom-5 w-0.5 rounded-full bg-orange transition-all duration-300 ${
                  selected ? "opacity-100 scale-y-100" : "opacity-0 scale-y-50"
                }`}
              />
              <div className="flex items-start gap-4">
                <span
                  className={`font-mono text-[11px] tracking-widest pt-1 transition-colors ${
                    selected ? "text-orange" : "text-muted-foreground/50"
                  }`}
                >
                  {t.index}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <t.icon
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        selected ? "text-orange" : "text-muted-foreground/60"
                      }`}
                    />
                    <h3 className="font-display font-semibold text-base tracking-tight">
                      {t.label}
                    </h3>
                  </div>
                  <p
                    className={`text-sm leading-relaxed transition-colors ${
                      selected
                        ? "text-foreground/80"
                        : "text-muted-foreground/70"
                    }`}
                  >
                    {t.headline}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Panel ── */}
      <div className="lg:col-span-7">
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className="animate-in relative rounded-2xl border border-border/40 bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-sm overflow-hidden h-full"
        >
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-radial from-orange/10 to-transparent blur-3xl pointer-events-none"
          />
          <div className="relative p-6 sm:p-8 flex flex-col h-full">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-orange/70">
                  Step {tab.index}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-end">
                {tab.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 rounded-full border border-border/25 bg-black/[0.03] dark:bg-white/[0.03] text-muted-foreground/60 font-mono tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border/25 bg-background/40 overflow-hidden mb-6">
              <PipelineVisual step={tab.id} />
            </div>

            <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed mb-5">
              {tab.body}
            </p>

            <ul className="mt-auto space-y-2.5">
              {tab.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm text-foreground/75"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange/40 mt-1.5 shrink-0 ring-2 ring-orange/10" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
