import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/science", label: "The Science" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-cream/[0.06] bg-midnight">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-3 rounded-sm">
              <Image
                src="/logo.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-lg font-medium tracking-tight text-cream">
                20 Minute Truce
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream-subtle">
              An AI mediator for couples — a calm pause when the argument needs
              one.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-muted transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="divider-gold mt-12" />

        <p className="mt-8 text-center text-xs tracking-wide text-cream-subtle sm:text-left">
          © 2026 20 Minute Truce. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
