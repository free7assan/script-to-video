"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Shield, Key, Check, Loader2, Eye, EyeOff, Calendar } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

export default function SettingsPage() {
  const { user, loading, refresh } = useAuth();
  const router = useRouter();
  const [name, setName] = useState(user?.name || "");
  const [nameSaved, setNameSaved] = useState(false);
  const [nameSaving, setNameSaving] = useState(false);
  const [nameError, setNameError] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="w-4 h-4 animate-spin text-orange" />
          Loading...
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleNameSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setNameSaving(true);
    setNameError("");
    setNameSaved(false);
    try {
      const res = await fetch("/api/auth/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() }),
      });
      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || "Failed to update");
      }
      await refresh();
      setNameSaved(true);
      setTimeout(() => setNameSaved(false), 2000);
    } catch (err: any) {
      setNameError(err.message);
    } finally {
      setNameSaving(false);
    }
  };

  const handlePasswordSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordSaving(true);
    setPasswordError("");
    setPasswordSaved(false);
    try {
      const res = await fetch("/api/auth/password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPassword }),
      });
      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || "Failed to update password");
      }
      setPasswordSaved(true);
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => setPasswordSaved(false), 2000);
    } catch (err: any) {
      setPasswordError(err.message);
    } finally {
      setPasswordSaving(false);
    }
  };

  return (
    <div className="max-w-2xl space-y-8 animate-in">
      {/* ──── Header ──── */}
      <div>
        <h1 className="text-xl font-display font-semibold">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your profile and account preferences</p>
      </div>

      {/* ──── Profile ──── */}
      <div className="rounded-xl border border-border/50 bg-card/50">
        <div className="p-4 border-b border-border/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
              <User className="w-4 h-4 text-orange" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm">Profile</h3>
              <p className="text-xs text-muted-foreground">Your display name and contact information</p>
            </div>
          </div>
        </div>
        <div className="p-5 space-y-5">
          <form onSubmit={handleNameSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Display name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="input-base"
                required
              />
            </div>

            {nameError && (
              <p className="text-xs text-red-500">{nameError}</p>
            )}

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={nameSaving || !name.trim()}
                className="btn-secondary h-9 text-xs"
              >
                {nameSaving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
                {nameSaving ? "Saving..." : "Save"}
              </button>
              {nameSaved && (
                <span className="flex items-center gap-1 text-xs text-emerald-500">
                  <Check className="w-3 h-3" />
                  Saved
                </span>
              )}
            </div>
          </form>

          <div className="h-px bg-border/20" />

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-muted-foreground/50" />
              <span className="text-muted-foreground">Email</span>
              <span className="flex-1 text-right font-medium">{user.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Shield className="w-4 h-4 text-muted-foreground/50" />
              <span className="text-muted-foreground">Role</span>
              <span className="flex-1 text-right">
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full border ${
                  user.isAdmin
                    ? "text-orange border-orange/20 bg-orange/5"
                    : "text-muted-foreground/40 border-border/20"
                }`}>
                  {user.isAdmin ? "admin" : "user"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ──── Password ──── */}
      <div className="rounded-xl border border-border/50 bg-card/50">
        <div className="p-4 border-b border-border/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
              <Key className="w-4 h-4 text-orange" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm">Password</h3>
              <p className="text-xs text-muted-foreground">Update your account password</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">New password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Min. 6 characters"
                  className="input-base pr-10"
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Confirm password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat your password"
                className="input-base"
                minLength={6}
                required
              />
            </div>

            {passwordError && (
              <p className="text-xs text-red-500">{passwordError}</p>
            )}

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={passwordSaving || !newPassword || !confirmPassword}
                className="btn-secondary h-9 text-xs"
              >
                {passwordSaving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
                {passwordSaving ? "Updating..." : "Update password"}
              </button>
              {passwordSaved && (
                <span className="flex items-center gap-1 text-xs text-emerald-500">
                  <Check className="w-3 h-3" />
                  Password updated
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
