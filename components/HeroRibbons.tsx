/** Centered, symmetrical breath glow behind the logo — subtle scale & opacity pulse */
export function HeroRibbons() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Outer teal bloom */}
      <div className="animate-breath-glow absolute left-1/2 top-[38%] h-[min(72vmin,36rem)] w-[min(72vmin,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,184,196,0.11)_0%,rgba(0,184,196,0.032)_42%,transparent_68%)]" />

      {/* Magenta bloom — staggered ripple */}
      <div className="animate-breath-glow-delay absolute left-1/2 top-[38%] h-[min(64vmin,32rem)] w-[min(64vmin,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(194,24,91,0.095)_0%,rgba(194,24,91,0.028)_45%,transparent_68%)]" />

      {/* Core partners blend */}
      <div className="animate-breath-core absolute left-1/2 top-[38%] h-[min(40vmin,20rem)] w-[min(40vmin,20rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,243,255,0.048)_0%,rgba(0,184,196,0.064)_28%,rgba(194,24,91,0.056)_55%,transparent_72%)]" />

      {/* Fine gold ember — innermost, leads the breath */}
      <div className="animate-breath-ember absolute left-1/2 top-[38%] h-[min(18vmin,9rem)] w-[min(18vmin,9rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,184,75,0.055)_0%,transparent_70%)]" />
    </div>
  );
}
