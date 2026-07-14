/** Ambient intertwining ribbons behind the hero — slow, breath-like motion */
export function HeroRibbons() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Soft radial glow at center */}
      <div className="absolute left-1/2 top-1/3 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,184,196,0.12)_0%,rgba(194,24,91,0.08)_45%,transparent_70%)]" />

      <svg
        className="animate-ribbon-a absolute -left-[10%] top-[8%] h-[70%] w-[70%] opacity-40"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hero-teal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00B8C4" stopOpacity="0" />
            <stop offset="40%" stopColor="#00B8C4" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#00B8C4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M40 420 C 120 280, 220 200, 340 260 C 460 320, 520 180, 640 140 C 720 110, 760 80, 780 60"
          stroke="url(#hero-teal)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M80 500 C 180 380, 280 340, 400 380 C 520 420, 580 280, 700 220"
          stroke="url(#hero-teal)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>

      <svg
        className="animate-ribbon-b absolute -right-[15%] top-[18%] h-[75%] w-[75%] opacity-40"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hero-magenta" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C2185B" stopOpacity="0" />
            <stop offset="40%" stopColor="#C2185B" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#C2185B" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M760 440 C 640 300, 540 220, 420 280 C 300 340, 240 200, 140 160 C 60 130, 30 100, 10 80"
          stroke="url(#hero-magenta)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M720 520 C 600 400, 500 360, 380 400 C 260 440, 200 300, 100 240"
          stroke="url(#hero-magenta)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
