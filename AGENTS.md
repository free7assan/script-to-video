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