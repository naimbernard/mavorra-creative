"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { fadeUp, viewportOnce } from "@/lib/motion";

const countries = [
  "United Kingdom",
  "Ghana",
  "United States",
  "— Other —",
  "Canada",
  "Nigeria",
  "South Africa",
  "Other",
];

const budgets = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

const projectTypes = [
  "Branding & Identity",
  "Web Design & Development",
  "Social & Digital Campaign",
  "Motion & Content",
  "Full Rebrand",
  "Other",
];

const inputClasses =
  "min-h-[44px] w-full rounded-sm border border-ink/15 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-sm border border-gold/30 bg-gold/5 p-8 text-center sm:p-12"
      >
        <p className="font-serif text-2xl text-ink sm:text-3xl">Message sent.</p>
        <p className="mt-3 text-balance text-ink/65">
          Thanks for reaching out — we&rsquo;ll reply within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
      noValidate
    >
      {/* Honeypot field — hidden from real users, catches basic bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="country" className="mb-2 block text-sm font-medium text-ink">
            Country
          </label>
          <select id="country" name="country" required defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Select a country
            </option>
            {countries.map((c) => (
              <option key={c} value={c} disabled={c.startsWith("—")}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-ink">
            Budget range
          </label>
          <select id="budget" name="budget" defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-ink">
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Select a type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClasses} resize-none`}
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-red-700" role="alert">
          {errorMessage}{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            Email us instead
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-[44px] w-fit rounded-full bg-ink px-8 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-gold disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </motion.form>
  );
}
