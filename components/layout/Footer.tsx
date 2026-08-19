"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { navLinks, footerLinks, siteConfig } from "@/data/site";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Placeholder newsletter handler — wire up to your ESP of choice
    // (Mailchimp, Klaviyo, Resend Audiences, etc.) by posting `email` here.
    setStatus("success");
    setEmail("");
  }

  return (
    <footer data-header-theme="dark" className="bg-ink text-cream">
      <Container className="py-16 sm:py-20 lg:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]"
        >
          <div>
            <Image
              src="/logo/mavorra-logo-white.png"
              alt="Mavorra Creative"
              width={180}
              height={89}
              className="h-9 w-auto"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase font-tracking-wide text-cream/40">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase font-tracking-wide text-cream/40">
              Contact
            </p>
            <ul className="flex flex-col gap-3 text-sm text-cream/75">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-gold">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-gold">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  WhatsApp us
                </a>
              </li>
              <li className="pt-2 text-cream/50">{siteConfig.regionsTagline}</li>
            </ul>
            <div className="mt-6 flex gap-4">
              {siteConfig.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/75 transition-colors hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase font-tracking-wide text-cream/40">
              Stay in the loop
            </p>
            <p className="mb-4 text-sm text-cream/60">
              Occasional notes on brand, design, and the work — no spam.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="min-h-[44px] w-full min-w-0 border-b border-cream/30 bg-transparent px-1 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="min-h-[44px] shrink-0 border-b border-cream/30 px-2 text-sm text-cream transition-colors hover:border-gold hover:text-gold"
              >
                Sign up
              </button>
            </form>
            {status === "success" ? (
              <p className="mt-3 text-xs text-gold-light">Thanks — you&rsquo;re on the list.</p>
            ) : null}
          </div>
        </motion.div>

        <div className="mt-16 border-t border-cream/10 pt-8 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
