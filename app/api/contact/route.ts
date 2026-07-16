import { NextResponse } from "next/server";

type ContactBody = {
  firstName?: unknown;
  email?: unknown;
  message?: unknown;
  honeypot?: unknown;
};

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function POST(req: Request) {
  let json: ContactBody | null = null;

  try {
    json = (await req.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 },
    );
  }

  const honeypotFilled =
    typeof json?.honeypot === "string" && json.honeypot.trim().length > 0;
  if (honeypotFilled) {
    return NextResponse.json(
      { ok: false, error: "Spam detected." },
      { status: 400 },
    );
  }

  const firstName = typeof json?.firstName === "string" ? json.firstName : "";
  const email = typeof json?.email === "string" ? json.email : "";
  const message = typeof json?.message === "string" ? json.message : "";

  if (!isNonEmptyString(firstName)) {
    return NextResponse.json(
      { ok: false, error: "Please enter your first name." },
      { status: 400 },
    );
  }

  if (!isNonEmptyString(email) || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!isNonEmptyString(message)) {
    return NextResponse.json(
      { ok: false, error: "Please add a message." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "Contact service unavailable." },
      { status: 500 },
    );
  }

  const payload = {
    firstName: firstName.trim(),
    email: email.trim(),
    message: message.trim(),
    source: "20minutetruce.com contact form",
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: text || "Request failed." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { ok: false, error: "Request failed. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

