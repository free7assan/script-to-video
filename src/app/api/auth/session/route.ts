import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { AuthUser } from "@/types";

export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ user: null });
  }

  const { data: users } = await supabase
    .from("users")
    .select("id, email, name")
    .eq("id", user.id)
    .single();

  const { data: admins } = await supabase
    .from("admins")
    .select("id")
    .eq("id", user.id)
    .maybeSingle();

  const authUser: AuthUser = {
    id: user.id,
    email: user.email || users?.email || "",
    name: users?.name || user.user_metadata?.name as string || user.email?.split("@")[0] || "",
    isAdmin: !!admins,
  };

  return NextResponse.json({ user: authUser });
}
