"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Library,
  Wand2,
  FileText,
  Settings,
  Video,
  ListVideo,
  LogOut,
  User,
  Loader2,
  Shield,
  Users,
  Activity,
  Cog,
  TrendingUp,
  Lightbulb,
  Bookmark,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/Logo";
import { useAuth } from "@/components/AuthProvider";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import { useState, useEffect } from "react";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/video/analyze", label: "Video Analyzer", icon: Video },
  { href: "/channels/new", label: "Channel Analyzer", icon: ListVideo },
  { href: "/blueprints", label: "Blueprints", icon: Library },
  { href: "/scripts/new", label: "Generator", icon: Wand2 },
  { href: "/scripts", label: "Scripts", icon: FileText },
];

const ideasLink = { href: "/ideas", label: "Ideas", icon: Lightbulb };
const trendingLink = { href: "/ideas/trending", label: "Trending", icon: TrendingUp };
const savedIdeasLink = { href: "/ideas/saved", label: "Saved Ideas", icon: Bookmark };
const ideasLinks = [ideasLink, trendingLink, savedIdeasLink];
const settingsLink = { href: "/settings", label: "Settings", icon: Cog };

const adminLinks = [
  { href: "/admin", label: "Admin Dashboard", icon: Settings },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/health", label: "Health", icon: Activity },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [ideasOpen, setIdeasOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (pathname.startsWith("/ideas")) setIdeasOpen(true);
  }, [pathname]);

  // Close the mobile drawer on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ──── Mobile top bar ──── */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-30 h-14 flex items-center gap-2 px-3 border-b border-border/40 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
        <button
          onClick={() => setMobileOpen(true)}
          className="w-9 h-9 -ml-1 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <Logo />
      </div>

      {/* ──── Backdrop ──── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed left-0 top-0 bottom-0 z-50 w-56 border-r border-border/40 bg-background/95 lg:bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40 flex flex-col transition-transform duration-200 ease-out lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center h-14 px-4 border-b border-border/30">
          <Logo />
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden ml-auto -mr-1 w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      <nav className="flex-1 flex flex-col gap-0.5 p-3 overflow-y-auto">
        {!user?.isAdmin && (
          <>
            {links.map(({ href, label, icon }) => (
              <NavLink key={href} href={href} label={label} icon={icon} isActive={pathname === href} />
            ))}

            {/* Ideas group */}
            <div>
              <button
                onClick={() => setIdeasOpen(!ideasOpen)}
                className={`flex items-center gap-3 h-9 px-3 rounded-lg text-sm font-medium transition-all w-full ${
                  pathname.startsWith("/ideas")
                    ? "text-orange"
                    : "text-muted-foreground hover:text-foreground hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                }`}
              >
                <Lightbulb className="w-4 h-4 shrink-0" />
                <span>Ideas</span>
                <ChevronDown className={`ml-auto w-3.5 h-3.5 shrink-0 transition-transform ${ideasOpen ? "" : "-rotate-90"}`} />
              </button>
              {ideasOpen && (
                <div className="space-y-0.5 ml-3 pl-3 border-l border-border/20">
                  {ideasLinks.map(({ href, label, icon }) => (
                    <NavLink key={href} href={href} label={label} icon={icon} isActive={pathname === href} />
                  ))}
                </div>
              )}
            </div>

            {/* Settings link */}
            <NavLink href={settingsLink.href} label={settingsLink.label} icon={settingsLink.icon} isActive={pathname === settingsLink.href} />
          </>
        )}

        {/* ──── Admin section (only for admins) ──── */}
        {user?.isAdmin && (
          <>
            <div className="flex items-center gap-3 mt-4 mb-1 px-3">
              <Shield className="w-3 h-3 text-orange/50" />
              <span className="text-[10px] font-mono text-orange/40 tracking-widest uppercase">Admin</span>
              <span className="flex-1 h-px bg-border/20" />
            </div>
            {adminLinks.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 h-9 px-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-orange/10 text-orange"
                      : "text-muted-foreground hover:text-foreground hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{label}</span>
                  {isActive && <span className="ml-auto w-1 h-1 rounded-full bg-orange" />}
                </Link>
              );
            })}
          </>
        )}
      </nav>

      <div className="border-t border-border/30">
        {!user?.isAdmin && (
          <div className="p-3">
            <UserMenu />
          </div>
        )}
        <div className="px-3 pb-3 pt-3">
          <div className="flex items-center justify-between px-3 h-9">
            <span className="text-xs text-muted-foreground">Theme</span>
            <div className="flex items-center gap-1">
              {user?.isAdmin && <SignOutButton />}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      </aside>
    </>
  );
}

function UserMenu() {
  const { user, loading, refresh } = useAuth();
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);

  const handleLogout = async () => {
    setSigningOut(true);
    try {
      const supabase = createSupabaseBrowserClient();
      await supabase.auth.signOut();
      await refresh();
      router.push("/login");
      router.refresh();
    } catch {}
    setSigningOut(false);
  };

  if (loading) {
    return (
      <div className="flex items-center gap-3 px-3 h-10">
        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
        <span className="text-xs text-muted-foreground">Loading...</span>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors group">
      <div className="w-7 h-7 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
        <User className="w-3.5 h-3.5 text-orange" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium truncate">{user.name}</p>
        <p className="text-[10px] text-muted-foreground/60 truncate">
          {user.isAdmin ? "Admin" : "User"}
        </p>
      </div>
      <button
        onClick={handleLogout}
        disabled={signingOut}
        className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-red-500/10 hover:text-red-400 transition-all"
        title="Sign out"
      >
        {signingOut ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : (
          <LogOut className="w-3.5 h-3.5" />
        )}
      </button>
    </div>
  );
}

function SignOutButton() {
  const { refresh } = useAuth();
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);

  const handleLogout = async () => {
    setSigningOut(true);
    try {
      const supabase = createSupabaseBrowserClient();
      await supabase.auth.signOut();
      await refresh();
      router.push("/admin");
      router.refresh();
    } catch {}
    setSigningOut(false);
  };

  return (
    <button
      onClick={handleLogout}
      disabled={signingOut}
      className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground/50 hover:text-red-400 hover:bg-red-500/10 transition-all"
      title="Sign out"
    >
      {signingOut ? (
        <Loader2 className="w-3.5 h-3.5 animate-spin" />
      ) : (
        <LogOut className="w-3.5 h-3.5" />
      )}
    </button>
  );
}

function NavLink({ href, label, icon: Icon, isActive }: { href: string; label: string; icon: typeof LayoutDashboard; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 h-9 px-3 rounded-lg text-sm font-medium transition-all ${
        isActive
          ? "bg-orange/10 text-orange"
          : "text-muted-foreground hover:text-foreground hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
      }`}
    >
      <Icon className="w-4 h-4 shrink-0" />
      <span>{label}</span>
      {isActive && <span className="ml-auto w-1 h-1 rounded-full bg-orange" />}
    </Link>
  );
}
