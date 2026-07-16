import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { RibbonDivider } from "@/components/RibbonDivider";

export const metadata: Metadata = {
  title: "Contact — 20 Minute Truce",
  description:
    "Contact Dr. Tiffani, D.O., SA-C — creator of 20 Minute Truce and the couples de-escalation method born from her own conflict shutdown at home.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pb-20 md:pb-28">
      <header className="mx-auto max-w-3xl px-5 pt-16 text-center sm:px-8 sm:pt-24">
        <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
          Contact
        </p>
        <h1 className="mt-5 font-display text-4xl leading-[1.12] font-medium tracking-tight text-cream sm:text-5xl md:text-6xl">
          Reach out
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg">
          Questions about the app, your account, or privacy — we read every note.
        </p>
      </header>

      <RibbonDivider />

      <section className="mx-auto mt-14 max-w-3xl px-5 sm:px-8">
        <div className="rounded-sm border border-cream/[0.08] bg-midnight-raised/60 px-8 py-10">
          <ContactForm />

          <p className="mt-8 text-sm leading-relaxed text-cream-muted">
            Prefer email? Write us at{" "}
            <a
              href="mailto:support@20minutetruce.com"
              className="text-teal underline decoration-teal/30 underline-offset-4 hover:decoration-teal"
            >
              support@20minutetruce.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

