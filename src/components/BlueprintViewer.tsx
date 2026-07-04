"use client";

import { useState } from "react";
import type { Blueprint } from "@/types";
import {
  ChevronDown,
  ChevronRight,
  Sparkles,
  Film,
  PenLine,
  Hash,
  Target,
} from "lucide-react";

function Section({
  icon: Icon,
  title,
  children,
  defaultOpen = true,
}: {
  icon: any;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="card-base">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
      >
        <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-orange" />
        </div>
        <span className="font-display font-semibold text-sm flex-1 text-left">{title}</span>
        {open ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
      </button>
      {open && <div className="px-4 pb-4 space-y-3">{children}</div>}
    </div>
  );
}

function TextRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="text-sm">
      <span className="text-muted-foreground">{label}: </span>
      <span>{value}</span>
    </div>
  );
}

function TagList({ items, empty }: { items?: string[]; empty?: string }) {
  if (!items || items.length === 0) {
    if (empty) return <span className="text-xs text-muted-foreground italic">{empty}</span>;
    return null;
  }
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item, i) => (
        <span key={i} className="tag-interactive">{item}</span>
      ))}
    </div>
  );
}

export function BlueprintViewer({ blueprint }: { blueprint: Blueprint }) {
  const cs = blueprint?.channel_summary;
  const vs = blueprint?.video_structure;
  const sm = blueprint?.script_methodology;
  const ct = blueprint?.content_themes;
  const ep = blueprint?.engagement_patterns;

  const hasData = cs || vs || sm || ct || ep;

  if (!hasData) {
    return (
      <div className="rounded-xl border border-dashed border-border/50 p-8 text-center text-sm text-muted-foreground">
        Blueprint data incomplete
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {cs && (
        <Section icon={Sparkles} title="Channel Summary">
          <TextRow label="Niche" value={cs.niche} />
          <TextRow label="Style" value={cs.channel_style} />
          <TextRow label="Audience" value={cs.target_audience} />
          <div>
            <span className="text-xs text-muted-foreground block mb-1.5">Content Pillars</span>
            <TagList items={cs.content_pillars} empty="No pillars listed" />
          </div>
        </Section>
      )}

      {vs && (
        <Section icon={Film} title="Video Structure">
          {typeof vs.typical_length_seconds === "number" && (
            <TextRow label="Typical Length" value={`${Math.round(vs.typical_length_seconds / 60)} min`} />
          )}
          <div>
            <span className="text-xs text-muted-foreground block mb-1.5">Hook Patterns</span>
            <TagList items={vs.hook_patterns} />
          </div>
          <div>
            <span className="text-xs text-muted-foreground block mb-1.5">Body Structure</span>
            <TagList items={vs.body_structure} />
          </div>
          <div>
            <span className="text-xs text-muted-foreground block mb-1.5">Outro Patterns</span>
            <TagList items={vs.outro_patterns} />
          </div>
          <TextRow label="Structure Summary" value={vs.typical_structure_summary} />
        </Section>
      )}

      {sm && (
        <Section icon={PenLine} title="Script Methodology">
          <div>
            <span className="text-xs text-muted-foreground block mb-1.5">Opening Formulas</span>
            <TagList items={sm.opening_formulas} />
          </div>
          <div>
            <span className="text-xs text-muted-foreground block mb-1.5">Transition Phrases</span>
            <TagList items={sm.transition_phrases} />
          </div>
          <div>
            <span className="text-xs text-muted-foreground block mb-1.5">CTA Styles</span>
            <TagList items={sm.call_to_action_styles} />
          </div>
          <div>
            <span className="text-xs text-muted-foreground block mb-1.5">Common Phrases</span>
            <TagList items={sm.common_phrases} />
          </div>
          <TextRow label="Storytelling" value={sm.storytelling_approach} />
          <TextRow label="Pace & Rhythm" value={sm.pace_and_rhythm} />
          <TextRow label="Language Style" value={sm.language_style} />
        </Section>
      )}

      {ct && (
        <Section icon={Hash} title="Content Themes">
          <div>
            <span className="text-xs text-muted-foreground block mb-1.5">Recurring Topics</span>
            <TagList items={ct.recurring_topics} />
          </div>
          <div>
            <span className="text-xs text-muted-foreground block mb-1.5">Angle Approaches</span>
            <TagList items={ct.angle_approaches} />
          </div>
          <TextRow label="Seasonal Patterns" value={ct.seasonal_patterns} />
        </Section>
      )}

      {ep && (
        <Section icon={Target} title="Engagement Patterns">
          <div>
            <span className="text-xs text-muted-foreground block mb-1.5">Question Techniques</span>
            <TagList items={ep.question_techniques} />
          </div>
          <div>
            <span className="text-xs text-muted-foreground block mb-1.5">Audience Interaction</span>
            <TagList items={ep.audience_interaction} />
          </div>
          <div>
            <span className="text-xs text-muted-foreground block mb-1.5">Retention Strategies</span>
            <TagList items={ep.retention_strategies} />
          </div>
          <TextRow label="Thumbnail & Title" value={ep.thumbnail_title_patterns} />
        </Section>
      )}
    </div>
  );
}
