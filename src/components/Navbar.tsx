"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Library, Wand2, FileText, Settings } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/scripts/new", label: "Generator", icon: Wand2 },
  { href: "/scripts", label: "Scripts", icon: FileText },
  { href: "/blueprints", label: "Blueprints", icon: Library },
  { href: "/admin", label: "Settings", icon: Settings },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`btn-ghost text-xs sm:text-sm ${
                  isActive ? "bg-orange/10 text-orange" : ""
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{label}</span>
                {isActive && <span className="w-1 h-1 rounded-full bg-orange" />}
              </Link>
            );
          })}
          <div className="ml-1 pl-1 border-l border-border/30">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
