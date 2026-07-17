"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function FightSceneBand() {
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const showStaticPoster = reduceMotion !== false;

  return (
    <section
      className="mx-auto max-w-3xl px-5 pt-0 pb-4 sm:px-8 md:pt-1 md:pb-6"
      aria-label="A couple in a difficult moment"
    >
      <div className="relative mx-auto h-[25rem] w-full overflow-hidden rounded-[1.5rem] border border-cream/10 bg-midnight-raised shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)] sm:h-[27rem] md:h-[30rem]">
        {showStaticPoster ? (
          <Image
            src="/videos/fight-scene-poster.jpg"
            alt="A couple in a difficult moment"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 48rem"
          />
        ) : (
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/fight-scene-poster.jpg"
            aria-label="A couple in a difficult moment"
          >
            <source src="/videos/fight-scene.mp4" type="video/mp4" />
          </video>
        )}

        {/* Soft dark gradient so the clip blends into the midnight palette */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,14,39,0.55)_0%,transparent_28%,transparent_62%,rgba(10,14,39,0.7)_100%),radial-gradient(ellipse_at_center,transparent_40%,rgba(10,14,39,0.45)_100%)]"
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-[12%] z-10 flex justify-center px-5 sm:px-8">
          <div className="rounded-sm bg-midnight/50 px-4 py-2.5 backdrop-blur-[2px] sm:px-5 sm:py-3">
            <p className="text-center font-display text-2xl leading-tight font-medium tracking-tight text-gradient-partners [filter:drop-shadow(0_2px_14px_rgba(10,14,39,0.9))] sm:text-3xl md:text-4xl md:leading-[1.15]">
              It doesn’t have to end here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
