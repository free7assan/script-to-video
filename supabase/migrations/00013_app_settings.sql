-- Global application settings (admin-controlled)
CREATE TABLE IF NOT EXISTS app_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE app_settings ENABLE ROW LEVEL SECURITY;

-- Only admins may read or write settings. The service-role client used by the
-- server bypasses RLS, but these policies keep the anon/authenticated roles out.
DROP POLICY IF EXISTS "Admins can read settings" ON app_settings;
CREATE POLICY "Admins can read settings" ON app_settings
  FOR SELECT
  USING (auth.uid() IN (SELECT id FROM admins));

DROP POLICY IF EXISTS "Admins can write settings" ON app_settings;
CREATE POLICY "Admins can write settings" ON app_settings
  FOR ALL
  USING (auth.uid() IN (SELECT id FROM admins))
  WITH CHECK (auth.uid() IN (SELECT id FROM admins));

INSERT INTO app_settings (key, value)
VALUES ('ai_model', 'zen:big-pickle')
ON CONFLICT (key) DO NOTHING;
