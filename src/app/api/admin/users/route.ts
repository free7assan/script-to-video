import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/server";

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const supabase = await createSupabaseAdminClient();
  const { data: authUsers, error: listErr } = await supabase.auth.admin.listUsers();

  if (listErr) {
    return NextResponse.json({ error: listErr.message }, { status: 500 });
  }

  const { data: admins } = await supabase
    .from("admins")
    .select("id");

  const { data: userProfiles } = await supabase
    .from("users")
    .select("id, name, archived_at");

  const { data: scriptCounts } = await supabase
    .from("scripts")
    .select("user_id", { count: "exact", head: false });

  const scriptCountMap: Record<string, number> = {};
  if (scriptCounts) {
    for (const s of scriptCounts) {
      const uid = s.user_id || "";
      scriptCountMap[uid] = (scriptCountMap[uid] || 0) + 1;
    }
  }

  const adminIds = new Set(admins?.map((a) => a.id) || []);
  const profileMap = new Map(userProfiles?.map((p) => [p.id, p]) || []);

  const mapped = authUsers.users.map((u) => {
    const profile = profileMap.get(u.id);
    return {
      id: u.id,
      email: u.email,
      name: profile?.name || null,
      isAdmin: adminIds.has(u.id),
      created_at: u.created_at,
      last_sign_in_at: u.last_sign_in_at || null,
      email_confirmed_at: u.email_confirmed_at || null,
      banned_until: u.banned_until || null,
      archived_at: profile?.archived_at || null,
      scripts_count: scriptCountMap[u.id] || 0,
    };
  });

  return NextResponse.json({ users: mapped });
}

export async function PATCH(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const body = await request.json();
  const { userId, action } = body;
  if (!userId || !action) {
    return NextResponse.json({ error: "userId and action are required" }, { status: 400 });
  }

  const supabase = await createSupabaseAdminClient();

  switch (action) {
    case "promote": {
      const { error: insertError } = await supabase
        .from("admins")
        .insert({ id: userId });
      if (insertError) return NextResponse.json({ error: insertError.message }, { status: 500 });
      break;
    }
    case "demote": {
      const { error: deleteError } = await supabase
        .from("admins")
        .delete()
        .eq("id", userId);
      if (deleteError) return NextResponse.json({ error: deleteError.message }, { status: 500 });
      break;
    }
    case "confirm": {
      const { error: confirmErr } = await supabase.auth.admin.updateUserById(userId, {
        email_confirm: true,
      });
      if (confirmErr) return NextResponse.json({ error: confirmErr.message }, { status: 500 });
      break;
    }
    case "suspend": {
      const { error: suspendErr } = await supabase.auth.admin.updateUserById(userId, {
        ban_duration: "876000h",
      });
      if (suspendErr) return NextResponse.json({ error: suspendErr.message }, { status: 500 });
      break;
    }
    case "unsuspend": {
      const { error: unsuspendErr } = await supabase.auth.admin.updateUserById(userId, {
        ban_duration: "none",
      });
      if (unsuspendErr) return NextResponse.json({ error: unsuspendErr.message }, { status: 500 });
      break;
    }
    case "archive": {
      const { error: archiveErr } = await supabase
        .from("users")
        .update({ archived_at: new Date().toISOString() })
        .eq("id", userId);
      if (archiveErr) return NextResponse.json({ error: archiveErr.message }, { status: 500 });
      break;
    }
    case "restore": {
      const { error: restoreErr } = await supabase
        .from("users")
        .update({ archived_at: null })
        .eq("id", userId);
      if (restoreErr) return NextResponse.json({ error: restoreErr.message }, { status: 500 });
      break;
    }
    default:
      return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { userId } = await request.json();
  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  const supabase = await createSupabaseAdminClient();
  const { error: deleteErr } = await supabase.auth.admin.deleteUser(userId);

  if (deleteErr) {
    return NextResponse.json({ error: deleteErr.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
