"use client";

export function PipelineVisual({ step }: { step: "ingest" | "analyze" | "generate" }) {
  if (step === "ingest") {
    return (
      <svg viewBox="0 0 240 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g-orange" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
        </defs>
        {/* YouTube icon */}
        <rect x="12" y="35" width="40" height="28" rx="6" className="stroke-orange/30 fill-orange/5" strokeWidth="1.2" />
        <polygon points="28,42 28,56 40,49" className="fill-orange/40" />
        {/* Arrow */}
        <path d="M55 49H75" stroke="#F97316" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4">
          <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M72 44L80 49L72 54" stroke="#F97316" strokeWidth="1.2" opacity="0.5" />
        {/* Document stack */}
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={85 + i * 2}
            y={38 + i * 3}
            width="36"
            height="24"
            rx="3"
            className="stroke-orange/25 fill-orange/[0.04]"
            strokeWidth="0.8"
          />
        ))}
        {/* Text lines on doc */}
        <rect x="93" y="43" width="20" height="1.5" rx="0.75" className="fill-orange/20" />
        <rect x="93" y="47" width="14" height="1.5" rx="0.75" className="fill-orange/15" />
        <rect x="93" y="51" width="17" height="1.5" rx="0.75" className="fill-orange/10" />
        {/* Data flow arrow */}
        <path d="M125 49H145" stroke="#F97316" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4">
          <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M142 44L150 49L142 54" stroke="#F97316" strokeWidth="1.2" opacity="0.5" />
        {/* Database cylinder */}
        <ellipse cx="180" cy="42" rx="22" ry="6" className="fill-orange/10 stroke-orange/25" strokeWidth="1" />
        <path d="M158 42V58C158 61.3 167.8 64 180 64C192.2 64 202 61.3 202 58V42" className="stroke-orange/25 fill-orange/[0.03]" strokeWidth="1" />
        <ellipse cx="180" cy="58" rx="22" ry="6" className="fill-orange/5 stroke-orange/25" strokeWidth="1" />
        {/* DB rings */}
        <ellipse cx="180" cy="50" rx="22" ry="6" className="stroke-orange/10" strokeWidth="0.5" fill="none" />
        {/* Bottom label */}
        <text x="180" y="80" textAnchor="middle" className="fill-orange/30" fontSize="6" fontFamily="monospace">Videos → Transcripts</text>
        {/* Floating dots */}
        <circle cx="30" cy="80" r="1.5" className="fill-orange/30">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="78" r="1" className="fill-orange/20">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="80" r="1.2" className="fill-orange/25">
          <animate attributeName="opacity" values="0.1;0.35;0.1" dur="3.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    );
  }

  if (step === "analyze") {
    return (
      <svg viewBox="0 0 240 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g-orng" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
        </defs>
        {/* Source video */}
        <rect x="15" y="30" width="38" height="26" rx="4" className="stroke-orange/30 fill-orange/5" strokeWidth="1" />
        <polygon points="28,38 28,48 38,43" className="fill-orange/35" />
        {/* Magnifying glass */}
        <circle cx="80" cy="43" r="12" className="stroke-orange/30 fill-orange/5" strokeWidth="1" />
        <path d="M89 52L95 58" className="stroke-orange/30" strokeWidth="1.5" strokeLinecap="round" />
        {/* Pattern extraction particles */}
        {[
          { x: 115, y: 35, w: 35 },
          { x: 115, y: 46, w: 25 },
          { x: 115, y: 57, w: 30 },
        ].map((bar, i) => (
          <rect key={i} x={bar.x} y={bar.y} width={bar.w} height="4" rx="2" className="fill-orange/20">
            <animate attributeName="width" values={`${bar.w};${bar.w + 8};${bar.w}`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </rect>
        ))}
        {/* Divider */}
        <line x1="115" y1="68" x2="220" y2="68" className="stroke-orange/10" strokeWidth="0.5" strokeDasharray="2 2" />
        {/* Tag pills */}
        {["HOOK", "CTA", "STRUCT"].map((tag, i) => (
          <rect
            key={i}
            x={115 + i * 38}
            y={74}
            width="30"
            height="12"
            rx="6"
            className={`fill-orange/${10 + i * 5} stroke-orange/${15 + i * 5}`}
            strokeWidth="0.5"
          />
        ))}
        {["HOOK", "CTA", "STRUCT"].map((tag, i) => (
          <text key={i} x={130 + i * 38} y={82} textAnchor="middle" className="fill-orange/40" fontSize="5" fontFamily="monospace" fontWeight="600">{tag}</text>
        ))}
        {/* Score bars */}
        <rect x="115" y="92" width="50" height="3" rx="1.5" className="fill-orange/25" />
        <rect x="115" y="98" width="35" height="3" rx="1.5" className="fill-orange/15" />
        <rect x="115" y="104" width="42" height="3" rx="1.5" className="fill-orange/20" />
        {/* Animated wave */}
        <path d="M170 43 Q177 37 184 43 Q191 49 198 43" stroke="#F97316" strokeWidth="1" opacity="0.2" fill="none">
          <animate attributeName="d" values="M170 43 Q177 37 184 43 Q191 49 198 43;M170 43 Q177 49 184 43 Q191 37 198 43;M170 43 Q177 37 184 43 Q191 49 198 43" dur="4s" repeatCount="indefinite" />
        </path>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 240 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g-orn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
      </defs>
      {/* Left: outline panels */}
      <rect x="10" y="18" width="65" height="28" rx="4" className="stroke-orange/20 fill-orange/[0.03]" strokeWidth="0.8" />
      <rect x="8" y="14" width="65" height="28" rx="4" className="stroke-orange/30 fill-orange/5" strokeWidth="1" />
      {/* Outline lines */}
      <rect x="16" y="22" width="30" height="2" rx="1" className="fill-orange/30" />
      <rect x="16" y="27" width="22" height="2" rx="1" className="fill-orange/20" />
      <rect x="16" y="32" width="25" height="2" rx="1" className="fill-orange/15" />
      {/* Arrow between panels */}
      <path d="M78 30H88" stroke="#F97316" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.4">
        <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="1.5s" repeatCount="indefinite" />
      </path>
      <path d="M86 26L92 30L86 34" stroke="#F97316" strokeWidth="1" opacity="0.5" />
      {/* Right: full script */}
      <rect x="96" y="14" width="80" height="42" rx="4" className="stroke-orange/30 fill-orange/5" strokeWidth="1" />
      {/* Script lines */}
      <rect x="104" y="22" width="40" height="2" rx="1" className="fill-orange/30" />
      <rect x="104" y="27" width="60" height="1.5" rx="0.75" className="fill-orange/15" />
      <rect x="104" y="32" width="55" height="1.5" rx="0.75" className="fill-orange/12" />
      <rect x="104" y="37" width="50" height="1.5" rx="0.75" className="fill-orange/10" />
      <rect x="104" y="42" width="58" height="1.5" rx="0.75" className="fill-orange/12" />
      {/* Cursor flash */}
      <rect x="164" y="27" width="1.5" height="14" rx="0.75" className="fill-orange/40">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>
      {/* Bottom: settings/tone panel */}
      <rect x="96" y="62" width="80" height="18" rx="3" className="stroke-orange/15 fill-orange/[0.02]" strokeWidth="0.8" />
      <rect x="104" y="68" width="12" height="6" rx="3" className="fill-orange/15" />
      <rect x="120" y="69" width="18" height="1.5" rx="0.75" className="fill-orange/10" />
      <rect x="120" y="73" width="14" height="1.5" rx="0.75" className="fill-orange/8" />
      {/* Wand sparkle dots */}
      <circle cx="185" cy="22" r="1" className="fill-orange/40">
        <animate attributeName="opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="182" cy="30" r="0.8" className="fill-orange/30">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="187" cy="38" r="0.6" className="fill-orange/25">
        <animate attributeName="opacity" values="0;0.3;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      {/* Bottom label */}
      <text x="138" y="100" textAnchor="middle" className="fill-orange/25" fontSize="5" fontFamily="monospace">Outline → Script</text>
    </svg>
  );
}
