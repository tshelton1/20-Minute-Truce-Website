import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for 20 Minute Truce: what we collect, AI processing, retention, security, your rights, and how to delete your data.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | 20 Minute Truce",
    description:
      "How 20 Minute Truce handles your data, AI-assisted guidance, and your privacy rights.",
    url: "/privacy",
  },
};

const SECTIONS = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <>
        <p>
          20 Minute Truce (“we,” “us,” or “our”) respects your privacy. This
          Privacy Policy explains what information we collect when you use our
          iOS application and website (collectively, the “Service”), how we use
          it, and the choices you have. We design the Service to collect minimal
          personal data and to support repair — not surveillance.
        </p>
        <p>
          By using the Service, you agree to this Privacy Policy. If you do not
          agree, please do not use the Service.
        </p>
      </>
    ),
  },
  {
    id: "collected",
    title: "Information We Collect",
    content: (
      <>
        <p>Depending on how you use the Service, we may collect:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-cream">Account information</strong>{" "}
            — such as an email address or Apple Sign In identifiers needed to
            create and secure your account.
          </li>
          <li>
            <strong className="font-medium text-cream">Usage data</strong> — basic
            app analytics (for example, feature interactions and crash logs) to
            improve reliability and experience. We avoid collecting more than is
            reasonably necessary.
          </li>
          <li>
            <strong className="font-medium text-cream">Conversation content</strong>{" "}
            — text you choose to submit to features such as Peace Mediator or
            Real-Talk Translator, so we can generate guidance or translations.
          </li>
          <li>
            <strong className="font-medium text-cream">Device information</strong>{" "}
            — limited technical data such as device type, OS version, and app
            version that helps us diagnose issues.
          </li>
          <li>
            <strong className="font-medium text-cream">Support communications</strong>{" "}
            — content you send when you contact us for help.
          </li>
        </ul>
        <p className="mt-4">
          We do not require you to share your partner’s personal details beyond
          what you voluntarily include in conversation text you submit.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "How We Use Information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Provide, operate, and improve the Service</li>
          <li>
            Generate AI-assisted mediation guidance and message translations in
            response to content you submit
          </li>
          <li>Authenticate users and protect account security</li>
          <li>Respond to support requests</li>
          <li>Monitor performance, prevent abuse, and fix bugs</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p className="mt-4">
          We do <strong className="font-medium text-cream">not sell</strong> your
          personal data. We do not share your conversation content with
          advertisers.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    title: "AI Processing",
    content: (
      <>
        <p>
          Certain features process conversation content through a third-party AI
          provider to generate guidance, rephrasing, or similar outputs. When you
          use these features, the text you submit is transmitted to that provider
          solely to produce a response for you.
        </p>
        <p>
          We select providers under contractual terms that limit how they may use
          data submitted on our behalf. We do not use your conversation content
          to train marketing profiles, and we do not sell prompts or outputs to
          third parties. You should avoid submitting highly sensitive information
          (such as government ID numbers, financial account credentials, or
          medical record numbers) into AI features.
        </p>
        <p>
          AI-generated guidance is informational only. It is not professional
          advice, therapy, or crisis care.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain personal data only as long as needed to provide the Service,
          fulfill the purposes described in this policy, resolve disputes, and
          meet legal requirements. Conversation content submitted for AI features
          may be retained temporarily for service delivery, safety, abuse
          prevention, and quality — and then deleted or anonymized according to
          our retention practices.
        </p>
        <p>
          If you delete your account, we delete or de-identify associated personal
          data within a reasonable period, except where we must retain limited
          records for legal, security, or financial compliance reasons.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <>
        <p>
          We implement reasonable administrative, technical, and organizational
          measures designed to protect personal data against unauthorized access,
          loss, misuse, or alteration. No method of transmission or storage is
          completely secure; we cannot guarantee absolute security, but we work
          to continuously improve our safeguards.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your Rights",
    content: (
      <>
        <p>
          Depending on where you live, you may have rights to access, correct,
          delete, or export your personal data, or to object to or restrict
          certain processing. You may also have the right to withdraw consent
          where processing is based on consent.
        </p>
        <p>
          To exercise these rights — including requesting deletion of your data
          or account — contact us at{" "}
          <a
            href="mailto:support@20minutetruce.com"
            className="text-teal underline decoration-teal/30 underline-offset-4 hover:decoration-teal"
          >
            support@20minutetruce.com
          </a>
          . We will respond within a reasonable timeframe as required by
          applicable law. You may also have the right to lodge a complaint with a
          supervisory authority in your region.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children’s Privacy",
    content: (
      <>
        <p>
          The Service is intended for adults age 18 and older. We do not knowingly
          collect personal information from children under 18. If you believe a
          minor has provided us personal data, please contact us and we will take
          appropriate steps to delete it.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. We will post the
          revised version on this page and update the “Last updated” date. Your
          continued use of the Service after changes take effect constitutes
          acceptance of the updated policy where permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        <p>
          Questions about privacy or this policy may be sent to{" "}
          <a
            href="mailto:support@20minutetruce.com"
            className="text-teal underline decoration-teal/30 underline-offset-4 hover:decoration-teal"
          >
            support@20minutetruce.com
          </a>
          .
        </p>
      </>
    ),
  },
] as const;

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <header>
        <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
          Legal
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-cream sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-cream-subtle">
          Last updated: July 14, 2026
        </p>
        <p className="mt-6 text-base leading-relaxed text-cream-muted sm:text-lg">
          This policy describes how 20 Minute Truce collects, uses, and protects
          information when you use our app and website.
        </p>
      </header>

      <div className="divider-gold mt-12" />

      <div className="mt-12 space-y-14">
        {SECTIONS.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
            <h2
              id={`${section.id}-heading`}
              className="font-display text-2xl font-medium tracking-tight text-cream sm:text-[1.75rem]"
            >
              {section.title}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-[1.8] text-cream-muted">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
