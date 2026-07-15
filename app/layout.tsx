import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Stop Fighting With Your Partner | 20 Minute Truce",
    template: "%s | 20 Minute Truce",
  },
  description:
    "AI couples mediator that helps you stop fighting, de-escalate arguments, and communicate better in 20 minutes. Pause. Breathe. Repair.",
  keywords: [
    "how to stop fighting with my partner",
    "couples communication app",
    "how to de-escalate an argument",
    "AI couples mediator",
    "4-7-8 breathing for anger",
    "recurring fights in relationship",
    "couples conflict resolution",
  ],
  authors: [{ name: "20 Minute Truce" }],
  creator: "20 Minute Truce",
  publisher: "20 Minute Truce",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "20 Minute Truce",
    title: "Stop Fighting With Your Partner | 20 Minute Truce",
    description:
      "An AI couples mediator for de-escalating arguments and communicating better in twenty minutes.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "20 Minute Truce — AI mediator for couples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Fighting With Your Partner | 20 Minute Truce",
    description:
      "An AI couples mediator for de-escalating arguments and communicating better in twenty minutes.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={organizationJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
