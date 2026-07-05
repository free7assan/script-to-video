"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 32 32" className="w-full h-full">
          <rect width="32" height="32" rx="6" fill="#0d0d0d"/>
          <g fill="none" stroke="#FF7A00" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 22 8 A 8 8 0 1 0 22 24 Q 20 27 18 28" stroke-width="3.5"/>
            <path d="M 14 16 L 26 16" stroke-width="3.5"/>
            <path d="M 16 10 L 12 9" stroke-width="2.5"/>
            <path d="M 16 22 L 12 23" stroke-width="2.5"/>
          </g>
        </svg>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-orange/60" />
      </div>
      <span className="font-display text-base font-semibold tracking-tight hidden sm:inline">
        Go<span className="text-orange">Script</span>
      </span>
    </Link>
  );
}
