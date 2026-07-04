"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, LogIn, LogOut, LayoutDashboard, Loader2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/Logo";
import { SignInModal } from "@/components/SignInModal";
import { useAuth } from "@/components/AuthProvider";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

const links = [
  { href: "/#pipeline", label: "Pipeline" },
];

export function LandingNav() {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<"login" | "signup">("login");
  const { user, loading } = useAuth();
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);

  const handleLogout = async () => {
    setSigningOut(true);
    try {
      const supabase = createSupabaseBrowserClient();
      await supabase.auth.signOut();
      router.refresh();
    } catch {}
    setSigningOut(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/30">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <div className="flex items-center gap-1">
            <nav className="flex items-center gap-1 mr-3">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="h-8 px-3 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all inline-flex items-center"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {loading ? (
              <div className="h-8 w-8 rounded-lg flex items-center justify-center">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-muted-foreground" />
              </div>
            ) : user ? (
              <div className="flex items-center gap-1.5">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-orange/10 text-orange text-xs font-semibold hover:bg-orange/20 transition-all"
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  disabled={signingOut}
                  className="h-8 w-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all"
                >
                  {signingOut ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <LogOut className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => { setModalMode("login"); setShowModal(true); }}
                  className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  Sign in
                </button>
                <button
                  onClick={() => { setModalMode("signup"); setShowModal(true); }}
                  className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-orange text-black text-xs font-semibold hover:bg-orange/90 transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Get Started
                </button>
              </>
            )}

            <div className="ml-2 pl-2 border-l border-border/20">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <SignInModal open={showModal} onClose={() => setShowModal(false)} defaultMode={modalMode} />
    </>
  );
}
