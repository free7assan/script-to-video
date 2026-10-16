import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const MAX_NAME_LENGTH = 100;

export async function PATCH(request: NextRequest) {
  let body: { name?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name } = body;
  if (typeof name !== "string" || name.trim().length === 0 || name.length > MAX_NAME_LENGTH) {
    return NextResponse.json(
      { error: `Name must be between 1 and ${MAX_NAME_LENGTH} characters` },
      { status: 400 }
    );
  }

  const supabase = await createSupabaseServerClient();

  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { error } = await supabase.auth.updateUser({
    data: { ...user.user_metadata, name: name.trim() },
  });

  if (error) {
    console.error("[auth/profile] updateUser failed:", error.message);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
