"use client";

import { useEffect, useState, useCallback } from "react";
import {
  FileText, Trash2, Archive, Clock,
  ChevronDown, ChevronUp, Copy, Check, Pencil, Download,
} from "lucide-react";
import type { Script } from "@/types";

export default function SavedScriptsPage() {
  const [scripts, setScripts] = useState<Script[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editBody, setEditBody] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const load = useCallback(async () => {
    const res = await fetch("/api/scripts");
    const data = await res.json();
    setScripts(Array.isArray(data) ? data : []);
  }, []);

  useEffect(() => { load(); }, [load]);

  const deleteEntry = async (id: string) => {
    await fetch(`/api/scripts/${id}`, { method: "DELETE" });
    setScripts((prev) => prev.filter((s) => s.id !== id));
    if (expanded === id) setExpanded(null);
    if (editingId === id) setEditingId(null);
  };

  const toggleArchive = async (id: string) => {
    const script = scripts.find((s) => s.id === id);
    if (!script) return;
    const res = await fetch(`/api/scripts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ archived: !script.archived }),
    });
    if (res.ok) {
      setScripts((prev) =>
        prev.map((s) => (s.id === id ? { ...s, archived: !s.archived } : s))
      );
    }
  };

  const copyScript = async (id: string, script: Script) => {
    const body = buildScriptText(script.script_content);
    const text = `# ${script.title}\n\n${body}`;
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const downloadScript = (entry: Script) => {
    const body = buildScriptText(entry.script_content);
    const text = `# ${entry.title}\n\n${body}`;
    const blob = new Blob([text], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${entry.title || "script"}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const buildScriptText = (script: any) =>
    [
      script?.hook && `## Hook\n\n${script.hook}`,
      ...(script?.sections || []).map((s: any) => `## ${s.heading}\n\n${s.content}`),
      script?.call_to_action && `## Call to Action\n\n${script.call_to_action}`,
    ].filter(Boolean).join("\n\n");

  const highlightVisuals = (text: string) =>
    text.replace(
      /(\[VISUAL:[^\]]*\])/g,
      '<span class="text-orange/70 italic font-normal">$1</span>'
    );

  const parseBodyText = (text: string, existing: any) => {
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
      else sections.push({
        heading: currentHeading,
        content,
        estimated_duration_seconds: existing?.sections?.find((s: any) => s.heading === currentHeading)?.estimated_duration_seconds,
      });
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

    return { ...existing, hook, call_to_action: cta, sections };
  };

  const filtered = scripts;
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const startEditing = (entry: Script) => {
    setEditingId(entry.id);
    setEditTitle(entry.title);
    setEditBody(buildScriptText(entry.script_content));
    setExpanded(entry.id);
  };

  const saveEdit = async () => {
    if (editingId === null) return;
    const entry = scripts.find((s) => s.id === editingId);
    if (!entry) return;
    const updatedContent = parseBodyText(editBody, { ...entry.script_content, title: editTitle });
    updatedContent.title = editTitle;
    await fetch(`/api/scripts/${editingId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ script_content: updatedContent, title: editTitle }),
    });
    setScripts((prev) =>
      prev.map((s) =>
        s.id === editingId
          ? { ...s, script_content: updatedContent, title: editTitle }
          : s
      )
    );
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in">
      <div className="rounded-xl border border-border/50 bg-card/50">
        <div className="p-4 border-b border-border/30 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
            <FileText className="w-4 h-4 text-orange" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-semibold text-sm">Saved Scripts</h3>
            <p className="text-xs text-muted-foreground">Scripts you&apos;ve saved from the generator</p>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24 border border-dashed border-border/50 rounded-xl">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/10 to-prussian-blue/10 flex items-center justify-center mx-auto mb-4 ring-1 ring-orange/10">
            <FileText className="w-6 h-6 text-muted-foreground/50" />
          </div>
          <h2 className="font-display font-semibold mb-1">No saved scripts yet</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Generate a script and save it to see it here
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((entry) => (
            <div
              key={entry.id}
              className="rounded-xl border border-border/50 bg-card/50"
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-4 p-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-semibold text-sm truncate">
                      {entry.title || "Untitled"}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground flex-wrap">
                    <span>{entry.description?.slice(0, 60)}</span>
                    <span className="text-muted-foreground/30">&middot;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {entry.duration_minutes} min
                    </span>
                    <span className="text-muted-foreground/30">&middot;</span>
                    <span>{formatDate(entry.created_at)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => editingId === entry.id ? saveEdit() : startEditing(entry)}
                    className="btn-icon w-7 h-7"
                    title={editingId === entry.id ? "Save edit" : "Edit"}
                  >
                    {editingId === entry.id ? <Check className="w-3.5 h-3.5" /> : <Pencil className="w-3.5 h-3.5" />}
                  </button>
                  {editingId === entry.id && (
                    <button
                      onClick={cancelEdit}
                      className="btn-icon w-7 h-7"
                      title="Cancel"
                    >
                      <span className="text-xs font-bold">X</span>
                    </button>
                  )}
                  <button
                    onClick={() => copyScript(entry.id, entry)}
                    className="btn-icon w-7 h-7"
                    title="Copy script"
                  >
                    {copied === entry.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => downloadScript(entry)}
                    className="btn-icon w-7 h-7"
                    title="Download .md"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => toggleArchive(entry.id)}
                    className="btn-icon w-7 h-7"
                    title={entry.archived ? "Unarchive" : "Archive"}
                  >
                    <Archive className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => deleteEntry(entry.id)}
                    className="btn-icon-destructive w-7 h-7"
                    title="Delete"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setExpanded(expanded === entry.id ? null : entry.id)}
                    className="btn-icon w-7 h-7"
                    title={expanded === entry.id ? "Collapse" : "Expand"}
                  >
                    {expanded === entry.id ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Expanded content */}
              {expanded === entry.id && (
                <div className="px-4 pb-4 pt-0 border-t border-border/30">
                  <p className="text-xs text-muted-foreground mt-3 mb-3">{entry.description}</p>
                  {editingId === entry.id ? (
                    <div className="space-y-3">
                      <input
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="input-base h-9 font-semibold"
                        placeholder="Script title"
                      />
                      <div className="flex border border-black/5 dark:border-white/[0.06] rounded-lg overflow-hidden bg-background">
                        <div className="select-none text-right px-2 py-2 text-xs leading-relaxed text-muted-foreground/30 font-mono border-r border-black/10 dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] min-w-[2.5rem]">
                          {Array.from({ length: editBody.split("\n").length }, (_, i) => (
                            <div key={i}>{i + 1}</div>
                          ))}
                        </div>
                        <textarea
                          value={editBody}
                          onChange={(e) => setEditBody(e.target.value)}
                          rows={18}
                          className="flex-1 bg-transparent font-mono text-sm leading-relaxed resize-y min-h-[300px] p-2 outline-none"
                        />
                      </div>
                      {(editBody.match(/\[VISUAL:/g) || []).length > 0 && (
                        <div className="flex items-center gap-1.5 text-[11px] text-orange/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange/60" />
                          {(editBody.match(/\[VISUAL:/g) || []).length} visual cue{(editBody.match(/\[VISUAL:/g) || []).length !== 1 ? "s" : ""} embedded
                        </div>
                      )}
                      <div className="flex gap-2">
                        <button onClick={saveEdit} className="inline-flex items-center justify-center gap-2 px-4 h-8 rounded-lg bg-orange text-black text-xs font-semibold hover:bg-orange/90 transition-all">
                          <Check className="w-3.5 h-3.5" />
                          Save
                        </button>
                        <button onClick={cancelEdit} className="btn-ghost h-8 text-xs">
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                      <div className="flex border border-black/5 dark:border-white/[0.06] rounded-lg overflow-hidden bg-black/5 dark:bg-white/[0.02]">
                        <div className="select-none text-right px-2 py-4 text-xs leading-relaxed text-muted-foreground/30 font-mono border-r border-black/10 dark:border-white/[0.06] min-w-[2.5rem]">
                          {Array.from({ length: buildScriptText(entry.script_content).split("\n").length }, (_, i) => (
                            <div key={i}>{i + 1}</div>
                          ))}
                        </div>
                        <div
                          className="flex-1 text-sm font-mono whitespace-pre-wrap leading-relaxed p-4 overflow-x-auto max-h-[60vh] overflow-y-auto"
                          dangerouslySetInnerHTML={{
                            __html: highlightVisuals(buildScriptText(entry.script_content)),
                          }}
                        />
                      </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
