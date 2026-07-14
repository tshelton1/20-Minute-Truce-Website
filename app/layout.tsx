import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
  metadataBase: new URL("https://20minutetruce.com"),
  title: {
    default: "20 Minute Truce — AI Mediator for Couples",
    template: "%s | 20 Minute Truce",
  },
  description:
    "An AI couples mediator that helps you stop fighting, de-escalate arguments, and communicate better in twenty minutes. Pause. Breathe. Repair.",
  keywords: [
    "how to stop fighting with my partner",
    "couples communication app",
    "how to de-escalate an argument",
    "AI couples mediator",
    "4-7-8 breathing for anger",
    "couples conflict resolution",
    "relationship communication tool",
  ],
  authors: [{ name: "20 Minute Truce" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://20minutetruce.com",
    siteName: "20 Minute Truce",
    title: "20 Minute Truce — AI Mediator for Couples",
    description:
      "Turn the fight into a twenty-minute reset. An AI mediator for couples that helps you de-escalate and communicate.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "20 Minute Truce logo — two intertwined teal and magenta flame figures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "20 Minute Truce — AI Mediator for Couples",
    description:
      "Turn the fight into a twenty-minute reset. De-escalate arguments and communicate better.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
