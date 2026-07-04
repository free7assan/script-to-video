"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Video } from "lucide-react";

export function AddChannelForm() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/channels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ youtube_url: url }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      router.push(`/channels/${data.id}/analysis`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card-accent">
      <div className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange/20 to-prussian-blue/20 flex items-center justify-center">
            <Video className="w-4 h-4 text-orange" />
          </div>
          <div>
            <h2 className="font-display font-semibold text-sm">Add YouTube Channel</h2>
            <p className="text-xs text-muted-foreground">Paste a channel URL to analyze its script methodology</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="url" className="text-xs font-medium text-muted-foreground">Channel URL</label>
            <input
              id="url"
              placeholder="https://youtube.com/@channel or /channel/UC..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="input-base h-10"
            />
          </div>
          {error && <p className="text-sm text-orange/80">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full h-10"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Channel"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
