export type InlineSpan =
  | string
  | {
      text: string;
      href: string;
      external?: boolean;
    };

export type ContentBlock =
  | { type: "p"; spans: InlineSpan[] }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: InlineSpan[][] };

export type BlogPost = {
  slug: string;
  title: string;
  /** SEO title under ~60 chars when combined with site template */
  metaTitle: string;
  description: string;
  date: string; // ISO YYYY-MM-DD
  readTime: string;
  excerpt: string;
  body: ContentBlock[];
};

export function p(...spans: InlineSpan[]): ContentBlock {
  return { type: "p", spans };
}

export function h2(text: string): ContentBlock {
  return { type: "h2", text };
}

export function h3(text: string): ContentBlock {
  return { type: "h3", text };
}

export function ul(...items: InlineSpan[][]): ContentBlock {
  return { type: "ul", items };
}

export function link(
  text: string,
  href: string,
  external = false,
): InlineSpan {
  return { text, href, external };
}
