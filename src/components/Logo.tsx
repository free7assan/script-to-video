"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 32 32" className="w-full h-full">
          {/* Dark rounded square backdrop */}
          <rect x="1" y="1" width="30" height="30" rx="7" fill="#0d0d0d" />
          {/* Play triangle built from a dot grid */}
          <circle cx="9" cy="11" r="1.4" fill="#FF7A00" />
          <circle cx="13" cy="11" r="1.4" fill="#FF7A00" />
          <circle cx="17" cy="11" r="1.4" fill="#FF7A00" />
          <circle cx="21" cy="11" r="1.4" fill="#FF7A00" />
          <circle cx="9" cy="15" r="1.4" fill="#FF7A00" />
          <circle cx="13" cy="15" r="1.4" fill="#FF7A00" />
          <circle cx="17" cy="15" r="1.4" fill="#FF7A00" />
          <circle cx="9" cy="19" r="1.4" fill="#FF7A00" />
          <circle cx="13" cy="19" r="1.4" fill="#FF7A00" />
        </svg>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-orange/60" />
      </div>
      <span className="font-display text-base font-semibold tracking-tight hidden sm:inline">
        Videos<span className="text-orange">Scripter</span>
      </span>
    </Link>
  );
}
