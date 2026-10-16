import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  let body: { email?: unknown; password?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { email, password } = body;
  if (
    typeof email !== "string" ||
    !email.includes("@") ||
    typeof password !== "string" ||
    password.length === 0
  ) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    // Preserve the unconfirmed-email signal the login UI relies on, but avoid
    // leaking any other Supabase/DB internals to the client.
    if ((error as { code?: string }).code === "email_not_confirmed") {
      return NextResponse.json(
        { error: "Email not confirmed", code: "email_not_confirmed" },
        { status: 401 }
      );
    }
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}
