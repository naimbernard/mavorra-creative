import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";

interface ContactPayload {
  name: string;
  email: string;
  country: string;
  budget: string;
  projectType: string;
  message: string;
  company?: string; // honeypot — real users never fill this in
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, country, budget, projectType, message, company } = body;

  // Honeypot: if this hidden field is filled, silently pretend success.
  if (company) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !country || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, country, and message." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // ---------------------------------------------------------------------
  // Delivers the enquiry via Resend. mavorracreative.com is verified as a
  // sending domain, so `from` below can deliver to any recipient (not just
  // Resend's sandbox restriction to the account owner's own address).
  // Requires RESEND_API_KEY to be set (.env.local locally, and in the
  // Vercel project's Environment Variables for production). Until it's
  // set, submissions are logged server-side instead, so the form is still
  // testable end-to-end in local dev without a real key.
  // ---------------------------------------------------------------------
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      // resend.emails.send() resolves with { data, error } — it does NOT
      // throw for API-level failures (e.g. sandbox sender restrictions,
      // invalid domain), so those must be checked explicitly or a failed
      // send gets silently reported to the visitor as a success.
      const { error: sendError } = await resend.emails.send({
        from: `${siteConfig.name} Website <hello@mavorracreative.com>`,
        to: siteConfig.email,
        replyTo: email,
        subject: `New project enquiry from ${name} (${country})`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Country: ${country}`,
          `Budget: ${budget || "Not specified"}`,
          `Project type: ${projectType || "Not specified"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      });

      if (sendError) {
        console.error("Resend send failed:", sendError);
        return NextResponse.json(
          { error: "Something went wrong sending your message. Please email us directly." },
          { status: 502 }
        );
      }
    } catch (error) {
      console.error("Resend send failed:", error);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please email us directly." },
        { status: 502 }
      );
    }
  } else {
    console.info("[contact] RESEND_API_KEY not set — logging submission instead:", {
      name,
      email,
      country,
      budget,
      projectType,
      message,
    });

    // In production, a missing key means this enquiry is going nowhere —
    // tell the visitor so they see the "email us instead" fallback rather
    // than a false "Message sent" confirmation. In local dev, keep
    // pretending success so the full form flow stays testable without a
    // real API key.
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please email us directly." },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ success: true });
}
