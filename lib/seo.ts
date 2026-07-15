export const SITE_URL = "https://20minutetruce.com";
export const APP_STORE_URL =
  "https://apps.apple.com/app/20-minute-truce/id6759010169";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "20 Minute Truce",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "support@20minutetruce.com",
  sameAs: [APP_STORE_URL],
  description:
    "An AI mediator for couples that helps de-escalate arguments and communicate better in twenty minutes.",
};

export const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "20 Minute Truce",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS",
  description:
    "AI couples mediator and communication app that helps partners pause fights, calm down with 4-7-8 breathwork, and repair conflict in twenty minutes.",
  url: SITE_URL,
  image: `${SITE_URL}/logo.png`,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  downloadUrl: APP_STORE_URL,
  installUrl: APP_STORE_URL,
  author: {
    "@type": "Organization",
    name: "20 Minute Truce",
    url: SITE_URL,
  },
};

export const aboutPersonJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Tiffani",
  honorificPrefix: "Dr.",
  jobTitle: "Founder, Physician and Surgical Assistant",
  description:
    "Founder of 20 Minute Truce. Physician (D.O., SA-C) who created an AI couples mediator after struggling with shutting down during conflict at home.",
  url: `${SITE_URL}/about`,
  knowsAbout: [
    "couples communication",
    "conflict de-escalation",
    "nervous system regulation",
    "4-7-8 breathing",
  ],
  worksFor: {
    "@type": "Organization",
    name: "20 Minute Truce",
    url: SITE_URL,
  },
  founderOf: {
    "@type": "Organization",
    name: "20 Minute Truce",
    url: SITE_URL,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/about`,
  },
  subjectOf: {
    "@type": "SoftwareApplication",
    name: "20 Minute Truce",
    url: SITE_URL,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS",
    downloadUrl: APP_STORE_URL,
    author: {
      "@type": "Person",
      name: "Dr. Tiffani",
      url: `${SITE_URL}/about`,
    },
  },
};

export const scienceArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why your body keeps the fight alive — the science of a 20-minute truce",
  description:
    "How fight-or-flight, the vagus nerve, and 4-7-8 breathing explain why couples need twenty minutes to de-escalate before they can repair.",
  author: {
    "@type": "Organization",
    name: "20 Minute Truce",
  },
  publisher: {
    "@type": "Organization",
    name: "20 Minute Truce",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/science`,
  },
  image: `${SITE_URL}/og.png`,
  datePublished: "2026-01-01",
  dateModified: "2026-07-15",
};

/** Plain-text FAQ for FAQPage schema (mirrors Support page answers). */
export const supportFaqForSchema = [
  {
    question: "How does 20 Minute Truce work?",
    answer:
      "When an argument escalates, you call a truce — a mutual twenty-minute pause. During that window, guided breathwork helps calm your nervous system. Then Peace Mediator and Real-Talk Translator help you work through the conflict and find clearer language for repair.",
  },
  {
    question: "Is my data private?",
    answer:
      "We collect minimal personal data, do not sell your information, and process conversation content only to provide the features you use — including through a third-party AI provider. You can request deletion of your data. See our Privacy Policy for full details.",
  },
  {
    question: "How do I cancel a subscription?",
    answer:
      "Subscriptions for 20 Minute Truce are managed through your Apple ID. On your iPhone, open Settings → your name → Subscriptions, select 20 Minute Truce, and choose Cancel Subscription. Cancellation stops future billing; you typically retain access until the end of the current billing period.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "You can request account and data deletion by emailing support@20minutetruce.com from the address associated with your account. Include “Delete my account” in the subject line. We’ll confirm when deletion is complete.",
  },
  {
    question: "Is this a replacement for therapy?",
    answer:
      "No. 20 Minute Truce is a communication tool — designed to help couples pause, regulate, and speak more carefully during conflict. It is not therapy, counseling, medical care, or crisis intervention. If you or your partner are in immediate danger, contact local emergency services. For ongoing mental health or relationship concerns, please seek a licensed professional.",
  },
] as const;

export function faqPageJsonLd(
  faqs: readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function blogPostingJsonLd(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Dr. Tiffani",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "20 Minute Truce",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    image: `${SITE_URL}/og.png`,
    url: `${SITE_URL}/blog/${post.slug}`,
  };
}
