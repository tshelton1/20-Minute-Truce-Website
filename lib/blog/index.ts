import type { BlogPost } from "./types";
import { apologizeAfterFightPost } from "./posts/apologize-after-fight";
import { breathingPost } from "./posts/breathing";
import { calmDownAngryPost } from "./posts/calm-down-angry";
import { communicateWithoutFightingPost } from "./posts/communicate-without-fighting";
import { communicationProblemsPost } from "./posts/communication-problems";
import { regretWordsPost } from "./posts/regret-words";
import { sameFightPost } from "./posts/same-fight";
import { shuttingDownPost } from "./posts/shutting-down";
import { silentTreatmentPost } from "./posts/silent-treatment";
import { timeoutPost } from "./posts/timeout";

export const blogPosts: BlogPost[] = [
  communicateWithoutFightingPost,
  silentTreatmentPost,
  calmDownAngryPost,
  communicationProblemsPost,
  apologizeAfterFightPost,
  sameFightPost,
  shuttingDownPost,
  breathingPost,
  regretWordsPost,
  timeoutPost,
].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export type { BlogPost, ContentBlock, InlineSpan } from "./types";
