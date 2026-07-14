import type { Metadata } from "next";
import Image from "next/image";
import { AppStoreButton } from "@/components/AppStoreButton";
import { HeroRibbons } from "@/components/HeroRibbons";
import { RibbonDivider } from "@/components/RibbonDivider";

export const metadata: Metadata = {
  title: "AI Mediator for Couples — Stop Fighting in 20 Minutes",
  description:
    "How to stop fighting with your partner: 20 Minute Truce is an AI couples mediator that helps you de-escalate arguments, communicate better, and repair in twenty minutes.",
  openGraph: {
    title: "Turn the fight into a twenty-minute reset",
    description:
      "An AI mediator for couples — pause the argument, calm your nervous system, and find your way back to each other.",
  },
};

const FEATURES = [
  {
    name: "Real-Talk Translator",
    description:
      "Before you send the text you’ll regret, translate sharpness into something kinder — without losing what you need to say.",
  },
  {
    name: "Peace Mediator",
    description:
      "Neutral AI guidance that holds the middle ground while you both work through the conflict, one careful step at a time.",
  },
  {
    name: "Breathwork",
    description:
      "A guided 4-7-8 breathing cycle that quiets fight-or-flight so you can return to the conversation with a steadier mind.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[min(92vh,52rem)] overflow-hidden">
        <HeroRibbons />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-24 pt-16 text-center sm:px-8 sm:pt-24 md:pb-32 md:pt-28">
          <Image
            src="/logo.png"
            alt="20 Minute Truce logo — two intertwined teal and magenta figures"
            width={160}
            height={160}
            priority
            className="animate-fade-up h-28 w-28 object-contain sm:h-36 sm:w-36 md:h-40 md:w-40"
          />

          <p className="animate-fade-up-delay-1 mt-8 font-display text-2xl font-medium tracking-tight text-cream sm:text-3xl md:text-4xl">
            20 Minute Truce
          </p>
          <p className="animate-fade-up-delay-1 mt-2 text-sm tracking-[0.2em] uppercase text-cream-subtle sm:text-[0.8rem]">
            AI Mediator for Couples
          </p>

          <h1 className="animate-fade-up-delay-2 mt-10 max-w-3xl font-display text-[2.35rem] leading-[1.12] font-medium tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-[4rem]">
            Turn the fight into a{" "}
            <span className="text-gradient-partners">twenty-minute reset</span>.
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg">
            A calm pause when the conversation has gone too far. Separate.
            Breathe. Return ready to repair.
          </p>

          <div className="animate-fade-up-delay-3 mt-10">
            <AppStoreButton size="large" />
          </div>
        </div>
      </section>

      <RibbonDivider />

      {/* Problem */}
      <section className="mx-auto max-w-3xl px-5 py-8 sm:px-8 md:py-12">
        <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
          The loop
        </p>
        <h2 className="mt-4 font-display text-3xl leading-tight font-medium tracking-tight text-cream sm:text-4xl md:text-[2.75rem]">
          The same fight. Again.
        </h2>
        <div className="mt-8 space-y-5 text-base leading-[1.8] text-cream-muted sm:text-lg">
          <p>
            You know how it goes. A small friction becomes a sharp edge. Words
            land harder than they were meant to. Suddenly you’re in the fight
            you’ve had a dozen times before — the one that never quite gets
            resolved, only postponed.
          </p>
          <p>
            Later comes the regret: the message you wish you hadn’t sent, the
            silence that stretches too long, the exhaustion of living inside a
            cycle that keeps rewriting itself. Two people who love each other,
            stuck in a pattern neither of you chose.
          </p>
        </div>
      </section>

      <RibbonDivider />

      {/* Solution */}
      <section className="mx-auto max-w-3xl px-5 py-8 sm:px-8 md:py-12">
        <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
          The interruption
        </p>
        <h2 className="mt-4 font-display text-3xl leading-tight font-medium tracking-tight text-cream sm:text-4xl md:text-[2.75rem]">
          Twenty minutes. A different ending.
        </h2>
        <div className="mt-8 space-y-5 text-base leading-[1.8] text-cream-muted sm:text-lg">
          <p>
            20 Minute Truce gives the argument a container. You agree to pause —
            not to abandon the problem, but to stop feeding it while your nervous
            systems are flooded. Guided breathwork softens the body’s alarm.
            Then the Peace Mediator helps you say what actually matters, without
            the heat that distorts everything.
          </p>
          <p>
            In twenty minutes, you interrupt the loop. Not forever. Just long
            enough to come back as yourselves — and begin the repair.
          </p>
        </div>
      </section>

      <RibbonDivider />

      {/* Screenshots */}
      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8 md:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
            Inside the app
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-medium tracking-tight text-cream sm:text-4xl">
            Designed for the hardest moment
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream-muted">
            Quiet screens. Clear steps. A sanctuary for the nervous system when
            everything else feels loud.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3 sm:gap-5 md:gap-8">
          {["Peace Mediator", "Breathwork", "Real-Talk"].map((label, i) => (
            <figure key={label} className="flex flex-col items-center">
              <div
                className="relative aspect-[9/19.5] w-full max-w-[220px] overflow-hidden rounded-[2rem] border border-cream/10 bg-midnight-raised shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)]"
                style={{
                  backgroundImage:
                    i === 0
                      ? "linear-gradient(165deg, #141A3C 0%, #0A0E27 50%, rgba(0,184,196,0.12) 100%)"
                      : i === 1
                        ? "linear-gradient(165deg, #141A3C 0%, #0A0E27 50%, rgba(232,184,75,0.1) 100%)"
                        : "linear-gradient(165deg, #141A3C 0%, #0A0E27 50%, rgba(194,24,91,0.12) 100%)",
                }}
              >
                <div className="absolute inset-x-0 top-0 flex justify-center pt-3">
                  <div className="h-5 w-20 rounded-full bg-midnight/80" />
                </div>
                <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                  <div
                    className={`mb-4 h-px w-10 ${
                      i === 0
                        ? "bg-teal/50"
                        : i === 1
                          ? "bg-gold/50"
                          : "bg-magenta/50"
                    }`}
                  />
                  <p className="font-display text-lg text-cream/90">{label}</p>
                  <p className="mt-2 text-xs text-cream-subtle">
                    Screenshot placeholder
                  </p>
                </div>
              </div>
              <figcaption className="sr-only">
                Placeholder frame for {label} App Store screenshot
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <RibbonDivider />

      {/* Features */}
      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8 md:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
            Three quiet tools
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-medium tracking-tight text-cream sm:text-4xl">
            What you’ll reach for in the heat
          </h2>
        </div>

        <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {FEATURES.map((feature, index) => (
            <li key={feature.name} className="text-center md:text-left">
              <span
                className="inline-block font-display text-4xl font-medium text-gradient-partners"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-cream sm:text-2xl">
                {feature.name}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-muted">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <RibbonDivider />

      {/* Closing CTA */}
      <section className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-lg bg-[radial-gradient(ellipse_at_center,rgba(0,184,196,0.1)_0%,rgba(194,24,91,0.08)_40%,transparent_70%)]"
          aria-hidden="true"
        />
        <h2 className="font-display text-3xl leading-tight font-medium tracking-tight text-cream sm:text-4xl md:text-5xl">
          Begin the next truce.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream-muted sm:text-lg">
          Twenty minutes from now, you could be somewhere softer than where you
          started.
        </p>
        <div className="mt-10 flex justify-center">
          <AppStoreButton size="large" />
        </div>
      </section>
    </>
  );
}
