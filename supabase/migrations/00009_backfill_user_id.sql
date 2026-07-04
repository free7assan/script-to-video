-- Backfill existing channels to the admin user so strict user_id scoping works
UPDATE channels
SET user_id = (SELECT id FROM auth.users WHERE email = 'free7assan@gmail.com')
WHERE user_id IS NULL;

-- Make user_id NOT NULL going forward
ALTER TABLE channels ALTER COLUMN user_id SET NOT NULL;
