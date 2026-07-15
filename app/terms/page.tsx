import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the 20 Minute Truce iOS app and website — eligibility, subscriptions, acceptable use, disclaimers, and contact.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use | 20 Minute Truce",
    description:
      "The terms governing your use of 20 Minute Truce and our website.",
    url: "/terms",
  },
};

const SECTIONS = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    body: [
      "These Terms of Use (“Terms”) govern your access to and use of the 20 Minute Truce iOS application and website at 20minutetruce.com (collectively, the “Service”), operated by 20 Minute Truce (“we,” “us,” or “our”).",
      "By downloading, accessing, or using the Service, you agree to these Terms. If you do not agree, do not use the Service.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    body: [
      "The Service is intended for adults 18 years of age or older. By using the Service, you represent that you are at least 18 and able to form a binding agreement.",
    ],
  },
  {
    id: "the-service",
    title: "The Service",
    body: [
      "20 Minute Truce is a communication and conflict-de-escalation tool for couples. It may include guided breathwork, an AI-assisted Peace Mediator, Real-Talk Translator, Cycle Breaker pattern insights, and related features.",
      "The Service is not therapy, counseling, medical care, legal advice, or crisis intervention. It does not replace professional help. If you or someone else is in immediate danger, contact local emergency services.",
    ],
  },
  {
    id: "accounts-subscriptions",
    title: "Accounts and subscriptions",
    body: [
      "Some features may require an Apple ID and may be offered through free or paid subscriptions billed by Apple. Subscription terms, pricing, renewal, and cancellation are managed through your Apple account (Settings → your name → Subscriptions on iPhone).",
      "Fees paid through Apple are subject to Apple’s applicable terms. We do not process App Store payments directly.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: [
      "You agree to use the Service only for lawful purposes and in a manner consistent with respectful communication. You must not misuse the Service, attempt unauthorized access, interfere with its operation, or use it to harass, threaten, or harm others.",
      "You are responsible for the content you submit to features such as Peace Mediator or Real-Talk Translator.",
    ],
  },
  {
    id: "ai-features",
    title: "AI-assisted features",
    body: [
      "Certain features process text you provide through third-party AI providers to generate guidance or rephrasing. Outputs may be imperfect or incomplete. You remain responsible for what you choose to send or say to your partner.",
      "How we handle data related to these features is described in our Privacy Policy.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: [
      "The Service, including its branding, design, text, and software, is owned by 20 Minute Truce or its licensors and is protected by intellectual property laws. You may not copy, modify, distribute, or reverse engineer the Service except as allowed by law.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    body: [
      "THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, TO THE FULLEST EXTENT PERMITTED BY LAW.",
      "We do not guarantee that the Service will resolve conflict, improve your relationship, or be uninterrupted or error-free.",
    ],
  },
  {
    id: "limitation",
    title: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, 20 Minute Truce and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising from your use of the Service.",
      "Our total liability for any claim arising out of these Terms or the Service will not exceed the greater of (a) the amounts you paid us for the Service in the twelve months before the claim or (b) fifty U.S. dollars (USD $50), except where prohibited by law.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    body: [
      "Your use of the Service is also governed by our Privacy Policy, which explains what data we collect and how we use it.",
    ],
  },
  {
    id: "changes",
    title: "Changes",
    body: [
      "We may update these Terms from time to time. We will post the revised Terms on this page and update the “Last updated” date. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "Questions about these Terms: support@20minutetruce.com.",
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <header>
        <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
          Legal
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-cream sm:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-cream-subtle">
          Last updated: July 15, 2026
        </p>
      </header>

      <div className="divider-gold mt-10" />

      <div className="mt-12 space-y-12">
        {SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-heading`}
          >
            <h2
              id={`${section.id}-heading`}
              className="font-display text-2xl font-medium tracking-tight text-cream"
            >
              {section.title}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-[1.8] text-cream-muted">
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>
                  {section.id === "privacy" ? (
                    <>
                      Your use of the Service is also governed by our{" "}
                      <Link
                        href="/privacy"
                        className="text-teal underline decoration-teal/30 underline-offset-4 hover:decoration-teal"
                      >
                        Privacy Policy
                      </Link>
                      , which explains what data we collect and how we use it.
                    </>
                  ) : section.id === "contact" ? (
                    <>
                      Questions about these Terms:{" "}
                      <a
                        href="mailto:support@20minutetruce.com"
                        className="text-teal underline decoration-teal/30 underline-offset-4 hover:decoration-teal"
                      >
                        support@20minutetruce.com
                      </a>
                      .
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
