"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Plus, LogIn, LogOut, LayoutDashboard, Loader2, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/Logo";
import { SignInModal } from "@/components/SignInModal";
import { useAuth } from "@/components/AuthProvider";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

const links = [
  { href: "/#pipeline", label: "Pipeline", id: "pipeline" },
  { href: "/#capabilities", label: "Capabilities", id: "capabilities" },
  { href: "/#workflow", label: "Workflow", id: "workflow" },
  { href: "/#pricing", label: "Pricing", id: "pricing" },
  { href: "/blog", label: "Blog", id: null },
];

export function LandingNav() {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<"login" | "signup">("login");
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [signingOut, setSigningOut] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Close the mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Scroll-spy: highlight the section currently in view (landing page only)
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }
    const els = ["pipeline", "capabilities", "workflow", "pricing"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const closeMobile = () => setMobileOpen(false);

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
        <div className="container relative mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <div className="flex items-center gap-1">
            <nav className="hidden md:flex items-center gap-0.5 mr-3 rounded-full border border-border/20 bg-foreground/[0.02] p-0.5 xl:absolute xl:left-1/2 xl:top-1/2 xl:mr-0 xl:-translate-x-1/2 xl:-translate-y-1/2">
              {links.map(({ href, label, id }) => {
                const isActive = id !== null && activeSection === id;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`h-7 px-3 rounded-full text-xs font-medium inline-flex items-center transition-all ${
                      isActive
                        ? "bg-orange/10 text-orange"
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            {loading ? (
              <div className="hidden md:flex h-8 w-8 rounded-lg items-center justify-center">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-muted-foreground" />
              </div>
            ) : user ? (
              <div className="hidden md:flex items-center gap-1.5">
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
              <div className="hidden md:flex items-center gap-1.5">
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
              </div>
            )}

            <div className="ml-2 pl-2 border-l border-border/20">
              <ThemeToggle />
            </div>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden ml-1 w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ──── Mobile menu ──── */}
      {mobileOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-14 z-40 bg-black/40 backdrop-blur-sm"
            onClick={closeMobile}
            aria-hidden="true"
          />
          <div className="md:hidden fixed top-14 inset-x-0 z-40 border-b border-border/30 bg-background/95 backdrop-blur-xl">
            <nav className="px-4 py-3 flex flex-col gap-0.5">
              {links.map(({ href, label, id }) => {
                const isActive = id !== null && activeSection === id;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMobile}
                    className={`h-11 px-3 rounded-lg flex items-center text-sm font-medium transition-all ${
                      isActive
                        ? "bg-orange/[0.07] text-orange"
                        : "text-muted-foreground hover:text-foreground hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}

              <div className="mt-2 pt-3 border-t border-border/20 flex flex-col gap-2">
                {loading ? (
                  <div className="h-11 flex items-center justify-center">
                    <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                  </div>
                ) : user ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={closeMobile}
                      className="h-11 px-3 rounded-lg flex items-center justify-center gap-2 bg-orange/10 text-orange text-sm font-semibold hover:bg-orange/20 transition-all"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard
                    </Link>
                    <button
                      onClick={async () => { closeMobile(); await handleLogout(); }}
                      disabled={signingOut}
                      className="h-11 px-3 rounded-lg flex items-center justify-center gap-2 border border-border/40 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all"
                    >
                      {signingOut ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <LogOut className="w-4 h-4" />
                      )}
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => { closeMobile(); setModalMode("login"); setShowModal(true); }}
                      className="h-11 px-3 rounded-lg flex items-center justify-center gap-2 border border-border/40 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all"
                    >
                      <LogIn className="w-4 h-4" />
                      Sign in
                    </button>
                    <button
                      onClick={() => { closeMobile(); setModalMode("signup"); setShowModal(true); }}
                      className="h-11 px-3 rounded-lg flex items-center justify-center gap-2 bg-orange text-black text-sm font-semibold hover:bg-orange/90 transition-all"
                    >
                      <Plus className="w-4 h-4" />
                      Get Started
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        </>
      )}

      <SignInModal open={showModal} onClose={() => setShowModal(false)} defaultMode={modalMode} />
    </>
  );
}
