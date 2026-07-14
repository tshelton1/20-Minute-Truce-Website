import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreButton } from "@/components/AppStoreButton";
import { RibbonDivider } from "@/components/RibbonDivider";

export const metadata: Metadata = {
  title: "The Science — Why 20 Minutes and 4-7-8 Breathing Work",
  description:
    "Why couples need time to de-escalate: fight-or-flight, the vagus nerve, 4-7-8 breathing for anger, and why a deliberate 20-minute separation helps repair conflict.",
  openGraph: {
    title: "The Science Behind a Twenty-Minute Truce",
    description:
      "Nervous system physiology, breathwork, and why stepping away helps couples stop fighting.",
  },
};

export default function SciencePage() {
  return (
    <article className="pb-20 md:pb-28">
      <header className="mx-auto max-w-3xl px-5 pt-16 text-center sm:px-8 sm:pt-24">
        <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
          The science
        </p>
        <h1 className="mt-5 font-display text-4xl leading-[1.12] font-medium tracking-tight text-cream sm:text-5xl md:text-6xl">
          Why your body keeps{" "}
          <span className="text-gradient-partners">the fight alive</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg">
          Conflict isn’t only psychological — it’s physiological. Understanding
          what happens in the nervous system during an argument explains why a
          twenty-minute pause, and a few deliberate breaths, can change
          everything.
        </p>
      </header>

      <RibbonDivider />

      <div className="mx-auto max-w-3xl space-y-16 px-5 sm:px-8 md:space-y-20">
        <section>
          <h2 className="font-display text-3xl font-medium tracking-tight text-cream sm:text-[2rem]">
            Fight-or-flight arrives first
          </h2>
          <div className="mt-6 space-y-4 text-base leading-[1.85] text-cream-muted sm:text-lg">
            <p>
              When you feel threatened — criticized, dismissed, cornered — your
              autonomic nervous system reacts faster than conscious thought. The
              sympathetic branch activates: heart rate rises, muscles tense,
              attention narrows to the perceived threat. Stress hormones such as
              adrenaline and cortisol flood the system. This response evolved to
              keep you alive in physical danger. In an intimate argument, it
              misfires as certainty, defensiveness, and an urgent need to attack
              or withdraw.
            </p>
            <p>
              Researchers sometimes describe this state as “flooding” — a level
              of physiological arousal at which nuanced listening becomes
              nearly impossible. Facial cues look more hostile. Tone sounds more
              accusing. Memory becomes selective: you remember every past slight
              and forget every repair. Trying to “talk it through” while flooded
              often deepens the wound, because neither partner has access to the
              cognitive resources required for empathy.
            </p>
            <p>
              That’s why how to stop fighting with your partner rarely starts
              with better scripts. It starts with lowering arousal enough that
              scripts can land.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl font-medium tracking-tight text-cream sm:text-[2rem]">
            The vagus nerve and the path back
          </h2>
          <div className="mt-6 space-y-4 text-base leading-[1.85] text-cream-muted sm:text-lg">
            <p>
              The vagus nerve is a primary highway of the parasympathetic nervous
              system — the branch associated with rest, digestion, and social
              engagement. When vagal tone is higher, people tend to recover
              faster from stress and stay more flexible under emotional pressure.
              Polyvagal theory, developed by Stephen Porges, emphasizes how safe
              connection and certain physiological cues help the body exit
              defensive states.
            </p>
            <p>
              You can’t will your vagus nerve into action the way you will a
              grocery list. But you can influence it. Slow, paced breathing —
              especially with a longer exhalation than inhalation — increases
              vagal activity, slows heart rate, and signals that the emergency
              has passed. Soft eye contact, a warmer voice, and the removal of
              acute threat cues also help. A structured break removes the threat
              cues of the fight; breathwork actively recruits the calming
              circuitry.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl font-medium tracking-tight text-cream sm:text-[2rem]">
            Why 4-7-8 breathing helps with anger
          </h2>
          <div className="mt-6 space-y-4 text-base leading-[1.85] text-cream-muted sm:text-lg">
            <p>
              The 4-7-8 technique — inhale quietly through the nose for a count
              of four, hold for seven, exhale fully through the mouth for eight —
              is a simple way to bias the nervous system toward calm. The
              extended hold and longer exhale are doing the real work: they
              stretch the respiratory cycle, engage the diaphragm, and prolong
              the phase most associated with parasympathetic activation.
            </p>
            <p>
              Anger and panic share a physiological cousinhood. Both accelerate
              breathing and keep you in a high-alert loop. Slowing the breath
              interrupts that loop directly. You may still feel angry after a
              few cycles — emotions don’t vanish on command — but the body’s
              urgency softens. Research on paced breathing and heart-rate
              variability consistently shows that deliberate respiratory patterns
              can improve emotional regulation and reduce subjective stress. For
              couples, that reduction is often the difference between a cruel
              sentence and a careful one.
            </p>
            <p>
              20 Minute Truce builds this technique into a guided Breathwork
              experience so you don’t have to remember counts while upset. The
              app holds the rhythm; you follow until your system has enough room
              to choose again.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl font-medium tracking-tight text-cream sm:text-[2rem]">
            Why twenty minutes of separation matters
          </h2>
          <div className="mt-6 space-y-4 text-base leading-[1.85] text-cream-muted sm:text-lg">
            <p>
              Physiological arousal doesn’t switch off the instant someone says
              “I’m sorry.” Heart rate and hormonal recovery take time — often on
              the order of twenty minutes or more after intense conflict.
              Relationship researchers, including John Gottman’s work on
              flooding and constructive time-outs, have long recommended
              structured breaks rather than white-knuckling through a fight.
            </p>
            <p>
              A deliberate separation is not the silent treatment. The silent
              treatment is punishment: ambiguous, open-ended, and designed to
              hurt. A truce is bounded and mutual. Both partners know when
              they’re leaving, why they’re leaving, and when they’ll return. That
              boundary protects attachment security while the body cools down.
            </p>
            <p>
              Twenty minutes is long enough for breathing, hydration, a short
              walk, and a shift in perspective — and short enough that the issue
              isn’t abandoned overnight. Combined with mediation tools that help
              you re-enter the conversation with clearer language, the window
              becomes a reset rather than an escape.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl font-medium tracking-tight text-cream sm:text-[2rem]">
            From physiology to practice
          </h2>
          <div className="mt-6 space-y-4 text-base leading-[1.85] text-cream-muted sm:text-lg">
            <p>
              An AI couples mediator can’t replace therapy, and it isn’t meant
              to. What it can do is give you a repeatable ritual grounded in how
              bodies actually recover from conflict: pause the interaction,
              downshift arousal with breath, then use a neutral guide to
              re-enter with less contempt and more clarity.
            </p>
            <p>
              If you want a deeper walkthrough of that sequence inside the app,
              see{" "}
              <Link
                href="/how-it-works"
                className="text-teal underline decoration-teal/30 underline-offset-4 transition-colors hover:decoration-teal"
              >
                How It Works
              </Link>
              . The science is simple in spirit: you cannot repair a
              relationship from inside a nervous system that still believes it’s
              under attack. Give the body twenty minutes. Then try again.
            </p>
          </div>
        </section>
      </div>

      <RibbonDivider />

      <section className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl font-medium tracking-tight text-cream sm:text-4xl">
          Practice the pause
        </h2>
        <p className="mt-4 text-base text-cream-muted sm:text-lg">
          Keep a science-backed reset close at hand for the next hard moment.
        </p>
        <div className="mt-8 flex justify-center">
          <AppStoreButton size="large" />
        </div>
      </section>
    </article>
  );
}
