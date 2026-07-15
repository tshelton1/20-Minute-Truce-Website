import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppStoreButton } from "@/components/AppStoreButton";
import { BlogContent } from "@/components/BlogContent";
import { JsonLd } from "@/components/JsonLd";
import { RibbonDivider } from "@/components/RibbonDivider";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { blogPostingJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.metaTitle} | 20 Minute Truce`,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Dr. Tiffani"],
    },
    twitter: {
      title: `${post.metaTitle} | 20 Minute Truce`,
      description: post.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="pb-20 md:pb-28">
      <JsonLd data={blogPostingJsonLd(post)} />

      <header className="mx-auto max-w-3xl px-5 pt-16 sm:px-8 sm:pt-24">
        <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
          <Link
            href="/blog"
            className="transition-colors hover:text-cream"
          >
            Blog
          </Link>
        </p>
        <h1 className="mt-5 font-display text-4xl leading-[1.12] font-medium tracking-tight text-cream sm:text-5xl md:text-[3.25rem]">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-cream-subtle">
          <span>
            By{" "}
            <Link
              href="/about"
              className="text-cream-muted underline decoration-cream/20 underline-offset-4 hover:text-cream hover:decoration-cream/50"
            >
              Dr. Tiffani
            </Link>
          </span>
          <span aria-hidden="true" className="text-gold/50">
            ·
          </span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true" className="text-gold/50">
            ·
          </span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <RibbonDivider />

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <BlogContent body={post.body} />
      </div>

      <RibbonDivider />

      <section className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl font-medium tracking-tight text-cream sm:text-4xl">
          Keep a calmer path close
        </h2>
        <p className="mt-4 text-base text-cream-muted sm:text-lg">
          When the next fight starts to turn,{" "}
          <a
            href="https://apps.apple.com/app/20-minute-truce/id6759010169"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline decoration-teal/30 underline-offset-4 hover:decoration-teal"
          >
            download 20 Minute Truce on the App Store
          </a>{" "}
          — pause, breathe, and find your way back.
        </p>
        <div className="mt-8 flex justify-center">
          <AppStoreButton size="large" />
        </div>
        <p className="mt-8 text-sm text-cream-subtle">
          <Link
            href="/blog"
            className="text-cream-muted underline decoration-cream/20 underline-offset-4 hover:text-cream"
          >
            ← Back to all essays
          </Link>
        </p>
      </section>
    </article>
  );
}
