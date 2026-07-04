"use client";

import { usePathname } from "next/navigation";
import { LandingNav } from "@/components/LandingNav";
import { Sidebar } from "@/components/Sidebar";

const authRoutes = new Set(["/login", "/signup", "/admin"]);

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAuth = authRoutes.has(pathname);

  // Auth pages — landing nav + centered content, no sidebar
  if (isAuth) {
    return (
      <>
        <LandingNav />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          {children}
        </main>
      </>
    );
  }

  if (isHome) {
    return (
      <>
        <LandingNav />
        <main className="relative z-10">
          {children}
        </main>
      </>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-56 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
