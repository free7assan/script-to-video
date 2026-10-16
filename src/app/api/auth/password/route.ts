import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const MIN_PASSWORD_LENGTH = 8;

export async function PUT(request: NextRequest) {
  let body: { currentPassword?: unknown; newPassword?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { currentPassword, newPassword } = body;
  if (typeof currentPassword !== "string" || currentPassword.length === 0) {
    return NextResponse.json({ error: "Current password is required" }, { status: 400 });
  }
  if (typeof newPassword !== "string" || newPassword.length < MIN_PASSWORD_LENGTH) {
    return NextResponse.json(
      { error: `New password must be at least ${MIN_PASSWORD_LENGTH} characters` },
      { status: 400 }
    );
  }

  const supabase = await createSupabaseServerClient();

  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user || !user.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Re-authenticate with the current password before allowing a change.
  const { error: verifyError } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: currentPassword,
  });
  if (verifyError) {
    return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 });
  }

  const { error } = await supabase.auth.updateUser({ password: newPassword });

  if (error) {
    console.error("[auth/password] updateUser failed:", error.message);
    return NextResponse.json({ error: "Failed to update password" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
