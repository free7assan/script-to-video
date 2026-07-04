-- Normalize JSONB columns into separate tables
-- Moves videos.analysis → video_analyses
-- Moves channels.blueprint → blueprints
-- Creates scripts table (replacing localStorage)

-- 1. video_analyses table
CREATE TABLE IF NOT EXISTS video_analyses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id UUID NOT NULL REFERENCES videos(id) ON DELETE CASCADE UNIQUE,
  analysis_data JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. blueprints table
CREATE TABLE IF NOT EXISTS blueprints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  channel_id UUID NOT NULL REFERENCES channels(id) ON DELETE CASCADE UNIQUE,
  blueprint_data JSONB NOT NULL,
  archived_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. scripts table
CREATE TABLE IF NOT EXISTS scripts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  channel_id UUID REFERENCES channels(id) ON DELETE SET NULL,
  title TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  duration_minutes INTEGER NOT NULL DEFAULT 10,
  script_content JSONB NOT NULL DEFAULT '{}',
  mode TEXT NOT NULL DEFAULT 'full',
  archived BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Migrate existing data from videos.analysis
INSERT INTO video_analyses (video_id, analysis_data)
SELECT id, analysis FROM videos WHERE analysis IS NOT NULL
ON CONFLICT (video_id) DO NOTHING;

-- 5. Migrate existing data from channels.blueprint
INSERT INTO blueprints (channel_id, blueprint_data, archived_at)
SELECT
  id,
  blueprint,
  COALESCE(
    (blueprint->'_meta'->>'archived_at')::timestamptz,
    archived_at
  )
FROM channels WHERE blueprint IS NOT NULL
ON CONFLICT (channel_id) DO NOTHING;

-- 6. Drop old JSONB columns
ALTER TABLE videos DROP COLUMN IF EXISTS analysis;
ALTER TABLE channels DROP COLUMN IF EXISTS blueprint;

-- 7. Indexes
CREATE INDEX IF NOT EXISTS idx_video_analyses_video_id ON video_analyses(video_id);
CREATE INDEX IF NOT EXISTS idx_blueprints_channel_id ON blueprints(channel_id);
CREATE INDEX IF NOT EXISTS idx_scripts_user_id ON scripts(user_id);

-- 8. RLS
ALTER TABLE video_analyses ENABLE ROW LEVEL SECURITY;
ALTER TABLE blueprints ENABLE ROW LEVEL SECURITY;
ALTER TABLE scripts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Video analyses readable by admin" ON video_analyses;
CREATE POLICY "Video analyses readable by admin"
  ON video_analyses FOR SELECT
  USING (EXISTS (SELECT 1 FROM admins WHERE id = auth.uid()));

DROP POLICY IF EXISTS "Blueprints readable by admin" ON blueprints;
CREATE POLICY "Blueprints readable by admin"
  ON blueprints FOR ALL
  USING (EXISTS (SELECT 1 FROM admins WHERE id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM admins WHERE id = auth.uid()));

DROP POLICY IF EXISTS "Users can manage own scripts" ON scripts;
CREATE POLICY "Users can manage own scripts"
  ON scripts FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 9. Auto-update timestamps
CREATE OR REPLACE FUNCTION update_blueprints_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS blueprints_updated_at ON blueprints;
CREATE TRIGGER blueprints_updated_at
  BEFORE UPDATE ON blueprints
  FOR EACH ROW
  EXECUTE FUNCTION update_blueprints_updated_at();

CREATE OR REPLACE FUNCTION update_scripts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS scripts_updated_at ON scripts;
CREATE TRIGGER scripts_updated_at
  BEFORE UPDATE ON scripts
  FOR EACH ROW
  EXECUTE FUNCTION update_scripts_updated_at();
