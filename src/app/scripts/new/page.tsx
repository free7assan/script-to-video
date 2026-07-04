"use client";

import { Suspense, useEffect, useState, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft, Wand2, Loader2, Clock, Save, Trash2, Copy, Check, Plus,
  ChevronUp, ChevronDown, ListOrdered, Play, FileText, BookOpen, Shield,
} from "lucide-react";
import type { Channel, SavedAnalysis, Script } from "@/types";

interface UsageInfo {
  channels: number;
  channelsLimit: number;
  videos: number;
  videosLimit: number;
  scripts: number;
  scriptsLimit: number;
}

export default function NewScriptPage() {
  return (
    <Suspense fallback={null}>
      <NewScriptForm />
    </Suspense>
  );
}

function NewScriptForm() {
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");

  const [channels, setChannels] = useState<Channel[]>([]);
  const [savedAnalyses, setSavedAnalyses] = useState<SavedAnalysis[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(10);
  const [script, setScript] = useState<any>(null);
  const [bodyText, setBodyText] = useState("");
  const [generatingHeadings, setGeneratingHeadings] = useState(false);
  const [generatingScript, setGeneratingScript] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [userSources, setUserSources] = useState<{ title: string; url: string }[]>([]);
  const [sourceVideos, setSourceVideos] = useState<{ title: string; url: string }[]>([]);

  const [phase, setPhase] = useState<"form" | "headings" | "script">("form");
  const [headings, setHeadings] = useState<{ heading: string; estimated_duration_seconds: number }[]>([]);
  const [scriptType, setScriptType] = useState<"blueprint" | "standard">("blueprint");
  const [includeVisuals, setIncludeVisuals] = useState(false);
  const [usage, setUsage] = useState<UsageInfo | null>(null);
  const scriptAbortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    fetch("/api/blueprints")
      .then((r) => r.json())
      .then(setChannels)
      .catch(() => {});
    fetch("/api/video/analyses")
      .then((r) => r.json())
      .then((data) => setSavedAnalyses(data.analyses || []))
      .catch(() => {});
    fetch("/api/usage")
      .then((r) => r.json())
      .then(setUsage)
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!editId) return;
    fetch(`/api/scripts`)
      .then((r) => r.json())
      .then((scripts: Script[]) => {
        const entry = scripts.find((e: any) => String(e.id) === editId);
        if (!entry) return;
        setDescription(entry.description);
        setDuration(entry.duration_minutes);
        setScript(entry.script_content);
        setBodyText(buildBody(entry.script_content));
        if (entry.script_content?.sections) {
          setHeadings(entry.script_content.sections.map((s: any) => ({
            heading: s.heading,
            estimated_duration_seconds: s.estimated_duration_seconds || 0,
          })));
          setPhase("script");
        }
        if (entry.channel_id) {
          setSelectedId(entry.channel_id);
        }
      })
      .catch(() => {});
  }, [editId]);

  const generateHeadings = async () => {
    if (!description.trim()) return;
    if (scriptType === "blueprint" && !selectedId) return;
    scriptAbortRef.current?.abort();
    scriptAbortRef.current = null;
    setGeneratingScript(false);
    setScript(null);
    setBodyText("");
    setSaved(false);
    setSourceVideos([]);
    setHeadings([]);
    setPhase("form");
    setGeneratingHeadings(true);
    setError("");

    const isVideoAnalysis = scriptType === "blueprint" && selectedAnalysis;
    const body: Record<string, unknown> = {
      description,
      duration_minutes: duration,
      sources: userSources.filter((s) => s.url.trim()),
      mode: "headings",
      include_visuals: includeVisuals,
    };
    if (scriptType === "blueprint" && selectedId && !isVideoAnalysis) {
      body.channel_id = selectedId;
    }
    if (isVideoAnalysis) {
      body.saved_analysis_id = selectedId;
    }

    try {
      const res = await fetch("/api/scripts/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setHeadings(data.headings || []);
        setSourceVideos(data.sourceVideos || []);
        setPhase("headings");
      }
    } catch {
      setError("Failed to generate headings");
    } finally {
      setGeneratingHeadings(false);
    }
  };

  const generateFullScript = async () => {
    if (headings.length === 0) return;
    const controller = new AbortController();
    scriptAbortRef.current = controller;
    setGeneratingScript(true);
    setError("");
    setScript(null);

    try {
      const isVideoAnalysis = scriptType === "blueprint" && selectedAnalysis;
      const body: Record<string, unknown> = {
        description,
        duration_minutes: duration,
        sources: userSources.filter((s) => s.url.trim()),
        include_visuals: includeVisuals,
        headings: headings.map((h) => ({ heading: h.heading, estimated_duration_seconds: h.estimated_duration_seconds })),
      };
      if (scriptType === "blueprint" && selectedId && !isVideoAnalysis) {
        body.channel_id = selectedId;
      }
      if (isVideoAnalysis) {
        body.saved_analysis_id = selectedId;
      }
      const res = await fetch("/api/scripts/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setScript(data.script);
        setSourceVideos(data.sourceVideos || []);
        setBodyText(buildBody(data.script));
        setPhase("script");
      }
    } catch (err: any) {
      if (err?.name === "AbortError") return;
      setError("Failed to generate script");
    } finally {
      if (scriptAbortRef.current === controller) {
        scriptAbortRef.current = null;
      }
      setGeneratingScript(false);
    }
  };

  const formatDuration = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${String(sec).padStart(2, "0")}`;
  };

  const sectionSum = (script?.sections || []).reduce(
    (sum: number, s: any) => sum + (s.estimated_duration_seconds || 0),
    0
  );
  const actualDuration = sectionSum || script?.estimated_total_duration_seconds || 0;

  const selectedChannel = channels.find((c) => c.id === selectedId);
  const selectedBlueprint = selectedChannel?.blueprint;
  const channelName = selectedChannel?.name || "";
  const selectedAnalysis = savedAnalyses.find((a) => a.id === selectedId);

  const buildBody = (s: any) => {
    if (!s) return "";
    const parts: string[] = [];
    if (s.hook) parts.push(`## Hook\n\n${s.hook}`);
    s.sections?.forEach((sec: any) => {
      parts.push(`## ${sec.heading}\n\n${sec.content}`);
    });
    if (s.call_to_action) parts.push(`## Call to Action\n\n${s.call_to_action}`);
    return parts.join("\n\n");
  };

  const updateBody = (text: string) => {
    setBodyText(text);
    setScript((prev: any) => {
      const next = JSON.parse(JSON.stringify(prev));
      const lines = text.split("\n");
      const sections: { heading: string; content: string; estimated_duration_seconds?: number }[] = [];
      let hook = "";
      let cta = "";
      let currentHeading = "";
      let currentContent: string[] = [];

      const flush = () => {
        if (!currentHeading) return;
        const content = currentContent.join("\n").trim();
        if (currentHeading === "Hook") hook = content;
        else if (currentHeading === "Call to Action") cta = content;
        else sections.push({ heading: currentHeading, content, estimated_duration_seconds: next.sections?.find((s: any) => s.heading === currentHeading)?.estimated_duration_seconds });
        currentHeading = "";
        currentContent = [];
      };

      for (const line of lines) {
        const hMatch = line.match(/^##\s+(.+)/);
        if (hMatch) {
          flush();
          currentHeading = hMatch[1].trim();
        } else {
          currentContent.push(line);
        }
      }
      flush();

      next.hook = hook;
      next.call_to_action = cta;
      next.sections = sections;
      return next;
    });
    setSaved(false);
  };

  const save = async () => {
    const isVideoAnalysis = scriptType === "blueprint" && selectedAnalysis;
    const body = {
      channel_id: scriptType === "blueprint" && !isVideoAnalysis ? selectedId || null : null,
      title: script?.title || "",
      description,
      duration_minutes: duration,
      script_content: script,
      mode: "full",
    };

    setError("");

    const res = editId
      ? await fetch(`/api/scripts/${editId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
      : await fetch("/api/scripts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: "Save failed" }));
      setError(err.error || "Save failed");
      return;
    }

    setSaved(true);
  };

  const resetAll = () => {
    setScript(null);
    setBodyText("");
    setDescription("");
    setUserSources([]);
    setHeadings([]);
    setPhase("form");
    setError("");
    setSaved(false);
    setSourceVideos([]);
    setScriptType("blueprint");
  };

  const copyAll = useCallback(async () => {
    const text = `# ${script.title}\n\n${bodyText}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [script, bodyText]);

  const moveHeading = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= headings.length) return;
    const updated = [...headings];
    [updated[i], updated[j]] = [updated[j], updated[i]];
    setHeadings(updated);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in">
      <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/60 hover:text-foreground transition-colors w-fit">
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Dashboard
      </Link>

      <div className="grid grid-cols-1 gap-6">
        {/* Column 1 - Form */}
        <div className="space-y-4">
          {/* Describe Your Video */}
          <div className="rounded-xl border border-border/50 bg-card/50">
            <div className="p-4 border-b border-border/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
                  <Wand2 className="w-4 h-4 text-orange" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm">Script Generator</h3>
                  <p className="text-xs text-muted-foreground">Generate a video script using a channel blueprint or a proven standard framework</p>
                </div>
              </div>
            </div>
            <div className="p-4">

            {usage && usage.scripts >= usage.scriptsLimit && (
              <div className="mb-4 p-3 rounded-xl border border-orange/20 bg-orange/5 text-sm text-muted-foreground flex items-center gap-2">
                <Shield className="w-4 h-4 text-orange shrink-0" />
                <span>Free plan limit reached. <Link href="/pricing" className="text-orange hover:underline">Upgrade</Link> to create more scripts.</span>
              </div>
            )}

            {/* Script Type Toggle */}
            <div className="flex gap-1.5 mb-4 p-1 rounded-xl bg-black/5 dark:bg-white/[0.04]">
              <button
                type="button"
                onClick={() => setScriptType("blueprint")}
                className={`flex-1 h-8 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                  scriptType === "blueprint"
                    ? "bg-card shadow-sm text-foreground font-semibold"
                    : "text-muted-foreground/70 hover:text-foreground"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Blueprint
              </button>
              <button
                type="button"
                onClick={() => setScriptType("standard")}
                className={`flex-1 h-8 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                  scriptType === "standard"
                    ? "bg-card shadow-sm text-foreground font-semibold"
                    : "text-muted-foreground/70 hover:text-foreground"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Standard
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">What&apos;s your video about?</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your video idea..."
                  className="input-base min-h-[100px] resize-y"
                />
              </div>

              {scriptType === "blueprint" && (
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Blueprint</label>
                  <select
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                    className="input-base h-9"
                  >
                    <option value="">Select a blueprint...</option>
                    {channels.length > 0 && (
                      <optgroup label="Channel Blueprints">
                        {channels.map((c) => (
                          <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                      </optgroup>
                    )}
                    {savedAnalyses.length > 0 && (
                      <optgroup label="Video Analyses">
                        {savedAnalyses.map((a) => (
                          <option key={a.id} value={a.id}>{a.video_title || a.youtube_url}</option>
                        ))}
                      </optgroup>
                    )}
                  </select>
                  {selectedBlueprint && (
                    <div className="text-xs text-muted-foreground space-y-1 p-2.5 rounded-lg bg-black/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/[0.06] mt-2">
                      <p><span className="font-medium text-foreground/70">Niche:</span> {selectedBlueprint.channel_summary?.niche}</p>
                      <p><span className="font-medium text-foreground/70">Style:</span> {selectedBlueprint.channel_summary?.channel_style}</p>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {(selectedBlueprint.channel_summary?.content_pillars || []).slice(0, 3).map((p, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/[0.04] border border-black/5 dark:border-white/[0.06]">{p}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedAnalysis && (
                    <div className="text-xs text-muted-foreground space-y-1 p-2.5 rounded-lg bg-black/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/[0.06] mt-2">
                      <p><span className="font-medium text-foreground/70">Hook Style:</span> {selectedAnalysis.analysis_data?.hook_style}</p>
                      <p><span className="font-medium text-foreground/70">Tone:</span> {selectedAnalysis.analysis_data?.tone}</p>
                      <p><span className="font-medium text-foreground/70">Summary:</span> {selectedAnalysis.analysis_data?.summary}</p>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {(selectedAnalysis.analysis_data?.key_techniques || []).slice(0, 3).map((t, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/[0.04] border border-black/5 dark:border-white/[0.06]">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
            </div>
          )}

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Target Duration</label>
                <div className="flex gap-1.5 p-1 rounded-xl bg-black/5 dark:bg-white/[0.04]">
                  {[5, 10, 15, 20].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setDuration(m)}
                      className={`flex-1 h-8 rounded-lg text-xs font-medium transition-all ${
                        duration === m
                          ? "bg-card shadow-sm text-foreground font-semibold"
                          : "text-muted-foreground/70 hover:text-foreground"
                      }`}
                    >
                      {m} min
                    </button>
                  ))}
                </div>
              </div>

              {/* Visual Descriptions Toggle */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-border/30 bg-black/5 dark:bg-white/[0.02] group hover:border-border/50 transition-colors">
                <div className="space-y-0.5">
                  <label className="text-xs font-medium text-foreground/80">Visual Descriptions</label>
                  <p className="text-[11px] text-muted-foreground/60">Include scene-by-scene visual cues in the script body</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={includeVisuals}
                  onClick={() => setIncludeVisuals((v) => !v)}
                  className={`relative h-6 w-11 rounded-full transition-all shrink-0 ring-1 ring-inset ${
                    includeVisuals
                      ? "bg-orange ring-orange/30"
                      : "bg-black/10 dark:bg-white/[0.08] ring-black/10 dark:ring-white/[0.08]"
                  }`}
                >
                  <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all ${
                    includeVisuals ? "translate-x-5" : "translate-x-0"
                  }`} />
                </button>
              </div>

              {/* Reference Sources */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">Reference Sources</label>
                  <button
                    onClick={() => setUserSources((prev) => [...prev, { title: "", url: "" }])}
                    className="inline-flex items-center gap-1 text-[11px] text-muted-foreground/60 hover:text-foreground transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                    Add
                  </button>
                </div>
                {userSources.length === 0 && (
                  <p className="text-xs text-muted-foreground/50 italic">Add URLs to use as reference material</p>
                )}
                {userSources.map((src, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="flex-1 space-y-1">
                      <input
                        value={src.title}
                        onChange={(e) => {
                          const updated = [...userSources];
                          updated[i] = { ...updated[i], title: e.target.value };
                          setUserSources(updated);
                        }}
                        placeholder="Title (optional)"
                        className="input-base h-8"
                      />
                      <input
                        value={src.url}
                        onChange={(e) => {
                          const updated = [...userSources];
                          updated[i] = { ...updated[i], url: e.target.value };
                          setUserSources(updated);
                        }}
                        placeholder="https://..."
                        className="input-base h-8"
                      />
                    </div>
                    <button
                      onClick={() => setUserSources((prev) => prev.filter((_, j) => j !== i))}
                      className="h-8 w-8 rounded-lg flex items-center justify-center text-red-400/60 hover:text-red-400 hover:bg-red-500/10 transition-colors shrink-0"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={generateHeadings}
                disabled={
                  (scriptType === "blueprint" && !selectedId && !selectedAnalysis) ||
                  (scriptType === "blueprint" && !description.trim()) ||
                  (scriptType === "standard" && !description.trim()) ||
                  generatingHeadings
                }
                className="inline-flex items-center justify-center gap-2 w-full h-11 px-5 rounded-xl bg-orange text-black text-sm font-semibold hover:bg-orange/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm shadow-orange/20 active:scale-[0.98]"
              >
                {generatingHeadings ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Wand2 className="w-4 h-4" />
                )}
                {generatingHeadings ? "Generating..." : "Generate Structure"}
              </button>

              {error && <p className="text-sm text-red-400">{error}</p>}
                </div>
              </div>
              </div>
            </div>
        </div>

        {/* Column 2 - Results */}
        <div className="space-y-4">
          <div className="rounded-xl border border-border/50 bg-card/50">
                <div className="p-4 border-b border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
                      <ListOrdered className="w-4 h-4 text-orange" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-sm">Script Structure</h3>
                        <p className="text-xs text-muted-foreground">{headings.length} sections &middot; {duration} min total</p>
                      </div>
                    </div>
                  </div>
                <div className="p-4">
                {headings.length === 0 ? (
                  <div className="py-12 text-center">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange/10 to-prussian-blue/10 flex items-center justify-center mx-auto mb-3">
                      <ListOrdered className="w-5 h-5 text-muted-foreground/40" />
                    </div>
                    <p className="text-sm text-muted-foreground/50">No structure yet</p>
                    <p className="text-xs text-muted-foreground/40 mt-1">Fill in the details on the left and click Generate Structure</p>
                  </div>
                ) : (
                <>
                <div className="space-y-2">
                  {headings.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-xl border border-border/30 bg-black/5 dark:bg-white/[0.02] group hover:border-border/50 transition-colors">
                      <div className="flex flex-col gap-0.5">
                        <button
                          onClick={() => moveHeading(i, -1)}
                          disabled={i === 0}
                          className="h-3.5 w-3.5 flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30"
                        >
                          <ChevronUp className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => moveHeading(i, 1)}
                          disabled={i === headings.length - 1}
                          className="h-3.5 w-3.5 flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30"
                        >
                          <ChevronDown className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono w-5 shrink-0 text-center">{i + 1}.</span>
                      <input
                        value={h.heading}
                        onChange={(e) => {
                          const updated = [...headings];
                          updated[i] = { ...updated[i], heading: e.target.value };
                          setHeadings(updated);
                        }}
                        className="input-base h-8 flex-1"
                      />
                      <input
                        type="number"
                        value={h.estimated_duration_seconds}
                        onChange={(e) => {
                          const updated = [...headings];
                          updated[i] = { ...updated[i], estimated_duration_seconds: parseInt(e.target.value) || 0 };
                          setHeadings(updated);
                        }}
                        className="input-base w-14 h-8 text-xs text-center"
                        title="Duration in seconds"
                      />
                      <button
                        onClick={() => setHeadings((prev) => prev.filter((_, j) => j !== i))}
                        className="h-7 w-7 rounded-lg flex items-center justify-center text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/10"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setHeadings((prev) => [...prev, { heading: "", estimated_duration_seconds: 0 }])}
                  className="w-full mt-2 h-8 rounded-lg border border-dashed border-border/30 text-[11px] text-muted-foreground/60 hover:text-foreground hover:border-border/50 transition-all flex items-center justify-center gap-1"
                >
                  <Plus className="w-3 h-3" />
                  Add Section
                </button>

                <div className="h-px bg-border/30 my-4" />

                <div className="flex gap-2">
                  <button
                    onClick={generateFullScript}
                    disabled={headings.length === 0 || generatingScript}
                    className="flex-1 h-9 rounded-xl bg-orange text-black text-xs font-semibold hover:bg-orange/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 shadow-sm shadow-orange/20 active:scale-[0.98]"
                  >
                    {generatingScript ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Wand2 className="w-4 h-4" />
                    )}
                    {generatingScript ? "Generating..." : "Generate Full Script"}
                  </button>
                </div>
                </>
              )}
              </div>
            </div>

          <div className="rounded-xl border border-border/50 bg-card/50">
              <div className="p-4 border-b border-border/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-sm">Generated Script</h3>
                    {script ? (
                      <p className="text-xs text-muted-foreground">
                        {script?.title || "Untitled"}
                        {actualDuration > 0 && (
                          <span className="ml-2 text-muted-foreground/60">
                            &middot; {formatDuration(actualDuration)}
                            {Math.abs(actualDuration - duration * 60) > 30 && (
                              <span className="text-orange/80 ml-1">off by {formatDuration(Math.abs(actualDuration - duration * 60))}</span>
                            )}
                          </span>
                        )}
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground">Generate a script to see it here</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-4">
              {!script ? (
                <div className="py-12 text-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange/10 to-prussian-blue/10 flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-5 h-5 text-muted-foreground/40" />
                  </div>
                  <p className="text-sm text-muted-foreground/50">No script yet</p>
                  <p className="text-xs text-muted-foreground/40 mt-1">Click Generate Full Script above to create one</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="space-y-1">
                  <label className="text-[11px] font-medium text-muted-foreground">Title</label>
                  <input
                    value={script.title || ""}
                    onChange={(e) => {
                      setScript((prev: any) => ({ ...prev, title: e.target.value }));
                      setSaved(false);
                    }}
                    className="input-base h-9 font-semibold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-muted-foreground">
                    Script Body
                    <span className="font-normal ml-2">(use ## headings for sections, Hook, and CTA)</span>
                  </label>
                  <div className="flex border border-border/50 rounded-lg overflow-hidden bg-background">
                    <div className="select-none text-right px-2 py-2 text-xs leading-relaxed text-muted-foreground/30 font-mono border-r border-border/20 bg-black/[0.02] dark:bg-white/[0.02] min-w-[2.5rem]">
                      {Array.from({ length: bodyText.split("\n").length }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                    <textarea
                      value={bodyText}
                      onChange={(e) => updateBody(e.target.value)}
                      rows={18}
                      className="flex-1 bg-transparent font-mono text-sm leading-relaxed resize-y min-h-[120px] p-2 outline-none"
                    />
                  </div>
                  {includeVisuals && (bodyText.match(/\[VISUAL:/g) || []).length > 0 && (
                    <div className="flex items-center gap-1.5 text-[11px] text-orange/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange/60" />
                      {(bodyText.match(/\[VISUAL:/g) || []).length} visual cue{(bodyText.match(/\[VISUAL:/g) || []).length !== 1 ? "s" : ""} embedded
                    </div>
                  )}
                </div>

                {script.transition_notes && (
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-muted-foreground">Transitions</label>
                    <textarea
                      value={script.transition_notes}
                      onChange={(e) => {
                        setScript((prev: any) => ({ ...prev, transition_notes: e.target.value }));
                        setSaved(false);
                      }}
                      rows={2}
                      className="input-base resize-y min-h-[80px]"
                    />
                  </div>
                )}

                {script.tone_notes && (
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-muted-foreground">Tone Notes</label>
                    <textarea
                      value={script.tone_notes}
                      onChange={(e) => {
                        setScript((prev: any) => ({ ...prev, tone_notes: e.target.value }));
                        setSaved(false);
                      }}
                      rows={2}
                      className="input-base resize-y min-h-[80px]"
                    />
                  </div>
                )}

                {script.thumbnail_title_options && (
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-muted-foreground">Thumbnail Text Options</label>
                    {script.thumbnail_title_options.map((opt: string, i: number) => (
                      <input
                        key={i}
                        value={opt}
                        onChange={(e) => {
                          const updated = [...script.thumbnail_title_options];
                          updated[i] = e.target.value;
                          setScript((prev: any) => ({ ...prev, thumbnail_title_options: updated }));
                          setSaved(false);
                        }}
                        className="input-base h-8"
                      />
                    ))}
                  </div>
                )}

                <div className="h-px bg-border/30 my-2" />

                <div className="flex gap-2">
                  <button onClick={save} disabled={saved} className="flex-1 h-9 rounded-xl bg-orange text-black text-xs font-semibold hover:bg-orange/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 shadow-sm shadow-orange/20 active:scale-[0.98]">
                    {saved ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
                    {saved ? "Saved" : "Save"}
                  </button>
                  <button onClick={copyAll} className="flex-1 h-9 rounded-xl border border-border/40 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-border hover:bg-black/5 dark:hover:bg-white/[0.04] transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]">
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                  <button onClick={resetAll} className="flex-1 h-9 rounded-xl border border-red-500/15 text-xs font-medium text-red-400 hover:bg-red-500/10 hover:border-red-500/30 transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]">
                    <Trash2 className="w-3.5 h-3.5" />
                    Reset
                  </button>
                </div>
              </div>
              )}
              </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/50">
              <div className="p-4 border-b border-border/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm">Source Pages</h3>
                    <p className="text-xs text-muted-foreground">
                      {sourceVideos.length > 0
                        ? `${sourceVideos.length} source${sourceVideos.length > 1 ? "s" : ""} used`
                        : "No sources fetched from search yet"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                {(() => {
                  const refs = sourceVideos;
                  if (refs.length === 0) {
                    return (
                      <div className="py-8 text-center">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange/10 to-prussian-blue/10 flex items-center justify-center mx-auto mb-3">
                          <BookOpen className="w-5 h-5 text-muted-foreground/40" />
                        </div>
                        <p className="text-sm text-muted-foreground/50">No sources listed</p>
                        <p className="text-xs text-muted-foreground/40 mt-1">Generate a script to fetch relevant sources</p>
                      </div>
                    );
                  }
                  return (
                    <div className="space-y-1">
                      {refs.map((v, i) => (
                        <a
                          key={i}
                          href={v.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors truncate py-0.5 group"
                        >
                          <BookOpen className="w-3 h-3 shrink-0 text-orange" />
                          <span className="truncate">{v.title || v.url}</span>
                        </a>
                      ))}
                    </div>
                  );
                })()}
              </div>
          </div>
        </div>
      </div>
  );
}
