-- Add archived_at column to users table for admin archive/restore
ALTER TABLE users ADD COLUMN IF NOT EXISTS archived_at TIMESTAMPTZ;
