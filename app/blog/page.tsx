import type { Metadata } from "next";
import Link from "next/link";
import { RibbonDivider } from "@/components/RibbonDivider";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Couples Communication",
  description:
    "Essays on recurring fights, shutting down, 4-7-8 breathing, repair after regret, and how long to pause — from the 20 Minute Truce team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | 20 Minute Truce",
    description:
      "Calm, practical writing on couples conflict, de-escalation, and repair.",
    url: "/blog",
  },
};

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="pb-20 md:pb-28">
      <header className="mx-auto max-w-3xl px-5 pt-16 text-center sm:px-8 sm:pt-24">
        <p className="text-xs tracking-[0.22em] uppercase text-gold/80">Blog</p>
        <h1 className="mt-5 font-display text-4xl leading-[1.12] font-medium tracking-tight text-cream sm:text-5xl md:text-6xl">
          Quiet reading for{" "}
          <span className="text-gradient-partners">hard moments</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg">
          Practical essays on recurring fights, nervous-system calm, and the
          small repairs that bring you back to each other.
        </p>
      </header>

      <RibbonDivider />

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <ul className="divide-y divide-cream/[0.08] border-y border-cream/[0.08]">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-10 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-[0.14em] uppercase text-cream-subtle">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true" className="text-gold/50">
                    ·
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-cream transition-opacity group-hover:opacity-90 sm:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-cream-muted sm:text-lg">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-block text-sm tracking-wide text-teal transition-colors group-hover:text-cream">
                  Read the essay →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
