import type { Metadata } from "next";
import { AppStoreButton } from "@/components/AppStoreButton";
import { RibbonDivider } from "@/components/RibbonDivider";

export const metadata: Metadata = {
  title: "How It Works — The 20-Minute Method for Couples",
  description:
    "Learn how to de-escalate an argument in twenty minutes: pause, reset with 4-7-8 breathwork, use an AI couples mediator, and repair with intention.",
  openGraph: {
    title: "How 20 Minute Truce Works",
    description:
      "A clear sequence for stopping a fight midstream — pause, breathe, mediate, repair.",
  },
};

const STEPS = [
  {
    number: "01",
    title: "The Pause",
    eyebrow: "Agree to stop",
    body: [
      "When the conversation turns toxic, the hardest thing to do is stop. The urge to win, to defend, to land one more point — that’s fight-or-flight talking. The pause is a mutual agreement: we are not abandoning this. We are protecting it.",
      "Either partner can call a truce. You open the app, mark that you’re stepping away, and commit to returning in twenty minutes. The argument doesn’t disappear. It waits — outside the room where you both have room to become yourselves again.",
    ],
  },
  {
    number: "02",
    title: "The Breathwork Reset",
    eyebrow: "Settle the body first",
    body: [
      "Words fail when the nervous system is flooded. Cortisol and adrenaline sharpen threat and dull empathy; the prefrontal cortex — the part of you that chooses tone — goes quiet. Breathwork is how you call it back.",
      "20 Minute Truce guides you through a 4-7-8 cycle: inhale for four, hold for seven, exhale for eight. The long exhale stimulates the vagus nerve and shifts you toward parasympathetic calm. You don’t have to “feel better.” You only need enough regulation to choose your next sentence.",
    ],
  },
  {
    number: "03",
    title: "The Peace Mediator Session",
    eyebrow: "A neutral third presence",
    body: [
      "Once you’re calmer, the Peace Mediator helps you work through the conflict without the usual traps. It asks clear questions. It reflects what’s at stake for each of you. It won’t take sides — and it won’t let either of you hide behind vague accusations.",
      "Alongside it, Real-Talk Translator lets you draft the hard message and reshape it before it lands. Keep the truth. Soften the edge. Say what you mean without the cruelty heat invents.",
    ],
  },
  {
    number: "04",
    title: "The Repair",
    eyebrow: "Return differently",
    body: [
      "Twenty minutes later, you come back. Not as opponents finishing a round, but as two people who took care of their own systems so they could take care of each other. The repair isn’t always a perfect resolution — it’s often an acknowledgment, an apology, a clearer ask, a plan for next time.",
      "That’s the method: interrupt the spiral, restore capacity, speak with intention, and reconnect. Small, deliberate, and repeatable — the opposite of the fights that leave you emptier than before.",
    ],
  },
] as const;

const FEATURE_DEPTH = [
  {
    name: "Real-Talk Translator",
    detail: [
      "Paste or write the message you almost sent. The translator preserves your meaning while removing contempt, sarcasm, and character attacks — the patterns Gottman research links most strongly to lasting relationship damage. You stay honest. You stop being cruel by accident.",
    ],
  },
  {
    name: "Peace Mediator",
    detail: [
      "A structured, neutral conversation guide for mid-conflict clarity. It helps each partner name the emotion under the argument, identify the unmet need, and propose a next step that doesn’t require anyone to lose. Think of it as a temporary third chair at the table — calm, curious, and without an agenda beyond repair.",
    ],
  },
  {
    name: "Breathwork (4-7-8)",
    detail: [
      "A short, guided physiological reset based on the 4-7-8 technique popularized in clinical and wellness practice. Extended exhalation slows heart rate and dampens sympathetic arousal. Use it alone during the truce window, or return to it anytime anger spikes mid-conversation.",
    ],
  },
  {
    name: "Cycle Breaker",
    detail: [
      "There’s a particular exhaustion that comes from recognizing the fight mid-sentence — the sinking certainty of “we’re here again,” the despair of always ending up in the same place with someone you love, the quiet fear that this loop isn’t a bad week, it’s who you are as a couple.",
      "You’re not having ten different fights. You’re having the same fight ten times, wearing different clothes. Cycle Breaker looks across your recent Peace Mediator sessions and finds the repeating structure underneath: the recurring trigger, the predictable escalation path, the unmet need driving it, the exact moment it always turns. Then it names the loop out loud — and shows you how to interrupt it the next time the pattern starts to run.",
      "That insight is meant as relief. The fight isn’t proof you’re incompatible. It’s a solvable pattern you simply couldn’t see from inside it. You can’t break a pattern you can’t see. This is how you stop running it.",
    ],
  },
] as const;

export default function HowItWorksPage() {
  return (
    <div className="pb-20 md:pb-28">
      <header className="mx-auto max-w-3xl px-5 pt-16 text-center sm:px-8 sm:pt-24">
        <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
          The method
        </p>
        <h1 className="mt-5 font-display text-4xl leading-[1.12] font-medium tracking-tight text-cream sm:text-5xl md:text-6xl">
          How a fight becomes a{" "}
          <span className="text-gradient-partners">truce</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg">
          Four deliberate steps. Twenty minutes. A sequence designed for the
          moment when staying in the fight only makes it worse.
        </p>
      </header>

      <RibbonDivider />

      <ol className="mx-auto max-w-3xl space-y-0 px-5 sm:px-8">
        {STEPS.map((step, index) => (
          <li key={step.number}>
            {index > 0 ? <RibbonDivider className="py-6 md:py-8" /> : null}
            <article>
              <p className="font-display text-5xl font-medium text-gradient-partners opacity-90 sm:text-6xl">
                {step.number}
              </p>
              <p className="mt-4 text-xs tracking-[0.22em] uppercase text-cream-subtle">
                {step.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-cream sm:text-4xl">
                {step.title}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-[1.8] text-cream-muted sm:text-lg">
                {step.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>

      <RibbonDivider />

      <section className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
          Tools in depth
        </p>
        <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-cream sm:text-4xl">
          What each feature is for
        </h2>
        <ul className="mt-12 space-y-12">
          {FEATURE_DEPTH.map((feature) => (
            <li key={feature.name}>
              <h3 className="font-display text-2xl font-medium text-cream">
                {feature.name}
              </h3>
              <div className="mt-3 space-y-4 text-base leading-[1.8] text-cream-muted sm:text-lg">
                {feature.detail.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <RibbonDivider />

      <section className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl font-medium tracking-tight text-cream sm:text-4xl">
          Ready when you need the pause
        </h2>
        <p className="mt-4 text-base text-cream-muted sm:text-lg">
          Download 20 Minute Truce and keep a calmer path within reach.
        </p>
        <div className="mt-8 flex justify-center">
          <AppStoreButton size="large" />
        </div>
      </section>
    </div>
  );
}
