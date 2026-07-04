"use client";

function det(i: number, offset = 0): number {
  return ((i * 137 + 43 + offset) * 71 + 13) % 100 / 100;
}

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[3/4]">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-orange/15 via-orange/5 to-transparent blur-[100px] animate-morph-diamond" />

      <svg
        viewBox="0 0 500 600"
        className="w-full h-full relative z-10 drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g-orange" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
          <linearGradient id="g-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#103559" />
            <stop offset="100%" stopColor="#1B4D6E" />
          </linearGradient>
          <linearGradient id="g-glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#F97316" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="g-blue-glow" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#103559" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#103559" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#103559" stopOpacity="0" />
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
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        {/* Background geometry — subtle grid and circles */}
        <g opacity="0.06" className="text-foreground">
          <circle cx="250" cy="300" r="220" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="250" cy="300" r="160" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="250" cy="300" r="100" stroke="currentColor" strokeWidth="0.2" />
          <line x1="50" y1="100" x2="450" y2="100" stroke="currentColor" strokeWidth="0.3" />
          <line x1="50" y1="200" x2="450" y2="200" stroke="currentColor" strokeWidth="0.3" />
          <line x1="50" y1="300" x2="450" y2="300" stroke="currentColor" strokeWidth="0.3" />
          <line x1="50" y1="400" x2="450" y2="400" stroke="currentColor" strokeWidth="0.3" />
          <line x1="50" y1="500" x2="450" y2="500" stroke="currentColor" strokeWidth="0.3" />
        </g>

        {/* Helix strand 1 — orange */}
        <g filter="url(#soft-glow)" opacity="0.3">
          <path
            d="M130 80 C130 80, 180 140, 180 200 C180 260, 130 320, 130 380 C130 440, 180 500, 180 540"
            stroke="url(#g-orange)"
            strokeWidth="3"
            className="animate-draw"
            strokeDasharray="600"
            strokeDashoffset="600"
          />
        </g>
        <path
          d="M130 80 C130 80, 180 140, 180 200 C180 260, 130 320, 130 380 C130 440, 180 500, 180 540"
          stroke="url(#g-orange)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.6"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2s" repeatCount="indefinite" />
        </path>

        {/* Helix strand 2 — blue */}
        <g filter="url(#soft-glow)" opacity="0.3">
          <path
            d="M320 80 C320 80, 270 140, 270 200 C270 260, 320 320, 320 380 C320 440, 270 500, 270 540"
            stroke="url(#g-blue)"
            strokeWidth="3"
            className="animate-draw"
            strokeDasharray="600"
            strokeDashoffset="600"
          />
        </g>
        <path
          d="M320 80 C320 80, 270 140, 270 200 C270 260, 320 320, 320 380 C320 440, 270 500, 270 540"
          stroke="url(#g-blue)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.6"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2s" repeatCount="indefinite" />
        </path>

        {/* Cross-rungs between helixes — the "patterns" */}
        {[120, 180, 240, 300, 360, 420, 480].map((y, i) => {
          const x1 = 130 + Math.sin(y * 0.02) * 50;
          const x2 = 320 + Math.sin(y * 0.02 + Math.PI) * 50;
          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke={i % 2 === 0 ? "url(#g-orange)" : "url(#g-blue)"}
                strokeWidth="0.5"
                opacity="0.15"
              />
              <line
                x1={x1}
                y1={y}
                x2={(x1 + x2) / 2}
                y2={y}
                stroke="url(#g-orange)"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1={(x1 + x2) / 2}
                y1={y}
                x2={x2}
                y2={y}
                stroke="url(#g-blue)"
                strokeWidth="1"
                opacity="0.3"
              />
            </g>
          );
        })}

        {/* Video nodes on the helixes */}
        {[100, 160, 220, 280, 340, 400, 460, 520].map((y, i) => {
          const side = i % 2 === 0;
          const cx = side ? 130 + Math.sin(y * 0.02) * 50 : 320 + Math.sin(y * 0.02 + Math.PI) * 50;
          const r = 12 + Math.sin(y * 0.1) * 3;
          return (
            <g key={i}>
              {/* Glow */}
              <circle cx={cx} cy={y} r={r * 1.8} fill={side ? "#F97316" : "#103559"} opacity="0.08" filter="url(#strong-glow)">
                <animate attributeName="r" values={`${r * 1.5};${r * 2.2};${r * 1.5}`} dur={`${3 + i * 0.1}s`} repeatCount="indefinite" />
              </circle>
              {/* Node */}
              <circle
                cx={cx}
                cy={y}
                r={r}
                className={side ? "fill-orange/95" : "fill-prussian-blue/95"}
                stroke={side ? "#F97316" : "#103559"}
                strokeWidth="1.5"
                filter="url(#glow)"
              >
                <animate attributeName="r" values={`${r};${r * 1.1};${r}`} dur={`${3 + i * 0.1}s`} repeatCount="indefinite" />
              </circle>
              {/* Play icon inside node */}
              <polygon
                points={`${cx + 3},${y - 4} ${cx + 3},${y + 4} ${cx + 8},${y}`}
                fill="white"
                opacity="0.6"
              />
              {/* Rung connection glow */}
              <line
                x1={side ? cx : 320 + Math.sin(y * 0.02 + Math.PI) * 50}
                y1={y}
                x2={side ? 130 + Math.sin(y * 0.02) * 50 : cx}
                y2={y}
                stroke={side ? "#F97316" : "#103559"}
                strokeWidth="0.5"
                opacity="0.4"
              >
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
              </line>
            </g>
          );
        })}

        {/* Floating data particles */}
        {[35, 65, 95, 155, 185, 245, 275, 335, 365, 425, 455, 485, 515].map((y, i) => {
          const x = 80 + det(i, 0) * 340;
          const size = 1.5 + det(i, 1) * 2.5;
          const isOrange = i % 3 !== 0;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={size}
              className={isOrange ? "fill-orange" : "fill-prussian-blue"}
              opacity="0.15"
            >
              <animate
                attributeName="cy"
                values={`${y - 10};${y + 10};${y - 10}`}
                dur={`${4 + det(i, 2) * 6}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.08;0.25;0.08"
                dur={`${3 + det(i, 3) * 4}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}

        {/* Orbiting data rings */}
        <g opacity="0.08" className="text-foreground">
          <ellipse cx="250" cy="300" rx="180" ry="60" stroke="currentColor" strokeWidth="0.5" fill="none" transform="rotate(-15 250 300)">
            <animateTransform attributeName="transform" type="rotate" from="-15 250 300" to="345 250 300" dur="30s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="250" cy="300" rx="140" ry="45" stroke="currentColor" strokeWidth="0.3" fill="none" transform="rotate(10 250 300)">
            <animateTransform attributeName="transform" type="rotate" from="10 250 300" to="370 250 300" dur="25s" repeatCount="indefinite" />
          </ellipse>
        </g>

        {/* Central glowing orb */}
        <circle cx="250" cy="300" r="30" fill="#F97316" opacity="0.04" filter="url(#strong-glow)">
          <animate attributeName="r" values="25;40;25" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="300" r="12" fill="#F97316" opacity="0.06" filter="url(#soft-glow)">
          <animate attributeName="r" values="10;16;10" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="300" r="4" fill="#F97316" opacity="0.15" filter="url(#glow)">
          <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Label: Deconstruct */}
        <g opacity="0.08" className="text-foreground">
          <text x="250" y="60" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" letterSpacing="4">
            DECONSTRUCT
          </text>
        </g>

        {/* Label: Remix */}
        <g opacity="0.08" className="text-foreground">
          <text x="250" y="560" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" letterSpacing="4">
            REMIX
          </text>
        </g>

        {/* Bottom data stream */}
        {[0, 1, 2].map((i) => (
          <g key={i} opacity="0.08">
            <rect
              x={100 + i * 140}
              y={570}
              width="80"
              height="3"
              rx="1.5"
              className="fill-orange"
            >
              <animate
                attributeName="width"
                values={`${60 + i * 10};${90 + i * 15};${60 + i * 10}`}
                dur={`${4 + i * 0.5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.05;0.15;0.05"
                dur={`${3 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ))}

        {/* Energy arcs */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * 90 * Math.PI) / 180;
          const startX = 250 + Math.cos(angle) * 80;
          const startY = 300 + Math.sin(angle) * 80;
          const endX = 250 + Math.cos(angle + 0.5) * 140;
          const endY = 300 + Math.sin(angle + 0.5) * 140;
          const midX = (startX + endX) / 2 + Math.sin(angle) * 30;
          const midY = (startY + endY) / 2 - Math.cos(angle) * 30;
          return (
            <path
              key={i}
              d={`M${startX},${startY} Q${midX},${midY} ${endX},${endY}`}
              stroke="url(#g-orange)"
              strokeWidth="0.5"
              opacity="0.12"
              fill="none"
            >
              <animate
                attributeName="opacity"
                values="0.05;0.2;0.05"
                dur={`${3 + i * 0.4}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-width"
                values="0.3;0.8;0.3"
                dur={`${4 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            </path>
          );
        })}

        {/* Micro dots along arcs */}
        {[0, 1, 2, 3].map((i) => (
          <circle
            key={i}
            r="1.5"
            className="fill-orange"
            opacity="0.2"
          >
            <animateMotion
              dur={`${6 + i * 0.5}s`}
              repeatCount="indefinite"
              path={`M${250 + Math.cos((i * 90 * Math.PI) / 180) * 80},${300 + Math.sin((i * 90 * Math.PI) / 180) * 80} Q${250 + Math.cos((i * 90 * Math.PI) / 180) * 110 + Math.sin((i * 90 * Math.PI) / 180) * 30},${300 + Math.sin((i * 90 * Math.PI) / 180) * 110 - Math.cos((i * 90 * Math.PI) / 180) * 30} ${250 + Math.cos(((i * 90 + 60) * Math.PI) / 180) * 140},${300 + Math.sin(((i * 90 + 60) * Math.PI) / 180) * 140}`}
            />
          </circle>
        ))}
      </svg>

      {/* Bottom decorative label */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
        <span className="text-[8px] font-mono text-orange/20 tracking-[0.3em] uppercase animate-pulse">
          DNA
        </span>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
      </div>
    </div>
  );
}
