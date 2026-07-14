import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreButton } from "@/components/AppStoreButton";
import { RibbonDivider } from "@/components/RibbonDivider";

export const metadata: Metadata = {
  title: "Support — Help & FAQ",
  description:
    "Get help with 20 Minute Truce. Contact support, learn how the AI couples communication app works, and find answers about privacy, canceling, and deleting your account.",
  openGraph: {
    title: "Support | 20 Minute Truce",
    description:
      "Contact support@20minutetruce.com or browse frequently asked questions.",
  },
};

const FAQ = [
  {
    question: "How does 20 Minute Truce work?",
    answer: (
      <>
        When an argument escalates, you call a truce — a mutual twenty-minute
        pause. During that window, guided breathwork helps calm your nervous
        system. Then Peace Mediator and Real-Talk Translator help you work
        through the conflict and find clearer language for repair. For a full
        walkthrough, visit{" "}
        <Link
          href="/how-it-works"
          className="text-teal underline decoration-teal/30 underline-offset-4 hover:decoration-teal"
        >
          How It Works
        </Link>
        .
      </>
    ),
  },
  {
    question: "Is my data private?",
    answer: (
      <>
        We collect minimal personal data, do not sell your information, and
        process conversation content only to provide the features you use —
        including through a third-party AI provider. You can request deletion of
        your data. Read the full details in our{" "}
        <Link
          href="/privacy"
          className="text-teal underline decoration-teal/30 underline-offset-4 hover:decoration-teal"
        >
          Privacy Policy
        </Link>
        .
      </>
    ),
  },
  {
    question: "How do I cancel a subscription?",
    answer: (
      <>
        Subscriptions for 20 Minute Truce are managed through your Apple ID. On
        your iPhone, open Settings → your name → Subscriptions, select 20 Minute
        Truce, and choose Cancel Subscription. Cancellation stops future billing;
        you typically retain access until the end of the current billing period.
      </>
    ),
  },
  {
    question: "How do I delete my account?",
    answer: (
      <>
        You can request account and data deletion by emailing{" "}
        <a
          href="mailto:support@20minutetruce.com"
          className="text-teal underline decoration-teal/30 underline-offset-4 hover:decoration-teal"
        >
          support@20minutetruce.com
        </a>{" "}
        from the address associated with your account. Include “Delete my
        account” in the subject line. We’ll confirm when deletion is complete.
        You may also find in-app account deletion options where available.
      </>
    ),
  },
  {
    question: "Is this a replacement for therapy?",
    answer: (
      <>
        No. 20 Minute Truce is a communication tool — designed to help couples
        pause, regulate, and speak more carefully during conflict. It is not
        therapy, counseling, medical care, or crisis intervention. If you or
        your partner are in immediate danger, contact local emergency services.
        For ongoing mental health or relationship concerns, please seek a
        licensed professional.
      </>
    ),
  },
] as const;

export default function SupportPage() {
  return (
    <div className="pb-20 md:pb-28">
      <header className="mx-auto max-w-3xl px-5 pt-16 text-center sm:px-8 sm:pt-24">
        <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
          Support
        </p>
        <h1 className="mt-5 font-display text-4xl leading-[1.12] font-medium tracking-tight text-cream sm:text-5xl md:text-6xl">
          We’re here when you need a hand
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg">
          Questions about the app, your account, or privacy — reach out and we’ll
          respond as soon as we can.
        </p>
      </header>

      <section className="mx-auto mt-14 max-w-xl px-5 text-center sm:px-8">
        <div className="rounded-sm border border-cream/[0.08] bg-midnight-raised/60 px-8 py-10">
          <p className="text-xs tracking-[0.18em] uppercase text-cream-subtle">
            Email us
          </p>
          <a
            href="mailto:support@20minutetruce.com"
            className="mt-3 inline-block font-display text-2xl font-medium text-gradient-partners sm:text-3xl"
          >
            support@20minutetruce.com
          </a>
          <p className="mt-4 text-sm leading-relaxed text-cream-muted">
            We typically reply within one to two business days.
          </p>
        </div>
      </section>

      <RibbonDivider />

      <section className="mx-auto max-w-3xl px-5 sm:px-8" aria-labelledby="faq-heading">
        <h2
          id="faq-heading"
          className="text-center font-display text-3xl font-medium tracking-tight text-cream sm:text-4xl"
        >
          Frequently asked questions
        </h2>
        <dl className="mt-12 space-y-10">
          {FAQ.map((item) => (
            <div key={item.question}>
              <dt className="font-display text-xl font-medium text-cream sm:text-2xl">
                {item.question}
              </dt>
              <dd className="mt-3 text-base leading-[1.8] text-cream-muted sm:text-lg">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <RibbonDivider />

      <section className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl font-medium tracking-tight text-cream sm:text-4xl">
          Prefer to explore on your own?
        </h2>
        <p className="mt-4 text-base text-cream-muted sm:text-lg">
          Download the app and try the twenty-minute method when you need it.
        </p>
        <div className="mt-8 flex justify-center">
          <AppStoreButton size="large" />
        </div>
      </section>
    </div>
  );
}
