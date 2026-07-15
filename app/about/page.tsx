import type { Metadata } from "next";
import { AppStoreButton } from "@/components/AppStoreButton";
import { JsonLd } from "@/components/JsonLd";
import { RibbonDivider } from "@/components/RibbonDivider";
import { aboutPersonJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "About — 20 Minute Truce",
  },
  description:
    "Meet Dr. Tiffani, D.O., founder of 20 Minute Truce — the AI couples mediator born from her own struggle with shutting down during conflict at home.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — 20 Minute Truce",
    description:
      "The origin story of 20 Minute Truce from Dr. Tiffani, D.O. — why twenty minutes, and what she hopes it does for couples.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <article className="pb-20 md:pb-28">
      <JsonLd data={aboutPersonJsonLd} />

      <header className="mx-auto max-w-3xl px-5 pt-16 text-center sm:px-8 sm:pt-24">
        <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
          About
        </p>
        <h1 className="mt-5 font-display text-4xl leading-[1.12] font-medium tracking-tight text-gradient-partners sm:text-5xl md:text-6xl">
          The truce I needed first.
        </h1>
      </header>

      <RibbonDivider />

      <div className="mx-auto max-w-3xl space-y-16 px-5 sm:px-8 md:space-y-20">
        <div className="space-y-5 text-base leading-[1.85] text-cream-muted sm:text-lg">
          <p>
            I’m Dr. Tiffani, D.O., SA-C — a physician and surgical assistant. I
            spend my professional life staying calm and precise in high-pressure
            moments, making careful decisions when the stakes are highest.
          </p>
          <p>
            And then I’d come home, get into it with the person I love most, and
            completely fall apart.
          </p>
          <p>
            Not by yelling. By disappearing. When conflict rose, I’d shut down
            and go radio silent — pull the shutters, leave the room in my head
            long before I left it with my feet. I knew how to keep a steady hand
            in an operating room, but I couldn’t keep a steady heart across the
            kitchen table. And I watched that silence do quiet damage: the
            distance it created, the way one unspoken hurt became the seed of
            the next fight.
          </p>
          <p>
            I went looking for something to help in those moments — not a
            weekend workshop, not a book I’d read at 2 a.m. and forget, but
            something for the exact minute when the argument was starting and I
            could feel myself checking out. I couldn’t find it. So, as someone
            trained to solve problems, I built it.
          </p>
        </div>

        <section aria-labelledby="why-twenty-heading">
          <h2
            id="why-twenty-heading"
            className="font-display text-3xl font-medium tracking-tight text-cream sm:text-[2rem]"
          >
            Why twenty minutes.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-[1.85] text-cream-muted sm:text-lg">
            <p>
              The body doesn’t argue rationally when it’s flooded. When conflict
              spikes, your nervous system shifts into fight-or-flight — heart
              racing, or in my case, shutting down entirely. In that state, no
              one is really listening; you’re just surviving. The physiology has
              to settle before the conversation can begin.
            </p>
            <p>
              Twenty minutes is roughly the time it takes for that storm to pass
              — long enough for the body to come back online, short enough that
              you don’t lose each other in the silence. That’s why the app pairs
              a real pause with breathwork to calm the system, then guides you
              back to actually hearing each other.
            </p>
          </div>
        </section>

        <section aria-labelledby="hope-heading">
          <h2
            id="hope-heading"
            className="font-display text-3xl font-medium tracking-tight text-cream sm:text-[2rem]"
          >
            What I want it to do for you.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-[1.85] text-cream-muted sm:text-lg">
            <p>
              My hope for 20 Minute Truce is that it helps couples see the fight
              before it starts — to recognize the triggers and the patterns that
              pull you into the same argument again and again, and to interrupt
              that cycle while there’s still room to choose something else.
              Awareness first, then repair.
            </p>
            <p>
              If you’ve ever felt yourself go silent, or say the thing you swore
              you wouldn’t, or wonder how the person you love became the person
              you brace against — this was built by someone who has been exactly
              there. It won’t make conflict disappear. But it might give you
              twenty minutes, and a way back to each other.
            </p>
            <p className="font-display text-xl font-medium tracking-tight text-cream sm:text-2xl">
              — Dr. Tiffani
            </p>
          </div>
        </section>
      </div>

      <RibbonDivider />

      <section className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl font-medium tracking-tight text-cream sm:text-4xl">
          Begin your next truce
        </h2>
        <p className="mt-4 text-base text-cream-muted sm:text-lg">
          Download 20 Minute Truce and keep a calmer path within reach.
        </p>
        <div className="mt-8 flex justify-center">
          <AppStoreButton size="large" />
        </div>
      </section>
    </article>
  );
}
