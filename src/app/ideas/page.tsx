"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  Lightbulb,
  Sparkles,
  RefreshCw,
  Clock,
  ArrowRight,
  Target,
  Loader2,
  Library,
  Bookmark,
  Trash2,
} from "lucide-react";

interface Idea {
  title: string;
  description: string;
  topic: string;
  hook_approach: string;
  estimated_duration_minutes: number;
  reasoning: string;
  channel_id: string;
  channel_name: string;
  outline?: string[];
  key_points?: string[];
  target_keywords?: string[];
  thumbnail_concept?: string;
  sources_to_reference?: string[];
}

interface Topic {
  topic: string;
  channels: { id: string; name: string }[];
}

interface SavedIdea {
  id: string;
  title: string;
  description: string;
  topic: string;
  hook_approach: string;
  estimated_duration_minutes: number;
  reasoning: string;
  channel_name: string;
  channel_id: string;
  created_at: string;
  outline?: string[];
  key_points?: string[];
  target_keywords?: string[];
  thumbnail_concept?: string;
  sources_to_reference?: string[];
}

export default function IdeasPage() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [topicsLoading, setTopicsLoading] = useState(true);
  const [ideasByTopic, setIdeasByTopic] = useState<Record<string, Idea[]>>({});
  const [generatingTopics, setGeneratingTopics] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [savingMap, setSavingMap] = useState<Record<string, boolean>>({});
  const [savedIdeas, setSavedIdeas] = useState<SavedIdea[]>([]);
  const [showSaved, setShowSaved] = useState(false);
  const [manualTopics, setManualTopics] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("goscript_manual_topics");
        return stored ? JSON.parse(stored) : [];
      } catch {}
    }
    return [];
  });
  const [newTopicInput, setNewTopicInput] = useState("");
  const generatedTitlesRef = useRef<Set<string>>(new Set());

  const ideaKey = (idea: Idea) => `${idea.title}|${idea.topic}|${idea.channel_name}`;

  const refreshSaved = useCallback(async () => {
    try {
      const res = await fetch("/api/ideas/saved");
      const data = await res.json();
      if (res.ok) {
        const list: SavedIdea[] = data.saved || [];
        setSavedIdeas(list);
        setSavedIds(new Set(list.map((s) => `${s.title}|${s.topic}|${s.channel_name}`)));
      }
    } catch {}
  }, []);

  const fetchTopics = useCallback(async () => {
    setTopicsLoading(true);
    setError(null);
    try {
      const [topicsRes, savedRes] = await Promise.all([
        fetch("/api/ideas/topics"),
        fetch("/api/ideas/saved"),
      ]);
      const topicsData = await topicsRes.json();
      if (topicsRes.ok) {
        setTopics(topicsData.topics || []);
      } else {
        setError(topicsData.error || "Failed to load topics");
      }
      const savedData = await savedRes.json();
      if (savedRes.ok) {
        const list: SavedIdea[] = savedData.saved || [];
        setSavedIdeas(list);
        const keys = list.map(
          (s: SavedIdea) => `${s.title}|${s.topic}|${s.channel_name}`
        );
        setSavedIds(new Set(keys));
      }
    } catch {
      setError("Network error");
    } finally {
      setTopicsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTopics();
  }, [fetchTopics]);

  // Persist manual topics to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("goscript_manual_topics", JSON.stringify(manualTopics));
    } catch {}
  }, [manualTopics]);

  // Seed generated titles ref from existing ideas on load
  useEffect(() => {
    for (const ideas of Object.values(ideasByTopic)) {
      for (const idea of ideas) {
        generatedTitlesRef.current.add(idea.title.toLowerCase().trim());
      }
    }
  }, [ideasByTopic]);

  const generateForTopic = async (topic: string) => {
    setGeneratingTopics((prev) => new Set(prev).add(topic));
    setError(null);
    try {
      const exclude = [...generatedTitlesRef.current];
      const isManual = manualTopics.includes(topic);
      const res = await fetch("/api/ideas/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          isManual ? { exclude_titles: exclude, manual_topic: topic } : { exclude_titles: exclude }
        ),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to generate ideas");
        return;
      }
      const filtered = (data.ideas || []).filter(
        (idea: Idea) => idea.topic === topic
      );
      filtered.forEach((idea: Idea) => generatedTitlesRef.current.add(idea.title.toLowerCase().trim()));
      setIdeasByTopic((prev) => ({ ...prev, [topic]: filtered }));
    } catch {
      setError("Network error — try again");
    } finally {
      setGeneratingTopics((prev) => {
        const next = new Set(prev);
        next.delete(topic);
        return next;
      });
    }
  };

  const saveIdea = async (idea: Idea) => {
    const key = ideaKey(idea);
    setSavingMap((prev) => ({ ...prev, [key]: true }));
    setError(null);
    try {
      const res = await fetch("/api/ideas/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: idea.title,
          description: idea.description,
          topic: idea.topic,
          hook_approach: idea.hook_approach,
          estimated_duration_minutes: idea.estimated_duration_minutes,
          reasoning: idea.reasoning,
          channel_name: idea.channel_name,
          channel_id: idea.channel_id,
          outline: idea.outline,
          key_points: idea.key_points,
          target_keywords: idea.target_keywords,
          thumbnail_concept: idea.thumbnail_concept,
          sources_to_reference: idea.sources_to_reference,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to save idea");
      } else {
        await refreshSaved();
      }
    } catch {
      setError("Network error — could not save");
    }
    setSavingMap((prev) => ({ ...prev, [key]: false }));
  };

  const unsaveIdea = async (idea: Idea) => {
    const key = ideaKey(idea);
    setSavingMap((prev) => ({ ...prev, [key]: true }));
    setError(null);
    try {
      const savedRes = await fetch("/api/ideas/saved");
      const data = await savedRes.json();
      if (savedRes.ok) {
        const match = (data.saved || []).find(
          (s: SavedIdea) =>
            s.title === idea.title &&
            s.topic === idea.topic &&
            s.channel_name === idea.channel_name
        );
        if (match) {
          const delRes = await fetch(`/api/ideas/saved/${match.id}`, { method: "DELETE" });
          if (!delRes.ok) {
            const delData = await delRes.json();
            setError(delData.error || "Failed to remove saved idea");
          } else {
            await refreshSaved();
          }
        }
      }
    } catch {
      setError("Network error — could not unsave");
    }
    setSavingMap((prev) => ({ ...prev, [key]: false }));
  };



  return (
    <div className="max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-orange/10 flex items-center justify-center">
              <Lightbulb className="w-4.5 h-4.5 text-orange" />
            </div>
            <h1 className="text-xl font-display font-semibold">Video Ideas</h1>
          </div>
          <p className="text-sm text-muted-foreground ml-12">
            Topic blocks extracted from your channel blueprints. Generate ideas per block.
          </p>
        </div>
        <button
          onClick={fetchTopics}
          disabled={topicsLoading}
          className="h-9 w-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all disabled:opacity-50 shrink-0"
          title="Refresh topics"
        >
          <RefreshCw className={`w-4 h-4 ${topicsLoading ? "animate-spin" : ""}`} />
        </button>
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-400 mb-8">
          {error}
        </div>
      )}

      {/* Add manual topic */}
      <div className="flex items-center gap-2 mb-8">
        <input
          value={newTopicInput}
          onChange={(e) => setNewTopicInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && newTopicInput.trim()) {
              setManualTopics((prev) =>
                prev.includes(newTopicInput.trim()) ? prev : [...prev, newTopicInput.trim()]
              );
              setNewTopicInput("");
            }
          }}
          placeholder="Add a custom topic..."
          className="flex-1 h-9 px-3 rounded-lg bg-card/30 border border-border/30 text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-orange/40 transition-all"
        />
        <button
          onClick={() => {
            if (newTopicInput.trim()) {
              setManualTopics((prev) =>
                prev.includes(newTopicInput.trim()) ? prev : [...prev, newTopicInput.trim()]
              );
              setNewTopicInput("");
            }
          }}
          disabled={!newTopicInput.trim()}
          className="h-9 px-4 rounded-lg bg-orange/10 text-orange text-sm font-semibold hover:bg-orange/20 disabled:opacity-30 transition-all shrink-0"
        >
          Add Topic
        </button>
      </div>

      {/* Saved ideas toggle */}
      {!topicsLoading && savedIdeas.length > 0 && (
        <div className="mb-8">
          <button
            onClick={() => setShowSaved(!showSaved)}
            className="flex items-center gap-2 text-left"
          >
            <Bookmark className={`w-4 h-4 text-orange transition-all ${showSaved ? "fill-orange" : ""}`} />
            <h2 className="text-sm font-display font-semibold">Saved Ideas</h2>
            <span className="text-xs text-muted-foreground/50">{savedIdeas.length}</span>
            <svg
              className={`w-3.5 h-3.5 text-muted-foreground/40 transition-transform ${showSaved ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showSaved && (
          <div className="grid sm:grid-cols-1 gap-3 mt-4">
            {savedIdeas.map((saved) => (
              <div
                key={saved.id}
                className="rounded-xl border border-border/30 bg-card/40 p-4 hover:border-orange/20 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Bookmark className="w-3.5 h-3.5 text-orange fill-orange" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange/5 text-orange/60 font-mono">
                        {saved.topic}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold leading-snug">{saved.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                      {saved.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full bg-orange/5 border border-orange/10 text-orange/70">
                    <Clock className="w-2 h-2" />
                    {saved.estimated_duration_minutes} min
                  </span>
                  <span className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full bg-foreground/5 border border-border/20 text-muted-foreground/60">
                    {saved.hook_approach}
                  </span>
                </div>

                <p className="text-[11px] text-muted-foreground/40 leading-relaxed italic mb-3">
                  {saved.reasoning}
                </p>

                {saved.outline && saved.outline.length > 0 && (
                  <div className="mb-3">
                    <p className="text-[8px] text-muted-foreground/40 font-semibold uppercase tracking-wider mb-1">Outline</p>
                    <div className="space-y-0.5">
                      {saved.outline.map((item, i) => (
                        <p key={i} className="text-[10px] text-muted-foreground/60 flex items-start gap-1.5">
                          <span className="text-orange/40 mt-0.5 shrink-0">→</span>
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {saved.key_points && saved.key_points.length > 0 && (
                  <div className="mb-3">
                    <p className="text-[8px] text-muted-foreground/40 font-semibold uppercase tracking-wider mb-1">Key Points</p>
                    <div className="space-y-0.5">
                      {saved.key_points.map((point, i) => (
                        <p key={i} className="text-[10px] text-muted-foreground/60 flex items-start gap-1.5">
                          <span className="text-orange/40 mt-0.5 shrink-0">•</span>
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {saved.target_keywords && saved.target_keywords.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {saved.target_keywords.map((kw, i) => (
                      <span key={i} className="text-[8px] px-1.5 py-0.5 rounded-full bg-foreground/5 border border-border/10 text-muted-foreground/40 font-mono">
                        {kw}
                      </span>
                    ))}
                  </div>
                )}

                {saved.thumbnail_concept && (
                  <p className="text-[10px] text-muted-foreground/40 leading-relaxed mb-3">
                    <span className="text-orange/50 text-[8px] font-semibold uppercase tracking-wider">Thumbnail: </span>
                    {saved.thumbnail_concept}
                  </p>
                )}

                {saved.sources_to_reference && saved.sources_to_reference.length > 0 && (
                  <div className="mb-3">
                    <p className="text-[8px] text-muted-foreground/40 font-semibold uppercase tracking-wider mb-0.5">Sources</p>
                    <div className="space-y-0.5">
                      {saved.sources_to_reference.map((src, i) => (
                        <p key={i} className="text-[9px] text-muted-foreground/30 truncate">
                          📎 {src}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-border/10">
                  <span className="text-[10px] font-mono text-muted-foreground/30 tracking-wider">
                    {saved.channel_name}
                  </span>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/scripts/new?idea=${encodeURIComponent(`Idea: ${saved.title}\n\n${saved.description}`)}`}
                      className="text-[10px] text-orange/50 hover:text-orange flex items-center gap-1 transition-colors"
                    >
                      Write script
                      <ArrowRight className="w-2.5 h-2.5" />
                    </Link>
                    <button
                      onClick={async () => {
                        await fetch(`/api/ideas/saved/${saved.id}`, { method: "DELETE" });
                        await refreshSaved();
                      }}
                      className="w-6 h-6 rounded flex items-center justify-center text-muted-foreground/30 hover:text-red-400 hover:bg-red-500/10 transition-all"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      )}

      {/* Loading topics */}
      {topicsLoading && (
        <div className="rounded-2xl border border-border/30 bg-card/30 p-16 text-center">
          <Loader2 className="w-8 h-8 animate-spin text-orange mx-auto mb-4" />
          <p className="text-sm text-muted-foreground">Loading topics from your blueprints...</p>
        </div>
      )}

      {/* No blueprints */}
      {!topicsLoading && topics.length === 0 && (
        <div className="rounded-2xl border border-border/30 bg-card/30 p-16 text-center">
          <div className="w-14 h-14 rounded-2xl bg-orange/5 border border-orange/10 flex items-center justify-center mx-auto mb-4">
            <Library className="w-6 h-6 text-orange/40" />
          </div>
          <h3 className="text-base font-display font-semibold mb-1">No blueprints yet</h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
            Analyze a channel first to build a blueprint. Topics (content pillars) are extracted from
            your channel blueprints.
          </p>
          <Link
            href="/channels/new"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-orange text-black text-sm font-semibold hover:bg-orange/90 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            Analyze a Channel
          </Link>
        </div>
      )}

      {/* Topic blocks grid */}
      {!topicsLoading && (topics.length > 0 || manualTopics.length > 0) && (
        <div className="grid sm:grid-cols-1 gap-4">
          {[
            ...topics,
            ...manualTopics
              .filter((t) => !topics.some((tp) => tp.topic === t))
              .map((t) => ({ topic: t, channels: [] as { id: string; name: string }[] })),
          ].map(({ topic, channels }) => {
            const hasIdeas = !!ideasByTopic[topic];
            const ideas = ideasByTopic[topic] || [];
            const generating = generatingTopics.has(topic);
            const isManual = channels.length === 0;

            return (
              <div
                key={topic}
                className="rounded-xl border border-border/30 bg-card/30 overflow-hidden transition-all hover:border-orange/20"
              >
                {/* Block header */}
                <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border/20">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold truncate">{topic}</h3>
                    <p className="text-[10px] text-muted-foreground/50 truncate">
                      {isManual ? "Custom topic" : channels.map((c) => c.name).join(", ")}
                    </p>
                  </div>
                  <button
                    onClick={() => generateForTopic(topic)}
                    disabled={generating}
                    className="inline-flex items-center gap-1.5 h-7 px-3 rounded-lg bg-orange/10 text-orange text-xs font-semibold hover:bg-orange/20 disabled:opacity-50 transition-all shrink-0"
                  >
                    {generating ? (
                      <Loader2 className="w-3 h-3 animate-spin" />
                    ) : (
                      <Sparkles className="w-3 h-3" />
                    )}
                    {generating ? "..." : hasIdeas ? "Regenerate" : "Generate"}
                  </button>
                  {isManual && (
                    <button
                      onClick={() => {
                        setManualTopics((prev) => prev.filter((t) => t !== topic));
                        setIdeasByTopic((prev) => {
                          const next = { ...prev };
                          delete next[topic];
                          return next;
                        });
                      }}
                      className="w-6 h-6 rounded flex items-center justify-center text-muted-foreground/30 hover:text-red-400 hover:bg-red-500/10 transition-all shrink-0"
                      title="Remove topic"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Block body */}
                <div className="p-4">
                  {generating && !hasIdeas && (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="w-5 h-5 animate-spin text-orange" />
                    </div>
                  )}

                  {hasIdeas && ideas.length === 0 && (
                    <p className="text-xs text-muted-foreground/40 text-center py-8">
                      No ideas generated for this topic yet.
                    </p>
                  )}

                  {hasIdeas && ideas.length > 0 && (
                    <div className="space-y-3">
                      {ideas.map((idea, i) => {
                        const key = ideaKey(idea);
                        const saved = savedIds.has(key);
                        const saving = savingMap[key];

                        return (
                          <div
                            key={i}
                            className="group rounded-lg border border-border/20 bg-card/50 p-3.5 hover:border-orange/15 hover:bg-orange/[0.01] transition-all"
                          >
                            <div className="flex items-start gap-2.5 mb-2">
                              <div className="w-6 h-6 rounded-md bg-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                                <Target className="w-3 h-3 text-orange" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h4 className="text-xs font-semibold leading-snug mb-0.5">
                                  {idea.title}
                                </h4>
                                <p className="text-[11px] text-muted-foreground leading-relaxed">
                                  {idea.description}
                                </p>
                              </div>
                              <button
                                onClick={() =>
                                  saved ? unsaveIdea(idea) : saveIdea(idea)
                                }
                                disabled={saving}
                                className="shrink-0 w-6 h-6 rounded-md flex items-center justify-center hover:bg-orange/10 transition-all disabled:opacity-50 mt-0.5"
                                title={saved ? "Unsave" : "Save"}
                              >
                                <Bookmark
                                  className={`w-3.5 h-3.5 ${
                                    saved
                                      ? "fill-orange text-orange"
                                      : "text-muted-foreground/40 group-hover:text-orange/60"
                                  } transition-colors`}
                                />
                              </button>
                            </div>

                            <div className="flex flex-wrap gap-1.5 mb-2">
                              <span className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full bg-orange/5 border border-orange/10 text-orange/70">
                                <Clock className="w-2 h-2" />
                                {idea.estimated_duration_minutes} min
                              </span>
                              <span className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full bg-foreground/5 border border-border/20 text-muted-foreground/60">
                                {idea.hook_approach}
                              </span>
                            </div>

                            <p className="text-[10px] text-muted-foreground/40 leading-relaxed italic mb-2">
                              {idea.reasoning}
                            </p>

                            {idea.outline && idea.outline.length > 0 && (
                              <div className="mb-2">
                                <p className="text-[8px] text-muted-foreground/40 font-semibold uppercase tracking-wider mb-1">Outline</p>
                                <div className="space-y-0.5">
                                  {idea.outline.map((item, i) => (
                                    <p key={i} className="text-[9px] text-muted-foreground/60 flex items-start gap-1">
                                      <span className="text-orange/40 mt-0.5 shrink-0">→</span>
                                      <span>{item}</span>
                                    </p>
                                  ))}
                                </div>
                              </div>
                            )}

                            {idea.key_points && idea.key_points.length > 0 && (
                              <div className="mb-2">
                                <p className="text-[8px] text-muted-foreground/40 font-semibold uppercase tracking-wider mb-1">Key Points</p>
                                <div className="space-y-0.5">
                                  {idea.key_points.map((point, i) => (
                                    <p key={i} className="text-[9px] text-muted-foreground/60 flex items-start gap-1">
                                      <span className="text-orange/40 mt-0.5 shrink-0">•</span>
                                      <span>{point}</span>
                                    </p>
                                  ))}
                                </div>
                              </div>
                            )}

                            {idea.target_keywords && idea.target_keywords.length > 0 && (
                              <div className="flex flex-wrap gap-1 mb-2">
                                {idea.target_keywords.map((kw, i) => (
                                  <span key={i} className="text-[8px] px-1.5 py-0.5 rounded-full bg-foreground/5 border border-border/10 text-muted-foreground/40 font-mono">
                                    {kw}
                                  </span>
                                ))}
                              </div>
                            )}

                            {idea.thumbnail_concept && (
                              <p className="text-[9px] text-muted-foreground/40 leading-relaxed mb-2">
                                <span className="text-orange/50 text-[8px] font-semibold uppercase tracking-wider">Thumbnail: </span>
                                {idea.thumbnail_concept}
                              </p>
                            )}

                            {idea.sources_to_reference && idea.sources_to_reference.length > 0 && (
                              <div className="mb-2">
                                <p className="text-[8px] text-muted-foreground/40 font-semibold uppercase tracking-wider mb-0.5">Sources</p>
                                <div className="space-y-0.5">
                                  {idea.sources_to_reference.map((src, i) => (
                                    <p key={i} className="text-[8px] text-muted-foreground/30 truncate">
                                      📎 {src}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="flex items-center justify-between pt-2 border-t border-border/10">
                              <span className="text-[9px] font-mono text-muted-foreground/30 tracking-wider">
                                {idea.channel_name}
                              </span>
                              <Link
                                href={`/scripts/new?idea=${encodeURIComponent(`Idea: ${idea.title}\n\n${idea.description}`)}`}
                                className="text-[9px] text-orange/50 hover:text-orange flex items-center gap-1 transition-colors"
                              >
                                Write script
                                <ArrowRight className="w-2 h-2" />
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {!hasIdeas && !generating && (
                    <p className="text-xs text-muted-foreground/40 text-center py-8">
                      Click Generate to get video ideas for this topic.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}




    </div>
  );
}
