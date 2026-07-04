-- Add user ownership to channels
ALTER TABLE channels ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_channels_user_id ON channels(user_id);

-- RLS for channels (users can only see their own; admins see all)
ALTER TABLE channels ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own channels" ON channels;
CREATE POLICY "Users can view own channels" ON channels FOR SELECT
  USING (auth.uid() = user_id OR EXISTS (SELECT 1 FROM admins WHERE id = auth.uid()));

DROP POLICY IF EXISTS "Users can insert own channels" ON channels;
CREATE POLICY "Users can insert own channels" ON channels FOR INSERT
  WITH CHECK (auth.uid() = user_id OR EXISTS (SELECT 1 FROM admins WHERE id = auth.uid()));

DROP POLICY IF EXISTS "Users can update own channels" ON channels;
CREATE POLICY "Users can update own channels" ON channels FOR UPDATE
  USING (auth.uid() = user_id OR EXISTS (SELECT 1 FROM admins WHERE id = auth.uid()));

DROP POLICY IF EXISTS "Users can delete own channels" ON channels;
CREATE POLICY "Users can delete own channels" ON channels FOR DELETE
  USING (auth.uid() = user_id OR EXISTS (SELECT 1 FROM admins WHERE id = auth.uid()));

-- RLS for videos (chain through channel ownership)
DROP POLICY IF EXISTS "Users can view own videos" ON videos;
CREATE POLICY "Users can view own videos" ON videos FOR SELECT
  USING (EXISTS (SELECT 1 FROM channels WHERE channels.id = videos.channel_id AND (channels.user_id = auth.uid() OR EXISTS (SELECT 1 FROM admins WHERE admins.id = auth.uid()))));

DROP POLICY IF EXISTS "Users can insert own videos" ON videos;
CREATE POLICY "Users can insert own videos" ON videos FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM channels WHERE channels.id = videos.channel_id AND (channels.user_id = auth.uid() OR EXISTS (SELECT 1 FROM admins WHERE admins.id = auth.uid()))));

DROP POLICY IF EXISTS "Users can update own videos" ON videos;
CREATE POLICY "Users can update own videos" ON videos FOR UPDATE
  USING (EXISTS (SELECT 1 FROM channels WHERE channels.id = videos.channel_id AND (channels.user_id = auth.uid() OR EXISTS (SELECT 1 FROM admins WHERE admins.id = auth.uid()))));

-- RLS for blueprints (chain through channel ownership)
DROP POLICY IF EXISTS "Blueprints readable by admin" ON blueprints;
DROP POLICY IF EXISTS "Users can view own blueprints" ON blueprints;
CREATE POLICY "Users can view own blueprints" ON blueprints FOR SELECT
  USING (EXISTS (SELECT 1 FROM channels WHERE channels.id = blueprints.channel_id AND (channels.user_id = auth.uid() OR EXISTS (SELECT 1 FROM admins WHERE admins.id = auth.uid()))));

DROP POLICY IF EXISTS "Users can insert own blueprints" ON blueprints;
CREATE POLICY "Users can insert own blueprints" ON blueprints FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM channels WHERE channels.id = blueprints.channel_id AND (channels.user_id = auth.uid() OR EXISTS (SELECT 1 FROM admins WHERE admins.id = auth.uid()))));

DROP POLICY IF EXISTS "Users can update own blueprints" ON blueprints;
CREATE POLICY "Users can update own blueprints" ON blueprints FOR UPDATE
  USING (EXISTS (SELECT 1 FROM channels WHERE channels.id = blueprints.channel_id AND (channels.user_id = auth.uid() OR EXISTS (SELECT 1 FROM admins WHERE admins.id = auth.uid()))));

-- RLS for video_analyses (chain through video -> channel -> user)
DROP POLICY IF EXISTS "Video analyses readable by admin" ON video_analyses;
DROP POLICY IF EXISTS "Users can view own video analyses" ON video_analyses;
CREATE POLICY "Users can view own video analyses" ON video_analyses FOR SELECT
  USING (EXISTS (SELECT 1 FROM videos JOIN channels ON channels.id = videos.channel_id WHERE videos.id = video_analyses.video_id AND (channels.user_id = auth.uid() OR EXISTS (SELECT 1 FROM admins WHERE admins.id = auth.uid()))));

DROP POLICY IF EXISTS "Users can insert own video analyses" ON video_analyses;
CREATE POLICY "Users can insert own video analyses" ON video_analyses FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM videos JOIN channels ON channels.id = videos.channel_id WHERE videos.id = video_analyses.video_id AND (channels.user_id = auth.uid() OR EXISTS (SELECT 1 FROM admins WHERE admins.id = auth.uid()))));

-- RLS for analysis_jobs (chain through channel ownership)
DROP POLICY IF EXISTS "Users can view own analysis jobs" ON analysis_jobs;
CREATE POLICY "Users can view own analysis jobs" ON analysis_jobs FOR SELECT
  USING (EXISTS (SELECT 1 FROM channels WHERE channels.id = analysis_jobs.channel_id AND (channels.user_id = auth.uid() OR EXISTS (SELECT 1 FROM admins WHERE admins.id = auth.uid()))));

DROP POLICY IF EXISTS "Users can insert own analysis jobs" ON analysis_jobs;
CREATE POLICY "Users can insert own analysis jobs" ON analysis_jobs FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM channels WHERE channels.id = analysis_jobs.channel_id AND (channels.user_id = auth.uid() OR EXISTS (SELECT 1 FROM admins WHERE admins.id = auth.uid()))));

DROP POLICY IF EXISTS "Users can update own analysis jobs" ON analysis_jobs;
CREATE POLICY "Users can update own analysis jobs" ON analysis_jobs FOR UPDATE
  USING (EXISTS (SELECT 1 FROM channels WHERE channels.id = analysis_jobs.channel_id AND (channels.user_id = auth.uid() OR EXISTS (SELECT 1 FROM admins WHERE admins.id = auth.uid()))));
