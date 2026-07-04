-- Add archived support and cancel/pause signals
-- Run this in the Supabase SQL editor at https://supabase.com/dashboard/project/eczqyedlcvzfamkjladi/sql/new

-- 1. Add archived_at column to channels
ALTER TABLE channels ADD COLUMN IF NOT EXISTS archived_at TIMESTAMPTZ;

-- 2. Update status check constraint to include cancelled/paused
ALTER TABLE channels DROP CONSTRAINT IF EXISTS channels_status_check;
ALTER TABLE channels ADD CONSTRAINT channels_status_check
  CHECK (status IN ('pending', 'fetching', 'analyzing', 'completed', 'error', 'cancelled', 'paused'));

ALTER TABLE analysis_jobs DROP CONSTRAINT IF EXISTS analysis_jobs_status_check;
ALTER TABLE analysis_jobs ADD CONSTRAINT analysis_jobs_status_check
  CHECK (status IN ('pending', 'fetching_videos', 'fetching_transcripts', 'analyzing_videos', 'synthesizing', 'completed', 'error', 'cancelled', 'paused'));
