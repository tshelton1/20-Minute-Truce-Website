"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";

type ContactPayload = {
  firstName: string;
  email: string;
  message: string;
};

function isValidEmail(email: string) {
  // Simple client-side validation; server re-validates.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function ContactForm() {
  const firstNameId = useId();
  const emailId = useId();
  const messageId = useId();
  const honeypotId = useId();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const trimmedFirstName = firstName.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const trimmedHoneypot = honeypot.trim();

    if (trimmedHoneypot !== "") {
      setError("Please try again.");
      return;
    }

    if (!trimmedFirstName) {
      setError("Please enter your first name.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!trimmedMessage) {
      setError("Please add a message.");
      return;
    }

    const payload: ContactPayload = {
      firstName: trimmedFirstName,
      email: trimmedEmail,
      message: trimmedMessage,
    };

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, honeypot: trimmedHoneypot }),
      });

      const data: unknown = await res.json().catch(() => null);
      if (!res.ok || !data || typeof data !== "object" || !(data as any).ok) {
        const message =
          typeof data === "object" && data && "error" in data
            ? String((data as any).error)
            : "Something went wrong. Please try again.";
        setError(message);
        return;
      }

      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Honeypot: bots fill this field; real users never see it. */}
      <div className="hidden">
        <label htmlFor={honeypotId}>Leave this field blank</label>
        <input
          id={honeypotId}
          name="honeypot"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      {error ? (
        <div
          role="alert"
          aria-live="polite"
          className="flex items-start gap-3 rounded-sm border border-magenta/55 bg-magenta/10 px-5 py-4 shadow-[0_0_24px_rgba(194,24,91,0.28)]"
        >
          <span
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-magenta"
            aria-hidden="true"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="8.25"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M10 6.25v4.5M10 13.5h.01"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <p className="font-display text-[1.25rem] leading-snug font-medium tracking-tight text-magenta sm:text-[1.375rem]">
            {error}
          </p>
        </div>
      ) : null}

      {success ? (
        <div
          role="status"
          aria-live="polite"
          className="flex items-start gap-3 rounded-sm border border-teal/55 bg-teal/10 px-5 py-4 shadow-[0_0_24px_rgba(0,184,196,0.28)]"
        >
          <span
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-teal"
            aria-hidden="true"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="8.25"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M6.25 10.25l2.5 2.5 5-5.25"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="font-display text-[1.25rem] leading-snug font-medium tracking-tight text-gradient-partners sm:text-[1.375rem]">
            Thanks — we&apos;ll be in touch soon.
          </p>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={firstNameId}
            className="block text-xs tracking-[0.18em] uppercase text-cream-subtle"
          >
            First Name
          </label>
          <input
            id={firstNameId}
            name="firstName"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="given-name"
            placeholder="Your name"
            className="mt-3 w-full rounded-xl border border-cream/[0.10] bg-midnight-raised/40 px-4 py-3 font-sans text-cream placeholder:text-cream-subtle focus-visible:border-teal focus-visible:shadow-[0_0_0_3px_rgba(0,184,196,0.12)] focus-visible:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor={emailId}
            className="block text-xs tracking-[0.18em] uppercase text-cream-subtle"
          >
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-3 w-full rounded-xl border border-cream/[0.10] bg-midnight-raised/40 px-4 py-3 font-sans text-cream placeholder:text-cream-subtle focus-visible:border-teal focus-visible:shadow-[0_0_0_3px_rgba(0,184,196,0.12)] focus-visible:outline-none"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={messageId}
          className="block text-xs tracking-[0.18em] uppercase text-cream-subtle"
        >
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Tell us what you need help with."
          className="mt-3 w-full resize-none rounded-xl border border-cream/[0.10] bg-midnight-raised/40 px-4 py-3 font-sans text-cream placeholder:text-cream-subtle focus-visible:border-teal focus-visible:shadow-[0_0_0_3px_rgba(0,184,196,0.12)] focus-visible:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-partners px-6 py-3.5 font-medium text-midnight shadow-[0_0_0_1px_rgba(245,243,255,0.08)] transition-[filter,transform] duration-300 hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span>{loading ? "Sending…" : "Send message"}</span>
      </button>
    </form>
  );
}

