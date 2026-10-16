import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { rateLimit } from "@/lib/rateLimit";

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_PER_EMAIL = 3;
const MAX_PER_IP = 10;

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: NextRequest) {
  let body: { email?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { email } = body;
  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  const ip = getClientIp(request);
  const emailKey = email.trim().toLowerCase();

  if (
    !rateLimit(`resend:email:${emailKey}`, MAX_PER_EMAIL, WINDOW_MS) ||
    !rateLimit(`resend:ip:${ip}`, MAX_PER_IP, WINDOW_MS)
  ) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.resend({
    type: "signup",
    email,
  });

  if (error) {
    // Return a generic success-shaped response to avoid leaking whether the
    // address exists, while logging the real error server-side.
    console.error("[auth/resend] resend failed:", error.message);
  }

  return NextResponse.json({ success: true });
}
