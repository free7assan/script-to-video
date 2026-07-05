"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 32 32" className="w-full h-full">
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF7A00"/>
              <stop offset="100%" stopColor="#FF5500"/>
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="6" fill="#0d0d0d"/>
          <g fill="none" stroke="url(#logoGrad)" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 22 8 A 8 8 0 1 0 22 24" strokeWidth="4"/>
            <path d="M 12 16 L 26 16" strokeWidth="4"/>
            <path d="M 22 24 L 22 28" strokeWidth="3.5"/>
            <path d="M 19 26.5 L 22 30 L 25 26.5 Z" fill="#FF7A00" stroke="none"/>
            <path d="M 13 10 L 8 8" strokeWidth="2.5"/>
            <path d="M 10.5 16 L 6 16" strokeWidth="2.5"/>
            <path d="M 13 22 L 8 24" strokeWidth="2.5"/>
            <line x1="22" y1="28" x2="22" y2="30" stroke="#0d0d0d" strokeWidth="1.5"/>
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
