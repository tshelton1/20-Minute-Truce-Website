"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ShowcasePhoneDemoProps = {
  label: string;
  ariaLabel: string;
  videoSrc: string;
  posterSrc: string;
  accent: "teal" | "gold" | "magenta";
};

export function ShowcasePhoneDemo({
  label,
  ariaLabel,
  videoSrc,
  posterSrc,
  accent,
}: ShowcasePhoneDemoProps) {
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const frameTint =
    accent === "teal"
      ? "linear-gradient(165deg, #141A3C 0%, #0A0E27 50%, rgba(0,184,196,0.12) 100%)"
      : accent === "gold"
        ? "linear-gradient(165deg, #141A3C 0%, #0A0E27 50%, rgba(232,184,75,0.1) 100%)"
        : "linear-gradient(165deg, #141A3C 0%, #0A0E27 50%, rgba(194,24,91,0.12) 100%)";

  const showStaticPoster = reduceMotion !== false;

  return (
    <figure className="flex flex-col items-center">
      <div
        className="relative aspect-[9/19.5] w-full max-w-[220px] overflow-hidden rounded-[2rem] border border-cream/10 bg-midnight-raised shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)]"
        style={{ backgroundImage: frameTint }}
      >
        <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-3">
          <div className="h-5 w-20 rounded-full bg-midnight/80" />
        </div>

        {showStaticPoster ? (
          <Image
            src={posterSrc}
            alt={ariaLabel}
            fill
            className="object-cover"
            sizes="220px"
          />
        ) : (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
            aria-label={ariaLabel}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
      </div>
      <figcaption className="sr-only">{label} app demo</figcaption>
    </figure>
  );
}
