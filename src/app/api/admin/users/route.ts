import { NextRequest, NextResponse } from "next/server";
import type { SupabaseClient } from "@supabase/supabase-js";
import { requireAdmin } from "@/lib/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/server";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Actions an admin must never perform on their own account.
const SELF_PROTECTED_ACTIONS = new Set(["demote", "suspend", "archive"]);
// Actions that remove admin capability and could lock everyone out.
const ADMIN_REMOVING_ACTIONS = new Set(["demote"]);

async function countAdmins(supabase: SupabaseClient) {
  const { count } = await supabase
    .from("admins")
    .select("id", { count: "exact", head: true });
  return count ?? 0;
}

async function parseBody(request: NextRequest): Promise<Record<string, unknown> | null> {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const supabase = await createSupabaseAdminClient();

  const allUsers: { id: string; email?: string; created_at: string; last_sign_in_at?: string | null; email_confirmed_at?: string | null; banned_until?: string | null }[] = [];
  const perPage = 1000;
  for (let page = 1; page <= 50; page++) {
    const { data, error: listErr } = await supabase.auth.admin.listUsers({ page, perPage });
    if (listErr) {
      console.error("[admin/users] listUsers failed:", listErr.message);
      return NextResponse.json({ error: "Failed to load users" }, { status: 500 });
    }
    allUsers.push(...data.users);
    if (data.users.length < perPage) break;
  }

  const { data: admins } = await supabase
    .from("admins")
    .select("id");

  const { data: userProfiles } = await supabase
    .from("users")
    .select("id, name, archived_at");

  const { data: scriptCounts } = await supabase
    .rpc("admin_user_script_counts");

  const scriptCountMap: Record<string, number> = {};
  if (scriptCounts) {
    for (const s of scriptCounts as { user_id: string; script_count: number }[]) {
      if (s.user_id) scriptCountMap[s.user_id] = Number(s.script_count) || 0;
    }
  }

  const adminIds = new Set(admins?.map((a) => a.id) || []);
  const profileMap = new Map(userProfiles?.map((p) => [p.id, p]) || []);

  const mapped = allUsers.map((u) => {
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
  const { error, user: actor } = await requireAdmin();
  if (error) return error;

  const body = await parseBody(request);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { userId, action } = body as { userId?: string; action?: string };
  if (!userId || typeof userId !== "string" || !UUID_RE.test(userId)) {
    return NextResponse.json({ error: "A valid userId is required" }, { status: 400 });
  }
  if (!action || typeof action !== "string") {
    return NextResponse.json({ error: "action is required" }, { status: 400 });
  }

  if (actor && userId === actor.id && SELF_PROTECTED_ACTIONS.has(action)) {
    return NextResponse.json(
      { error: `You cannot ${action} your own account` },
      { status: 400 }
    );
  }

  const supabase = await createSupabaseAdminClient();

  if (ADMIN_REMOVING_ACTIONS.has(action)) {
    const adminCount = await countAdmins(supabase);
    if (adminCount <= 1) {
      return NextResponse.json(
        { error: "Cannot remove the last admin" },
        { status: 400 }
      );
    }
  }

  switch (action) {
    case "promote": {
      const { error: insertError } = await supabase
        .from("admins")
        .upsert({ id: userId }, { onConflict: "id", ignoreDuplicates: true });
      if (insertError) {
        console.error("[admin/users] promote failed:", insertError.message);
        return NextResponse.json({ error: "Failed to promote user" }, { status: 500 });
      }
      break;
    }
    case "demote": {
      const { error: deleteError } = await supabase
        .from("admins")
        .delete()
        .eq("id", userId);
      if (deleteError) {
        console.error("[admin/users] demote failed:", deleteError.message);
        return NextResponse.json({ error: "Failed to demote user" }, { status: 500 });
      }
      break;
    }
    case "confirm": {
      const { error: confirmErr } = await supabase.auth.admin.updateUserById(userId, {
        email_confirm: true,
      });
      if (confirmErr) {
        console.error("[admin/users] confirm failed:", confirmErr.message);
        return NextResponse.json({ error: "Failed to confirm user" }, { status: 500 });
      }
      break;
    }
    case "suspend": {
      const { error: suspendErr } = await supabase.auth.admin.updateUserById(userId, {
        ban_duration: "876000h",
      });
      if (suspendErr) {
        console.error("[admin/users] suspend failed:", suspendErr.message);
        return NextResponse.json({ error: "Failed to suspend user" }, { status: 500 });
      }
      break;
    }
    case "unsuspend": {
      const { error: unsuspendErr } = await supabase.auth.admin.updateUserById(userId, {
        ban_duration: "none",
      });
      if (unsuspendErr) {
        console.error("[admin/users] unsuspend failed:", unsuspendErr.message);
        return NextResponse.json({ error: "Failed to unsuspend user" }, { status: 500 });
      }
      break;
    }
    case "archive": {
      const { error: archiveErr } = await supabase
        .from("users")
        .update({ archived_at: new Date().toISOString() })
        .eq("id", userId);
      if (archiveErr) {
        console.error("[admin/users] archive failed:", archiveErr.message);
        return NextResponse.json({ error: "Failed to archive user" }, { status: 500 });
      }
      break;
    }
    case "restore": {
      const { error: restoreErr } = await supabase
        .from("users")
        .update({ archived_at: null })
        .eq("id", userId);
      if (restoreErr) {
        console.error("[admin/users] restore failed:", restoreErr.message);
        return NextResponse.json({ error: "Failed to restore user" }, { status: 500 });
      }
      break;
    }
    default:
      return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: NextRequest) {
  const { error, user: actor } = await requireAdmin();
  if (error) return error;

  const body = await parseBody(request);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { userId } = body as { userId?: string };
  if (!userId || typeof userId !== "string" || !UUID_RE.test(userId)) {
    return NextResponse.json({ error: "A valid userId is required" }, { status: 400 });
  }

  if (actor && userId === actor.id) {
    return NextResponse.json({ error: "You cannot delete your own account" }, { status: 400 });
  }

  const supabase = await createSupabaseAdminClient();

  // Block deleting an admin if they are the last remaining one.
  const { data: targetAdmin } = await supabase
    .from("admins")
    .select("id")
    .eq("id", userId)
    .maybeSingle();

  if (targetAdmin) {
    const adminCount = await countAdmins(supabase);
    if (adminCount <= 1) {
      return NextResponse.json(
        { error: "Cannot delete the last admin" },
        { status: 400 }
      );
    }
  }

  const { error: deleteErr } = await supabase.auth.admin.deleteUser(userId);

  if (deleteErr) {
    console.error("[admin/users] delete failed:", deleteErr.message);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
