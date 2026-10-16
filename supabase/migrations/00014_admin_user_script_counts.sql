-- Server-side aggregate for per-user script counts (avoids fetching all rows)
CREATE OR REPLACE FUNCTION admin_user_script_counts()
RETURNS TABLE(user_id UUID, script_count BIGINT)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT user_id, COUNT(*) AS script_count
  FROM scripts
  WHERE user_id IS NOT NULL
  GROUP BY user_id;
$$;
