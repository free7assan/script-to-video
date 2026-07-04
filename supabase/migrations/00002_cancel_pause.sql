-- Add cancelled/paused status values
ALTER TABLE channels DROP CONSTRAINT IF EXISTS channels_status_check;
ALTER TABLE channels ADD CONSTRAINT channels_status_check
  CHECK (status IN ('pending', 'fetching', 'analyzing', 'completed', 'error', 'cancelled', 'paused'));

ALTER TABLE analysis_jobs DROP CONSTRAINT IF EXISTS analysis_jobs_status_check;
ALTER TABLE analysis_jobs ADD CONSTRAINT analysis_jobs_status_check
  CHECK (status IN ('pending', 'fetching_videos', 'fetching_transcripts', 'analyzing_videos', 'synthesizing', 'completed', 'error', 'cancelled', 'paused'));
