import type { Metadata } from "next";
import Image from "next/image";
import { AppStoreButton } from "@/components/AppStoreButton";
import { FightSceneBand } from "@/components/FightSceneBand";
import { HeroRibbons } from "@/components/HeroRibbons";
import { JsonLd } from "@/components/JsonLd";
import { RibbonDivider } from "@/components/RibbonDivider";
import { ShowcasePhoneDemo } from "@/components/ShowcasePhoneDemo";
import { homepageVideosJsonLd, softwareApplicationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Stop Fighting With Your Partner | 20 Minute Truce",
  },
  description:
    "How to stop fighting with your partner: an AI couples mediator that helps you de-escalate arguments and communicate better in 20 minutes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Stop Fighting With Your Partner | 20 Minute Truce",
    description:
      "You're in the fight again. An AI couples mediator helps you pause, breathe, and hear each other in twenty minutes.",
    url: "/",
  },
  twitter: {
    title: "Stop Fighting With Your Partner | 20 Minute Truce",
    description:
      "An AI couples mediator that helps you de-escalate arguments and communicate better in twenty minutes.",
  },
};

const FEATURES = [
  {
    name: "Real-Talk Translator",
    description:
      "Say what you mean without the words coming out as weapons — so the person you love hears the hurt, not the attack.",
  },
  {
    name: "Peace Mediator",
    description:
      "Go from screaming match to actually hearing each other — with a calm, neutral voice in the room when neither of you can hold the middle.",
  },
  {
    name: "Breathwork",
    description:
      "Quiet the shaking rage and racing heart in minutes, so you can walk back into the conversation as yourself — not as the fight.",
  },
  {
    name: "Cycle Breaker",
    description:
      "You’re not having ten different fights — you’re having the same one in different clothes. Cycle Breaker names the loop across your past sessions so you can finally see it, and stop running it.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd} />
      <JsonLd data={homepageVideosJsonLd} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <HeroRibbons />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-2 pt-4 text-center sm:px-8 sm:pb-3 sm:pt-5 md:pb-3 md:pt-6">
          <Image
            src="/logo.png"
            alt="20 Minute Truce logo — two intertwined teal and magenta figures"
            width={160}
            height={160}
            priority
            className="animate-fade-up h-28 w-28 object-contain sm:h-36 sm:w-36 md:h-40 md:w-40"
          />

          <p className="animate-fade-up-delay-1 mt-2 font-display text-2xl font-medium tracking-tight text-cream sm:mt-3 sm:text-3xl md:text-4xl">
            20 Minute Truce
          </p>
          <p className="animate-fade-up-delay-1 mt-1 text-sm tracking-[0.2em] uppercase text-cream-subtle sm:text-[0.8rem]">
            AI Mediator for Couples
          </p>

          <h1 className="animate-fade-up-delay-2 mt-3 max-w-3xl font-display text-[2.35rem] leading-[1.12] font-medium tracking-tight text-cream sm:mt-4 sm:text-5xl md:text-6xl lg:text-[4rem]">
            You’re in the fight{" "}
            <span className="text-gradient-partners">again</span>.
          </h1>

          <p className="animate-fade-up-delay-2 mt-2 max-w-xl text-base leading-relaxed text-cream-muted sm:mt-3 sm:text-lg">
            Same words. Same wound. Same dread that this is becoming who you are
            together. There is a quieter way — twenty minutes from here to
            hearing each other again.
          </p>

          <div className="animate-fade-up-delay-3 mt-3 sm:mt-4">
            <AppStoreButton size="large" />
          </div>
        </div>
      </section>

      <FightSceneBand />

      <RibbonDivider />

      {/* Problem */}
      <section className="mx-auto max-w-3xl px-5 py-8 sm:px-8 md:py-12">
        <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
          You already know this feeling
        </p>
        <h2 className="mt-4 font-display text-3xl leading-tight font-medium tracking-tight text-cream sm:text-4xl md:text-[2.75rem]">
          The fight that never actually ends.
        </h2>
        <div className="mt-8 space-y-5 text-base leading-[1.8] text-cream-muted sm:text-lg">
          <p>
            It starts small — a tone, a forgotten promise, a look across the
            kitchen. Then you’re there again: voices rising, doors closing a
            little too hard, saying the thing you swore you wouldn’t. Later you
            lie awake replaying every line, stomach tight, wondering how the
            person you love became the person you’re bracing against.
          </p>
          <p>
            You start walking on eggshells. Choosing silence over another round.
            Feeling the distance grow in the moments that used to be easy —
            dinner, bedtime, the car ride home. And underneath it all, a quieter
            fear: that this loop is becoming the relationship. That someday
            you’ll look across the room and not recognize what you’ve become.
          </p>
          <p>
            Left alone, the pattern does not soften on its own. Resentment
            settles in. Touch becomes rarer. The same fight returns sharper —
            because nothing was repaired the last time. You don’t need another
            pep talk. You need a way to interrupt the cycle before it owns the
            night.
          </p>
        </div>
      </section>

      <RibbonDivider />

      {/* Solution */}
      <section className="mx-auto max-w-3xl px-5 py-8 sm:px-8 md:py-12">
        <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
          The way out
        </p>
        <h2 className="mt-4 font-display text-3xl leading-tight font-medium tracking-tight text-cream sm:text-4xl md:text-[2.75rem]">
          Twenty minutes. A real return.
        </h2>
        <div className="mt-8 space-y-5 text-base leading-[1.8] text-cream-muted sm:text-lg">
          <p>
            20 Minute Truce is the pause you call when neither of you can be
            reasonable anymore. You agree to stop — not forever, for twenty
            minutes. Breathwork settles the panic in your chest. Then Peace
            Mediator helps you name what actually hurts, without the heat that
            turns every sentence into fuel.
          </p>
          <p>
            You go from mid-conflict spiral to a room where you can actually
            hear each other. You say what you mean without the words landing as
            weapons. You come back to the conversation as partners again — still
            imperfect, still human, but no longer trapped inside the same fight on
            repeat.
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
          <ShowcasePhoneDemo
            label="Peace Mediator"
            ariaLabel="Peace Mediator demo"
            videoSrc="/videos/peace-mediator.mp4"
            posterSrc="/videos/peace-mediator-poster.jpg"
            accent="teal"
          />
          <ShowcasePhoneDemo
            label="Breathwork"
            ariaLabel="Breathwork demo"
            videoSrc="/videos/breathwork.mp4"
            posterSrc="/videos/breathwork-poster.jpg"
            accent="gold"
          />
          <ShowcasePhoneDemo
            label="Real-Talk"
            ariaLabel="Real-Talk Translator demo"
            videoSrc="/videos/real-talk.mp4"
            posterSrc="/videos/real-talk-poster.jpg"
            accent="magenta"
          />
        </div>
      </section>

      <RibbonDivider />

      {/* Features */}
      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8 md:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
            Four quiet tools
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-medium tracking-tight text-cream sm:text-4xl">
            What changes when you reach for them
          </h2>
        </div>

        <ul className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 md:gap-10">
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
          The next fight doesn’t have to own you.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream-muted sm:text-lg">
          Twenty minutes from now, you could be out of the spiral — and back
          toward each other.
        </p>
        <div className="mt-10 flex justify-center">
          <AppStoreButton size="large" />
        </div>
      </section>
    </>
  );
}
