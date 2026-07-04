"use client";

export function CapabilityVisual({ type }: { type: "transcript" | "patterns" | "phases" | "blueprint" }) {
  if (type === "transcript") {
    return (
      <svg viewBox="0 0 240 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Globe icon */}
        <circle cx="32" cy="30" r="14" className="stroke-orange/25 fill-orange/5" strokeWidth="1" />
        <ellipse cx="32" cy="30" rx="7" ry="14" className="stroke-orange/15" strokeWidth="0.5" />
        <line x1="18" y1="30" x2="46" y2="30" className="stroke-orange/15" strokeWidth="0.5" />
        {/* Language tags */}
        {[
          { x: 60, label: "EN", w: 22 },
          { x: 85, label: "ES", w: 20 },
          { x: 108, label: "JP", w: 18 },
          { x: 129, label: "FR", w: 18 },
        ].map((lang, i) => (
          <g key={i}>
            <rect x={lang.x} y={22 + i * 12} width={lang.w} height="10" rx="5" className="fill-orange/10 stroke-orange/20" strokeWidth="0.5" />
            <text x={lang.x + lang.w / 2} y={29 + i * 12} textAnchor="middle" className="fill-orange/40" fontSize="5" fontFamily="monospace" fontWeight="600">{lang.label}</text>
          </g>
        ))}
        {/* Transcript lines below */}
        <rect x="12" y="60" width="100" height="2.5" rx="1.25" className="fill-orange/20" />
        <rect x="12" y="66" width="85" height="2.5" rx="1.25" className="fill-orange/12" />
        <rect x="12" y="72" width="92" height="2.5" rx="1.25" className="fill-orange/15" />
        <rect x="12" y="78" width="70" height="2.5" rx="1.25" className="fill-orange/8" />
        {/* Animated cursor */}
        <rect x="106" y="66" width="1.5" height="12" rx="0.75" className="fill-orange/30">
          <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
        </rect>
        {/* Right side: language indicators */}
        <circle cx="170" cy="30" r="1.5" className="fill-orange/30">
          <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="185" cy="25" r="1" className="fill-orange/20">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="175" cy="40" r="1.2" className="fill-orange/25">
          <animate attributeName="opacity" values="0.1;0.35;0.1" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="195" cy="35" r="0.8" className="fill-orange/15">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.8s" repeatCount="indefinite" />
        </circle>
        {/* Globe grid lines */}
        <circle cx="170" cy="62" r="18" className="stroke-orange/10" strokeWidth="0.5" />
        <circle cx="170" cy="62" r="12" className="stroke-orange/8" strokeWidth="0.3" />
        <line x1="152" y1="62" x2="188" y2="62" className="stroke-orange/8" strokeWidth="0.3" />
        <line x1="170" y1="44" x2="170" y2="80" className="stroke-orange/8" strokeWidth="0.3" />
        {/* 99.9% */}
        <text x="170" y="100" textAnchor="middle" className="fill-orange/20" fontSize="5" fontFamily="monospace">99.9% UPTIME</text>
      </svg>
    );
  }

  if (type === "patterns") {
    return (
      <svg viewBox="0 0 240 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Radar chart */}
        <polygon points="120,18 160,48 148,88 92,88 80,48" className="stroke-orange/20 fill-orange/5" strokeWidth="0.8" />
        <polygon points="120,32 145,52 138,75 102,75 95,52" className="stroke-orange/15 fill-orange/[0.03]" strokeWidth="0.5" />
        <polygon points="120,42 135,55 130,66 110,66 105,55" className="stroke-orange/10 fill-orange/[0.02]" strokeWidth="0.3" />
        <line x1="120" y1="18" x2="120" y2="88" className="stroke-orange/10" strokeWidth="0.5" />
        <line x1="80" y1="48" x2="160" y2="48" className="stroke-orange/10" strokeWidth="0.5" />
        <line x1="92" y1="88" x2="148" y2="48" className="stroke-orange/8" strokeWidth="0.3" />
        <line x1="148" y1="88" x2="80" y2="48" className="stroke-orange/8" strokeWidth="0.3" />
        {/* Data dots */}
        {[
          { x: 120, y: 22, s: 3 },
          { x: 148, y: 50, s: 2 },
          { x: 138, y: 80, s: 2.5 },
          { x: 102, y: 80, s: 2 },
          { x: 92, y: 50, s: 2.5 },
        ].map((dot, i) => (
          <circle key={i} cx={dot.x} cy={dot.y} r={dot.s} className="fill-orange/40">
            <animate attributeName="r" values={`${dot.s};${dot.s + 0.8};${dot.s}`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
        {/* Side labels */}
        {[
          { x: 55, y: 48, label: "HOOK" },
          { x: 120, y: 12, label: "STRUCT" },
          { x: 168, y: 48, label: "CTA" },
          { x: 140, y: 98, label: "TONE" },
          { x: 85, y: 98, label: "FLOW" },
        ].map((l, i) => (
          <text key={i} x={l.x} y={l.y} textAnchor="middle" className="fill-orange/20" fontSize="4" fontFamily="monospace">{l.label}</text>
        ))}
        {/* Bottom score bar */}
        <rect x="30" y="108" width="180" height="4" rx="2" className="fill-orange/8" />
        <rect x="30" y="108" width="140" height="4" rx="2" className="fill-orange/25">
          <animate attributeName="width" values="120;150;120" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="220" y="111" textAnchor="end" className="fill-orange/20" fontSize="4" fontFamily="monospace">12 PATTERNS</text>
      </svg>
    );
  }

  if (type === "phases") {
    return (
      <svg viewBox="0 0 240 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Phase 1 badge */}
        <rect x="10" y="14" width="28" height="12" rx="6" className="fill-orange/15 stroke-orange/25" strokeWidth="0.5" />
        <text x="24" y="22" textAnchor="middle" className="fill-orange/40" fontSize="5" fontFamily="monospace" fontWeight="600">P1</text>
        {/* Phase 1 panel */}
        <rect x="10" y="28" width="90" height="36" rx="4" className="stroke-orange/25 fill-orange/[0.04]" strokeWidth="1" />
        <rect x="18" y="36" width="30" height="2.5" rx="1.25" className="fill-orange/25" />
        <rect x="18" y="42" width="22" height="2" rx="1" className="fill-orange/15" />
        <rect x="18" y="48" width="28" height="2" rx="1" className="fill-orange/18" />
        <rect x="18" y="54" width="18" height="2" rx="1" className="fill-orange/10" />
        {/* Arrow */}
        <path d="M105 46H120" stroke="#F97316" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4">
          <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M117 42L125 46L117 50" stroke="#F97316" strokeWidth="1.2" opacity="0.5" />
        {/* Phase 2 badge */}
        <rect x="134" y="14" width="28" height="12" rx="6" className="fill-orange/15 stroke-orange/25" strokeWidth="0.5" />
        <text x="148" y="22" textAnchor="middle" className="fill-orange/40" fontSize="5" fontFamily="monospace" fontWeight="600">P2</text>
        {/* Phase 2 panel */}
        <rect x="134" y="28" width="96" height="50" rx="4" className="stroke-orange/30 fill-orange/5" strokeWidth="1" />
        <rect x="142" y="36" width="35" height="2.5" rx="1.25" className="fill-orange/30" />
        <rect x="142" y="42" width="80" height="1.5" rx="0.75" className="fill-orange/15" />
        <rect x="142" y="47" width="72" height="1.5" rx="0.75" className="fill-orange/12" />
        <rect x="142" y="52" width="60" height="1.5" rx="0.75" className="fill-orange/10" />
        <rect x="142" y="57" width="68" height="1.5" rx="0.75" className="fill-orange/12" />
        <rect x="142" y="62" width="75" height="1.5" rx="0.75" className="fill-orange/14" />
        <rect x="142" y="67" width="55" height="1.5" rx="0.75" className="fill-orange/8" />
        {/* Cursor */}
        <rect x="220" y="42" width="1.5" height="26" rx="0.75" className="fill-orange/30">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>
        {/* Connecting dashed line */}
        <line x1="55" y1="72" x2="180" y2="72" className="stroke-orange/10" strokeWidth="0.5" strokeDasharray="2 3" />
        {/* Checkmark */}
        <path d="M120 88 L124 92 L132 84" stroke="#F97316" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="138" y="90" className="fill-orange/20" fontSize="5" fontFamily="monospace">2 PHASES</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 240 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bookshelf */}
      <line x1="10" y1="22" x2="230" y2="22" className="stroke-orange/20" strokeWidth="1" />
      <line x1="10" y1="58" x2="230" y2="58" className="stroke-orange/20" strokeWidth="1" />
      <line x1="10" y1="92" x2="230" y2="92" className="stroke-orange/20" strokeWidth="1" />
      {/* Shelf dividers */}
      <line x1="10" y1="20" x2="10" y2="94" className="stroke-orange/15" strokeWidth="1" />
      <line x1="230" y1="20" x2="230" y2="94" className="stroke-orange/15" strokeWidth="1" />
      {/* Books on shelf 1 */}
      {[
        { x: 24, w: 18, h: 30, c: "fill-orange/15" },
        { x: 46, w: 22, h: 26, c: "fill-orange/10" },
        { x: 72, w: 16, h: 28, c: "fill-orange/20" },
        { x: 92, w: 20, h: 22, c: "fill-orange/8" },
        { x: 116, w: 28, h: 32, c: "fill-orange/18" },
        { x: 148, w: 18, h: 24, c: "fill-orange/12" },
        { x: 170, w: 24, h: 30, c: "fill-orange/15" },
        { x: 198, w: 20, h: 26, c: "fill-orange/10" },
      ].map((book, i) => (
        <rect key={i} x={book.x} y={22 - book.h + 2} width={book.w} height={book.h} rx="1" className={`${book.c} stroke-orange/15`} strokeWidth="0.3" />
      ))}
      {/* Books on shelf 2 */}
      {[
        { x: 30, w: 22, h: 25, c: "fill-orange/10" },
        { x: 56, w: 18, h: 28, c: "fill-orange/15" },
        { x: 78, w: 26, h: 20, c: "fill-orange/8" },
        { x: 108, w: 20, h: 30, c: "fill-orange/18" },
        { x: 132, w: 16, h: 24, c: "fill-orange/12" },
        { x: 152, w: 30, h: 28, c: "fill-orange/15" },
        { x: 186, w: 22, h: 22, c: "fill-orange/10" },
      ].map((book, i) => (
        <rect key={i} x={book.x} y={58 - book.h + 2} width={book.w} height={book.h} rx="1" className={`${book.c} stroke-orange/15`} strokeWidth="0.3" />
      ))}
      {/* Books on shelf 3 */}
      {[
        { x: 40, w: 24, h: 22, c: "fill-orange/12" },
        { x: 70, w: 20, h: 26, c: "fill-orange/8" },
        { x: 96, w: 18, h: 20, c: "fill-orange/15" },
        { x: 120, w: 28, h: 24, c: "fill-orange/10" },
        { x: 154, w: 22, h: 28, c: "fill-orange/18" },
        { x: 182, w: 20, h: 22, c: "fill-orange/12" },
      ].map((book, i) => (
        <rect key={i} x={book.x} y={92 - book.h + 2} width={book.w} height={book.h} rx="1" className={`${book.c} stroke-orange/15`} strokeWidth="0.3" />
      ))}
      {/* Spine highlights */}
      {[34, 88, 140, 180].map((x, i) => (
        <rect key={i} x={x} y={24} width="1.5" height="10" rx="0.5" className="fill-orange/30">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
        </rect>
      ))}
      {/* Active book glow */}
      <rect x="116" y="0" width="28" height="22" rx="2" className="fill-orange/10 stroke-orange/25" strokeWidth="0.5" />
      <text x="130" y="13" textAnchor="middle" className="fill-orange/40" fontSize="4" fontFamily="monospace" fontWeight="600">CHANNEL</text>
      {/* Infinity symbol */}
      <text x="210" y="110" textAnchor="middle" className="fill-orange/20" fontSize="8" fontFamily="monospace">∞</text>
      <text x="170" y="115" textAnchor="middle" className="fill-orange/15" fontSize="4" fontFamily="monospace">BLUEPRINTS</text>
    </svg>
  );
}
