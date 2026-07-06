"use client";

function det(i: number, offset = 0): number {
  return ((i * 137 + 43 + offset) * 71 + 13) % 100 / 100;
}

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[3/4]">
      <svg
        viewBox="0 0 500 600"
        className="w-full h-full relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g-orange" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
          <linearGradient id="g-dim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="strong-glow">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        {/* ═══ PANEL 1: INGEST ═══ */}
        <g filter="url(#soft-glow)">
          <rect x="55" y="70" width="170" height="150" rx="14" fill="#0d0d0d" stroke="#F97316" strokeOpacity="0.12" strokeWidth="0.8" />
        </g>
        <rect x="55" y="70" width="170" height="150" rx="14" fill="url(#g-dim)" fillOpacity="0.05" />

        {/* Panel 1 badge */}
        <rect x="70" y="83" width="52" height="16" rx="4" fill="#F97316" fillOpacity="0.08" />
        <text x="96" y="94" textAnchor="middle" fill="#F97316" fontSize="6.5" fontFamily="monospace" letterSpacing="1.5" opacity="0.6">STEP 01</text>

        {/* YouTube logo placeholder */}
        <rect x="80" y="112" width="28" height="20" rx="5" fill="#F97316" fillOpacity="0.1" stroke="#F97316" strokeOpacity="0.15" strokeWidth="0.5" />
        <polygon points="87,117 87,127 96,122" fill="#F97316" opacity="0.4" />

        <text x="118" y="126" fill="#F97316" fontSize="8" fontFamily="monospace" fontWeight="600" opacity="0.5">YouTube</text>
        <text x="118" y="138" fill="#F97316" fontSize="6" fontFamily="monospace" opacity="0.2">Channel URL</text>

        {/* Transcript lines preview */}
        <rect x="80" y="152" width="130" height="4" rx="2" fill="#F97316" opacity="0.08" />
        <rect x="80" y="160" width="110" height="4" rx="2" fill="#F97316" opacity="0.06" />
        <rect x="80" y="168" width="120" height="4" rx="2" fill="#F97316" opacity="0.06" />
        <rect x="80" y="176" width="95" height="4" rx="2" fill="#F97316" opacity="0.05" />
        <rect x="80" y="184" width="125" height="4" rx="2" fill="#F97316" opacity="0.06" />
        <rect x="80" y="192" width="105" height="4" rx="2" fill="#F97316" opacity="0.05" />

        {/* Panel 1 arrow labels */}
        <text x="140" y="210" textAnchor="middle" fill="#F97316" fontSize="6" fontFamily="monospace" opacity="0.12">
          Videos → Transcripts
        </text>

        {/* ═══ ARROW 1 → 2 ═══ */}
        <path d="M225 145 L245 145" stroke="#F97316" strokeWidth="0.5" opacity="0.15" />
        <path d="M240 140 L248 145 L240 150" stroke="#F97316" strokeWidth="0.5" opacity="0.15" />
        <circle cx="235" cy="145" r="2" fill="#F97316" opacity="0.08">
          <animate attributeName="cx" values="225;245;225" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.05;0.2;0.05" dur="2.5s" repeatCount="indefinite" />
        </circle>

        {/* ═══ PANEL 2: ANALYZE ═══ */}
        <g filter="url(#soft-glow)">
          <rect x="270" y="70" width="170" height="150" rx="14" fill="#0d0d0d" stroke="#F97316" strokeOpacity="0.12" strokeWidth="0.8" />
        </g>
        <rect x="270" y="70" width="170" height="150" rx="14" fill="url(#g-dim)" fillOpacity="0.05" />

        {/* Panel 2 badge */}
        <rect x="285" y="83" width="52" height="16" rx="4" fill="#F97316" fillOpacity="0.08" />
        <text x="311" y="94" textAnchor="middle" fill="#F97316" fontSize="6.5" fontFamily="monospace" letterSpacing="1.5" opacity="0.6">STEP 02</text>

        {/* Magnifying glass */}
        <circle cx="298" cy="121" r="12" stroke="#F97316" strokeOpacity="0.2" strokeWidth="1" fill="none" />
        <line x1="307" y1="130" x2="316" y2="139" stroke="#F97316" strokeOpacity="0.15" strokeWidth="1" />

        <text x="320" y="126" fill="#F97316" fontSize="8" fontFamily="monospace" fontWeight="600" opacity="0.5">Analyze</text>
        <text x="320" y="138" fill="#F97316" fontSize="6" fontFamily="monospace" opacity="0.2">Patterns</text>

        {/* Radar chart placeholder */}
        <polygon points="300,155 310,180 295,190 280,180" stroke="#F97316" strokeOpacity="0.06" strokeWidth="0.5" fill="none" />
        <polygon points="300,160 307,178 296,185 287,178" stroke="#F97316" strokeOpacity="0.1" strokeWidth="0.5" fill="none" />
        <circle cx="300" cy="172" r="2" fill="#F97316" opacity="0.2">
          <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Score bars */}
        {[
          { label: "HOOK", w: 35 },
          { label: "STRC", w: 28 },
          { label: "CTA", w: 22 },
          { label: "TONE", w: 30 },
        ].map((item, i) => (
          <g key={`bar${i}`}>
            <text x={338} y={152 + i * 14} fill="#F97316" fontSize="5" fontFamily="monospace" opacity="0.15">{item.label}</text>
            <rect x={374} y={149 + i * 14} width="35" height="3" rx="1.5" fill="#F97316" opacity="0.04" />
            <rect x={374} y={149 + i * 14} width={item.w} height="3" rx="1.5" fill="#F97316" opacity="0.2">
              <animate attributeName="width" values={`${item.w * 0.7};${item.w};${item.w * 0.7}`} dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
            </rect>
          </g>
        ))}

        {/* Panel 2 arrow labels */}
        <text x="355" y="210" textAnchor="middle" fill="#F97316" fontSize="6" fontFamily="monospace" opacity="0.12">
          Patterns → DNA
        </text>

        {/* ═══ VERTICAL ARROW (INGEST down to ANALYZE) ═══ */}
        <path d="M140 220 L140 245" stroke="#F97316" strokeWidth="0.4" opacity="0.08" />
        <path d="M135 242 L140 250 L145 242" stroke="#F97316" strokeWidth="0.4" opacity="0.08" />

        {/* ═══ VERTICAL ARROW (monitor side down) ═══ */}
        <path d="M355 220 L355 245" stroke="#F97316" strokeWidth="0.4" opacity="0.08" />
        <path d="M350 242 L355 250 L360 242" stroke="#F97316" strokeWidth="0.4" opacity="0.08" />

        {/* ═══ ARROW 2 → 3 (upper) ═══ */}
        <path d="M225 280 L245 280" stroke="#F97316" strokeWidth="0.5" opacity="0.15" />
        <path d="M240 275 L248 280 L240 285" stroke="#F97316" strokeWidth="0.5" opacity="0.15" />
        <circle cx="235" cy="280" r="2" fill="#F97316" opacity="0.08">
          <animate attributeName="cx" values="225;245;225" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.05;0.2;0.05" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* ═══ ARROW 3 → 4 (lower) ═══ */}
        <path d="M225 415 L245 415" stroke="#F97316" strokeWidth="0.5" opacity="0.15" />
        <path d="M240 410 L248 415 L240 420" stroke="#F97316" strokeWidth="0.5" opacity="0.15" />
        <circle cx="235" cy="415" r="2" fill="#F97316" opacity="0.08">
          <animate attributeName="cx" values="225;245;225" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.05;0.2;0.05" dur="3.5s" repeatCount="indefinite" />
        </circle>

        {/* ═══ PANEL 3: OUTLINE ═══ */}
        <g filter="url(#soft-glow)">
          <rect x="55" y="270" width="170" height="130" rx="14" fill="#0d0d0d" stroke="#F97316" strokeOpacity="0.12" strokeWidth="0.8" />
        </g>
        <rect x="55" y="270" width="170" height="130" rx="14" fill="url(#g-dim)" fillOpacity="0.05" />

        {/* Panel 3 badge */}
        <rect x="70" y="283" width="52" height="16" rx="4" fill="#F97316" fillOpacity="0.08" />
        <text x="96" y="294" textAnchor="middle" fill="#F97316" fontSize="6.5" fontFamily="monospace" letterSpacing="1.5" opacity="0.6">STEP 03</text>

        <rect x="80" y="312" width="28" height="20" rx="5" fill="#F97316" fillOpacity="0.1" stroke="#F97316" strokeOpacity="0.15" strokeWidth="0.5" />
        <rect x="84" y="316" width="20" height="4" rx="1" fill="#F97316" opacity="0.15" />
        <rect x="84" y="322" width="14" height="4" rx="1" fill="#F97316" opacity="0.1" />

        <text x="118" y="326" fill="#F97316" fontSize="8" fontFamily="monospace" fontWeight="600" opacity="0.5">Outline</text>
        <text x="118" y="338" fill="#F97316" fontSize="6" fontFamily="monospace" opacity="0.2">Structure</text>

        {/* Outline items */}
        {["Introduction", "Main Point 1", "Main Point 2", "Conclusion"].map((item, i) => (
          <g key={`outline${i}`}>
            <rect x={i === 1 ? 80 : 80} y={350 + i * 14} width={i === 0 ? 100 : i === 1 ? 90 : i === 2 ? 85 : 95} height="3" rx="1.5" fill="#F97316" opacity={i === 0 ? 0.15 : 0.05} />
            <circle cx={90 + (i === 0 ? 50 : i === 1 ? 45 : i === 2 ? 42 : 47)} cy={358 + i * 14} r="2" fill="#F97316" opacity={0.04 + det(i, 0) * 0.06} />
            <text x={86} y={350 + i * 14 + 7} fill="#F97316" fontSize="4" fontFamily="monospace" opacity={i === 0 ? 0.25 : 0.08}>
              {i === 0 ? "● Intro" : i === 1 ? "● Key Point" : i === 2 ? "● Analysis" : "● Summary"}
            </text>
          </g>
        ))}

        {/* ═══ PANEL 4: SCRIPT ═══ */}
        <g filter="url(#soft-glow)">
          <rect x="55" y="420" width="170" height="110" rx="14" fill="#0d0d0d" stroke="#F97316" strokeOpacity="0.12" strokeWidth="0.8" />
        </g>
        <rect x="55" y="420" width="170" height="110" rx="14" fill="url(#g-dim)" fillOpacity="0.05" />

        {/* Panel 4 badge */}
        <rect x="70" y="433" width="52" height="16" rx="4" fill="#F97316" fillOpacity="0.08" />
        <text x="96" y="444" textAnchor="middle" fill="#F97316" fontSize="6.5" fontFamily="monospace" letterSpacing="1.5" opacity="0.6">STEP 04</text>

        <text x="82" y="468" fill="#F97316" fontSize="8" fontFamily="monospace" fontWeight="600" opacity="0.5">Script</text>
        <text x="120" y="468" fill="#F97316" fontSize="6" fontFamily="monospace" opacity="0.2">Full script</text>

        {/* Script body lines */}
        <rect x="80" y="486" width="130" height="3" rx="1.5" fill="#F97316" opacity="0.08" />
        <rect x="80" y="494" width="120" height="3" rx="1.5" fill="#F97316" opacity="0.06" />
        <rect x="80" y="502" width="125" height="3" rx="1.5" fill="#F97316" opacity="0.06" />
        <rect x="80" y="510" width="100" height="3" rx="1.5" fill="#F97316" opacity="0.05" />

        {/* Cursor */}
        <rect x="210" y="510" width="6" height="3" rx="1" fill="#F97316" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0;0.4" dur="1s" repeatCount="indefinite" />
        </rect>

        {/* Save indicator */}
        <rect x="164" y="520" width="46" height="8" rx="3" fill="#F97316" fillOpacity="0.06" />
        <text x="187" y="527" textAnchor="middle" fill="#F97316" fontSize="4.5" fontFamily="monospace" opacity="0.15">SAVED ✓</text>

        {/* ═══ RIGHT SIDE: BLUEPRINT ═══ */}
        <g filter="url(#soft-glow)">
          <rect x="270" y="270" width="170" height="260" rx="14" fill="#0d0d0d" stroke="#F97316" strokeOpacity="0.12" strokeWidth="0.8" />
        </g>
        <rect x="270" y="270" width="170" height="260" rx="14" fill="url(#g-dim)" fillOpacity="0.05" />

        {/* Panel R badge */}
        <rect x="285" y="283" width="72" height="16" rx="4" fill="#F97316" fillOpacity="0.08" />
        <text x="321" y="294" textAnchor="middle" fill="#F97316" fontSize="6.5" fontFamily="monospace" letterSpacing="1.5" opacity="0.6">LIBRARY</text>

        {/* Blueprint shelf */}
        <text x="285" y="320" fill="#F97316" fontSize="7" fontFamily="monospace" fontWeight="600" opacity="0.4">Your Blueprints</text>

        {/* Book spines on shelf */}
        {Array.from({ length: 5 }).map((_, i) => {
          const h = 30 + det(i, 0) * 25;
          const w = 14 + det(i, 1) * 8;
          return (
            <g key={`book${i}`}>
              <rect
                x={285 + i * 30}
                y={370 - h}
                width={w}
                height={h}
                rx="2"
                fill="#F97316"
                fillOpacity={0.04 + det(i, 2) * 0.04}
                stroke="#F97316"
                strokeOpacity="0.06"
                strokeWidth="0.3"
              >
                <animate attributeName="opacity" values={`${0.03 + det(i, 2) * 0.03};${0.07 + det(i, 3) * 0.06};${0.03 + det(i, 2) * 0.03}`} dur={`${3 + i * 0.6}s`} repeatCount="indefinite" />
              </rect>
            </g>
          );
        })}

        {/* Shelf base */}
        <rect x="280" y="373" width="150" height="2" rx="1" fill="#F97316" opacity="0.08" />

        {/* Recent blueprint panel */}
        <rect x="285" y="388" width="140" height="30" rx="6" stroke="#F97316" strokeOpacity="0.06" strokeWidth="0.3" fill="#F97316" fillOpacity="0.02" />
        <rect x="293" y="395" width="8" height="8" rx="2" fill="#F97316" opacity="0.12" />
        <text x="307" y="402" fill="#F97316" fontSize="5.5" fontFamily="monospace" opacity="0.2">MrBeast DNA</text>
        <text x="307" y="412" fill="#F97316" fontSize="4.5" fontFamily="monospace" opacity="0.08">24 patterns</text>

        <rect x="285" y="424" width="140" height="30" rx="6" stroke="#F97316" strokeOpacity="0.06" strokeWidth="0.3" fill="#F97316" fillOpacity="0.02" />
        <rect x="293" y="431" width="8" height="8" rx="2" fill="#F97316" opacity="0.08" />
        <text x="307" y="438" fill="#F97316" fontSize="5.5" fontFamily="monospace" opacity="0.15">Marques · MKBHD</text>
        <text x="307" y="448" fill="#F97316" fontSize="4.5" fontFamily="monospace" opacity="0.06">18 patterns</text>

        <rect x="285" y="460" width="140" height="30" rx="6" stroke="#F97316" strokeOpacity="0.06" strokeWidth="0.3" fill="#F97316" fillOpacity="0.02" />
        <rect x="293" y="467" width="8" height="8" rx="2" fill="#F97316" opacity="0.06" />
        <text x="307" y="474" fill="#F97316" fontSize="5.5" fontFamily="monospace" opacity="0.12">Podcast Patterns</text>
        <text x="307" y="484" fill="#F97316" fontSize="4.5" fontFamily="monospace" opacity="0.05">12 patterns</text>

        {/* Total count badge */}
        <rect x="316" y="500" width="78" height="16" rx="6" fill="#F97316" fillOpacity="0.06" stroke="#F97316" strokeOpacity="0.08" strokeWidth="0.3" />
        <text x="355" y="511" textAnchor="middle" fill="#F97316" fontSize="6.5" fontFamily="monospace" fontWeight="600" opacity="0.3">∞ Blueprints</text>

        {/* Brand watermark */}
        <text x="250" y="572" textAnchor="middle" fill="#F97316" fontSize="7" fontFamily="monospace" letterSpacing="5" opacity="0.06">
          DECONSTRUCT · REMIX · PERFORM
        </text>

      </svg>
    </div>
  );
}
