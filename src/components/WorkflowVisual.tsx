"use client";

export function WorkflowVisual({ phase }: { phase: "outline" | "script" }) {
  if (phase === "outline") {
    return (
      <svg viewBox="0 0 240 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Header */}
        <rect x="10" y="10" width="220" height="20" rx="4" className="stroke-orange/20 fill-orange/[0.03]" strokeWidth="0.8" />
        <rect x="18" y="16" width="50" height="8" rx="4" className="fill-orange/20" />
        {/* Outline items */}
        {[
          { y: 40, w1: 120, w2: 60, active: true },
          { y: 58, w1: 140, w2: 40, active: false },
          { y: 76, w1: 100, w2: 80, active: false },
          { y: 94, w1: 130, w2: 50, active: false },
        ].map((item, i) => (
          <g key={i}>
            <rect
              x="10"
              y={item.y - 2}
              width="220"
              height="20"
              rx="4"
              className={item.active ? "stroke-orange/30 fill-orange/5" : "stroke-orange/10 fill-transparent"}
              strokeWidth={item.active ? "1" : "0.5"}
            >
              {item.active && <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />}
            </rect>
            <rect x="18" y={item.y + 2} width={item.w1} height="2.5" rx="1.25" className="fill-orange/25" />
            <rect x="18" y={item.y + 8} width={item.w2} height="2" rx="1" className="fill-orange/15" />
            {/* Drag handle */}
            <rect x="222" y={item.y + 2} width="4" height="12" rx="1" className="fill-orange/10" />
            {/* Duration badge */}
            <rect x={175} y={item.y + 2} width="30" height="10" rx="3" className="fill-orange/10 stroke-orange/15" strokeWidth="0.3" />
            <text x="190" y={item.y + 9} textAnchor="middle" className="fill-orange/25" fontSize="4" fontFamily="monospace">{`${30 + i * 15}s`}</text>
          </g>
        ))}
        {/* Add button */}
        <rect x="10" y="114" width="220" height="12" rx="4" className="stroke-orange/15 fill-transparent" strokeWidth="0.5" strokeDasharray="3 2" />
        <text x="120" y="122" textAnchor="middle" className="fill-orange/15" fontSize="4" fontFamily="monospace">+ ADD SECTION</text>
        {/* Scrollbar */}
        <rect x="238" y="10" width="2" height="118" rx="1" className="fill-orange/8" />
        <rect x="238" y="10" width="2" height="30" rx="1" className="fill-orange/20">
          <animate attributeName="y" values="10;80;10" dur="6s" repeatCount="indefinite" />
        </rect>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 240 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Toolbar */}
      <rect x="10" y="10" width="220" height="22" rx="4" className="stroke-orange/20 fill-orange/[0.03]" strokeWidth="0.8" />
      <rect x="18" y="15" width="60" height="12" rx="4" className="fill-orange/20" />
      <circle cx="200" cy="21" r="4" className="fill-orange/15" />
      <circle cx="214" cy="21" r="4" className="fill-orange/10" />
      {/* Title */}
      <rect x="10" y="38" width="160" height="6" rx="3" className="fill-orange/25" />
      {/* Body paragraphs */}
      {[
        { w: 210, h: 2, y: 52 },
        { w: 190, h: 2, y: 58 },
        { w: 200, h: 2, y: 64 },
        { w: 170, h: 2, y: 70 },
        { w: 90, h: 2, y: 76 },
        { w: 0, h: 0, y: 84 }, // gap
        { w: 195, h: 2, y: 84 },
        { w: 180, h: 2, y: 90 },
        { w: 210, h: 2, y: 96 },
        { w: 160, h: 2, y: 102 },
        { w: 110, h: 2, y: 108 },
      ].map((line, i) =>
        line.w > 0 ? (
          <rect key={i} x={i === 0 ? 10 : 14} y={line.y} width={line.w} height={line.h} rx="1" className={i === 0 ? "fill-orange/30" : "fill-orange/12"} />
        ) : null
      )}
      {/* Highlight line */}
      <rect x="14" y="64" width="200" height="2" rx="1" className="fill-orange/25" />
      <rect x="10" y="62" width="3" height="16" rx="1" className="fill-orange/40">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite" />
      </rect>
      {/* Page edges */}
      <rect x="10" y="36" width="220" height="82" rx="4" className="stroke-orange/10" strokeWidth="0.5" fill="none" />
      {/* Save indicator */}
      <rect x="180" y="114" width="20" height="4" rx="2" className="fill-orange/15" />
      <text x="190" y="117" textAnchor="middle" className="fill-orange/20" fontSize="3" fontFamily="monospace">SAVED</text>
    </svg>
  );
}
