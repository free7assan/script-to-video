"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="relative w-8 h-8">
        <img src="/icon.png" alt="GoScript" className="w-full h-full rounded-xl" />
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-orange/60" />
      </div>
      <span className="font-display text-base font-semibold tracking-tight hidden sm:inline">
        Go<span className="text-orange">Script</span>
      </span>
    </Link>
  );
}
