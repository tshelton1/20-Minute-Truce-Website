/** Centered, symmetrical breath glow behind the hero — slow expand/contract */
export function HeroRibbons() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Outer teal soft bloom — left of center, mirrored by magenta */}
      <div className="animate-breath-glow absolute left-1/2 top-[38%] h-[min(72vmin,36rem)] w-[min(72vmin,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,184,196,0.14)_0%,rgba(0,184,196,0.04)_42%,transparent_68%)]" />

      {/* Magenta bloom — same center, slightly offset in time via CSS */}
      <div className="animate-breath-glow-delay absolute left-1/2 top-[38%] h-[min(64vmin,32rem)] w-[min(64vmin,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(194,24,91,0.12)_0%,rgba(194,24,91,0.035)_45%,transparent_68%)]" />

      {/* Core partners blend — perfectly centered */}
      <div className="animate-breath-core absolute left-1/2 top-[38%] h-[min(40vmin,20rem)] w-[min(40vmin,20rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,243,255,0.06)_0%,rgba(0,184,196,0.08)_28%,rgba(194,24,91,0.07)_55%,transparent_72%)]" />

      {/* Fine gold ember — luxury highlight, barely there */}
      <div className="absolute left-1/2 top-[38%] h-[min(18vmin,9rem)] w-[min(18vmin,9rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,184,75,0.07)_0%,transparent_70%)]" />
    </div>
  );
}
