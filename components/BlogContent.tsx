import Link from "next/link";
import type { ContentBlock, InlineSpan } from "@/lib/blog/types";

function Inline({ spans }: { spans: InlineSpan[] }) {
  return (
    <>
      {spans.map((span, i) => {
        if (typeof span === "string") {
          return <span key={i}>{span}</span>;
        }
        if (span.external) {
          return (
            <a
              key={i}
              href={span.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal underline decoration-teal/30 underline-offset-4 transition-colors hover:decoration-teal"
            >
              {span.text}
            </a>
          );
        }
        return (
          <Link
            key={i}
            href={span.href}
            className="text-teal underline decoration-teal/30 underline-offset-4 transition-colors hover:decoration-teal"
          >
            {span.text}
          </Link>
        );
      })}
    </>
  );
}

export function BlogContent({ body }: { body: ContentBlock[] }) {
  return (
    <div className="space-y-6 text-base leading-[1.85] text-cream-muted sm:text-lg">
      {body.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className="pt-6 font-display text-3xl font-medium tracking-tight text-cream sm:text-[2rem]"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={index}
              className="pt-2 font-display text-xl font-medium tracking-tight text-cream sm:text-2xl"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc space-y-3 pl-5 marker:text-teal/70">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Inline spans={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index}>
            <Inline spans={block.spans} />
          </p>
        );
      })}
    </div>
  );
}
