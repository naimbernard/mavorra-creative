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
  // Wire up Resend to actually deliver the enquiry:
  //   1. npm install resend (already in package.json)
  //   2. Create an API key at https://resend.com/api-keys
  //   3. Add RESEND_API_KEY to your environment (.env.local and in the
  //      Vercel project's Environment Variables)
  //   4. Verify a sending domain in Resend, then update `from` below
  // Until RESEND_API_KEY is set, submissions are logged server-side and the
  // request still succeeds, so the form is fully testable in local dev.
  // ---------------------------------------------------------------------
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: `${siteConfig.name} Website <onboarding@resend.dev>`, // replace with a verified sending domain
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
  }

  return NextResponse.json({ success: true });
}
