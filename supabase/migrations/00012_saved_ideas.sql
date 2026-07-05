-- Table for saved video ideas
CREATE TABLE IF NOT EXISTS saved_ideas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  topic TEXT NOT NULL DEFAULT '',
  hook_approach TEXT NOT NULL DEFAULT '',
  estimated_duration_minutes INTEGER NOT NULL DEFAULT 10,
  reasoning TEXT NOT NULL DEFAULT '',
  channel_name TEXT NOT NULL DEFAULT '',
  channel_id TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_saved_ideas_user_id ON saved_ideas(user_id);

ALTER TABLE saved_ideas ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage own saved ideas" ON saved_ideas;
CREATE POLICY "Users can manage own saved ideas" ON saved_ideas
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
