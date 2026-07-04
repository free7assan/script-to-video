"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft, Users, Shield, Loader2, Mail, Search,
  ChevronDown, ChevronRight, Trash2, Calendar, Clock,
  CheckCircle, XCircle, FileText, Ban, Archive, UserCheck, RotateCcw
} from "lucide-react";

interface AdminUser {
  id: string;
  email: string;
  name: string | null;
  isAdmin: boolean;
  created_at: string;
  last_sign_in_at: string | null;
  email_confirmed_at: string | null;
  banned_until: string | null;
  archived_at: string | null;
  scripts_count: number;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<AdminUser | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const loadUsers = () => {
    setLoading(true);
    fetch("/api/admin/users")
      .then((r) => r.json())
      .then((data) => setUsers(data.users ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { loadUsers() }, []);

  const filtered = useMemo(
    () => users.filter((u) =>
      (u.email?.toLowerCase() || "").includes(search.toLowerCase()) ||
      (u.name?.toLowerCase() || "").includes(search.toLowerCase())
    ),
    [users, search]
  );

  const performAction = async (userId: string, action: string) => {
    setActionLoading(`${userId}-${action}`);
    try {
      const res = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, action }),
      });
      if (!res.ok) return;
      loadUsers();
    } catch {}
    setActionLoading(null);
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const res = await fetch("/api/admin/users", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: deleteTarget.id }),
      });
      if (!res.ok) throw new Error("Delete failed");
      setUsers((prev) => prev.filter((u) => u.id !== deleteTarget.id));
    } catch {}
    setDeleting(false);
    setDeleteTarget(null);
  };

  return (
    <div className="space-y-6 animate-in">
      <div className="rounded-xl border border-border/50 bg-card/50">
        <div className="p-4 border-b border-border/30">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="btn-ghost p-1.5 -ml-1.5">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
              <Users className="w-4 h-4 text-orange" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm">Users</h3>
              <p className="text-xs text-muted-foreground">{users.length} registered user{users.length !== 1 ? "s" : ""}</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-b border-border/20">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by email or name..."
              className="input-base pl-9 h-9 text-sm"
            />
          </div>
        </div>

        {loading ? (
          <div className="p-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="w-4 h-4 animate-spin text-orange" />
            Loading users...
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-8 text-center text-sm text-muted-foreground">
            {search ? "No users match your search" : "No users found"}
          </div>
        ) : (
          <div className="divide-y divide-border/20">
            {filtered.map((u) => {
              const isLoading = actionLoading?.startsWith(u.id);
              const isSuspended = u.banned_until && new Date(u.banned_until) > new Date();
              const isArchived = !!u.archived_at;
              const isConfirmed = !!u.email_confirmed_at;

              return (
              <div key={u.id}>
                <div className="flex items-center gap-3 p-4 hover:bg-foreground/[0.02] transition-colors">
                  <button
                    onClick={() => setExpandedId(expandedId === u.id ? null : u.id)}
                    className="w-6 h-6 flex items-center justify-center text-muted-foreground/40 hover:text-muted-foreground transition-colors shrink-0"
                  >
                    {expandedId === u.id ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                  <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-orange/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium truncate">{u.email}</p>
                      {isSuspended && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                          suspended
                        </span>
                      )}
                      {isArchived && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-muted-foreground/10 text-muted-foreground border border-border/20 shrink-0">
                          archived
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-muted-foreground/50">
                      <span>{u.scripts_count} script{u.scripts_count !== 1 ? "s" : ""}</span>
                      <span>{new Date(u.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border shrink-0 ${
                    u.isAdmin
                      ? "text-orange border-orange/20 bg-orange/5"
                      : "text-muted-foreground/50 border-border/20"
                  }`}>
                    {u.isAdmin ? "admin" : "user"}
                  </span>
                  <button
                    onClick={() => performAction(u.id, u.isAdmin ? "demote" : "promote")}
                    disabled={!!isLoading}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-medium border transition-all disabled:opacity-50 ${
                      u.isAdmin
                        ? "border-red-500/20 text-red-400 hover:bg-red-500/10"
                        : "border-orange/20 text-orange hover:bg-orange/10"
                    }`}
                  >
                    {isLoading && actionLoading === `${u.id}-${u.isAdmin ? "demote" : "promote"}` ? (
                      <Loader2 className="w-3 h-3 animate-spin" />
                    ) : (
                      <Shield className="w-3 h-3" />
                    )}
                    {u.isAdmin ? "Demote" : "Promote"}
                  </button>
                  <button
                    onClick={() => setDeleteTarget(u)}
                    disabled={!!isLoading}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-medium border border-border/20 text-muted-foreground/50 hover:text-red-400 hover:border-red-500/20 hover:bg-red-500/10 transition-all disabled:opacity-50"
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                </div>

                {expandedId === u.id && (
                  <div className="px-4 pb-4 pt-0 ml-9 space-y-3">
                    <div className="space-y-1.5 text-xs text-muted-foreground/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>Created: {new Date(u.created_at).toLocaleString()}</span>
                      </div>
                      {u.last_sign_in_at && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>Last sign in: {new Date(u.last_sign_in_at).toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        {isConfirmed ? (
                          <CheckCircle className="w-3 h-3 text-green-500" />
                        ) : (
                          <XCircle className="w-3 h-3 text-amber-500" />
                        )}
                        <span>
                          Email {isConfirmed ? "confirmed" : "not confirmed"}
                          {u.email_confirmed_at && ` (${new Date(u.email_confirmed_at).toLocaleDateString()})`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-3 h-3" />
                        <span>{u.scripts_count} saved script{u.scripts_count !== 1 ? "s" : ""}</span>
                      </div>
                      <div className="font-mono text-[10px] text-muted-foreground/40 break-all">ID: {u.id}</div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1 border-t border-border/10">
                      {!isConfirmed && (
                        <button
                          onClick={() => performAction(u.id, "confirm")}
                          disabled={!!isLoading}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium border border-green-500/20 text-green-500 hover:bg-green-500/10 transition-all disabled:opacity-50"
                        >
                          {isLoading && actionLoading === `${u.id}-confirm` ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            <UserCheck className="w-3 h-3" />
                          )}
                          Confirm email
                        </button>
                      )}
                      {isSuspended ? (
                        <button
                          onClick={() => performAction(u.id, "unsuspend")}
                          disabled={!!isLoading}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium border border-green-500/20 text-green-500 hover:bg-green-500/10 transition-all disabled:opacity-50"
                        >
                          {isLoading && actionLoading === `${u.id}-unsuspend` ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            <RotateCcw className="w-3 h-3" />
                          )}
                          Unsuspend
                        </button>
                      ) : (
                        <button
                          onClick={() => performAction(u.id, "suspend")}
                          disabled={!!isLoading}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium border border-amber-500/20 text-amber-500 hover:bg-amber-500/10 transition-all disabled:opacity-50"
                        >
                          {isLoading && actionLoading === `${u.id}-suspend` ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            <Ban className="w-3 h-3" />
                          )}
                          Suspend
                        </button>
                      )}
                      {isArchived ? (
                        <button
                          onClick={() => performAction(u.id, "restore")}
                          disabled={!!isLoading}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium border border-orange/20 text-orange hover:bg-orange/10 transition-all disabled:opacity-50"
                        >
                          {isLoading && actionLoading === `${u.id}-restore` ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            <RotateCcw className="w-3 h-3" />
                          )}
                          Restore
                        </button>
                      ) : (
                        <button
                          onClick={() => performAction(u.id, "archive")}
                          disabled={!!isLoading}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium border border-border/20 text-muted-foreground/60 hover:text-muted-foreground hover:border-border/40 transition-all disabled:opacity-50"
                        >
                          {isLoading && actionLoading === `${u.id}-archive` ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            <Archive className="w-3 h-3" />
                          )}
                          Archive
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Delete confirmation modal */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => !deleting && setDeleteTarget(null)} />
          <div className="relative w-full max-w-sm rounded-2xl border border-border/40 bg-background/90 backdrop-blur-xl shadow-2xl p-6 space-y-4 animate-scale-reveal">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto">
              <Trash2 className="w-5 h-5 text-red-400" />
            </div>
            <div className="text-center">
              <h3 className="font-display font-semibold text-sm">Delete user</h3>
              <p className="text-xs text-muted-foreground mt-1">
                This will permanently delete <strong>{deleteTarget.email}</strong> and all their data.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setDeleteTarget(null)}
                disabled={deleting}
                className="flex-1 h-9 rounded-lg text-xs font-medium border border-border/20 hover:bg-foreground/5 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className="flex-1 h-9 rounded-lg text-xs font-medium bg-red-500 text-white hover:bg-red-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5"
              >
                {deleting ? <Loader2 className="w-3 h-3 animate-spin" /> : null}
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
