-- Add plan column to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS plan TEXT NOT NULL DEFAULT 'free';

-- Free plan limits: 5 analyses (channels + saved_analyses combined), 5 scripts
-- Future plans: 'pro', 'unlimited'
