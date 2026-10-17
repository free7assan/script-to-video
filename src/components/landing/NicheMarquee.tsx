const NICHES = [
  "Tech Reviews",
  "Personal Finance",
  "Gaming",
  "Education",
  "Fitness",
  "Long-form Podcasts",
  "Documentary",
  "Product Tutorials",
  "Interviews",
  "Case Studies",
  "News Explainers",
  "Short-form Clips",
];

export function NicheMarquee() {
  return (
    <div
      className="marquee-track relative flex overflow-hidden select-none"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="animate-marquee flex w-max shrink-0">
        {[...NICHES, ...NICHES].map((niche, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 sm:px-7"
            aria-hidden={i >= NICHES.length}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange/50 shrink-0" />
            <span className="text-sm sm:text-base font-display font-medium text-muted-foreground/70 whitespace-nowrap tracking-tight">
              {niche}
            </span>
            <span className="w-px h-4 bg-border/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
