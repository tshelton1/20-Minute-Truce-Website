type RibbonDividerProps = {
  className?: string;
};

/** Elegant section divider — two intertwining ribbons (teal + magenta) */
export function RibbonDivider({ className = "" }: RibbonDividerProps) {
  return (
    <div
      className={`flex justify-center py-10 md:py-14 ${className}`}
      aria-hidden="true"
    >
      <svg
        width="180"
        height="36"
        viewBox="0 0 180 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-80"
      >
        <defs>
          <linearGradient id="ribbon-teal" x1="0" y1="18" x2="180" y2="18">
            <stop offset="0%" stopColor="#00B8C4" stopOpacity="0" />
            <stop offset="25%" stopColor="#00B8C4" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#00B8C4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00B8C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ribbon-magenta" x1="0" y1="18" x2="180" y2="18">
            <stop offset="0%" stopColor="#C2185B" stopOpacity="0" />
            <stop offset="25%" stopColor="#C2185B" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#C2185B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C2185B" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Teal ribbon — upper wave that dips under at center */}
        <path
          d="M4 14 C 30 6, 50 6, 70 16 C 85 24, 95 24, 110 16 C 130 6, 150 6, 176 14"
          stroke="url(#ribbon-teal)"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />
        {/* Magenta ribbon — lower wave that rises over at center */}
        <path
          d="M4 22 C 30 30, 50 30, 70 20 C 85 12, 95 12, 110 20 C 130 30, 150 30, 176 22"
          stroke="url(#ribbon-magenta)"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />
        {/* Subtle gold ember at the crossing */}
        <circle cx="90" cy="18" r="1.5" fill="#E8B84B" fillOpacity="0.7" />
      </svg>
    </div>
  );
}
