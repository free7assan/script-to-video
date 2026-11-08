## Analysis Retry & Continue
- `runAnalysisPipeline` accepts `options: { mode?: "full" | "continue"; existingJobId?: string }`
- **Full retry** (`mode: "full"`): clears existing video analysis/transcript data, starts from scratch
- **Continue** (`mode: "continue"`): reuses existing videos in DB, skips already-analyzed videos, only processes missing ones
- Pipeline Phase 2: on continue, loads existing DB videos first before fetching from YouTube
- Pipeline Phase 3/4: on continue, pre-loads existing analyses from DB, skips videos already analyzed
- Pipeline Phase 5: always runs fresh synthesis
- ChannelActions buttons: "Start Analysis" (pending), Pause/Cancel (running), "Continue" (paused/cancelled), "Retry"/"Re-analyze" (error/completed)
- `/api/channels/[id]/analyze` accepts `mode: "full" | "continue"` in request body
- `/api/channels/[id]/analysis` PATCH resume uses `mode: "continue"`

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
