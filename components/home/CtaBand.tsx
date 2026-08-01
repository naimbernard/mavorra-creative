"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/ui/RevealText";
import { siteConfig } from "@/data/site";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function CtaBand() {
  return (
    <section data-header-theme="dark" className="relative overflow-hidden bg-ink py-28 text-cream sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(55% 60% at 50% 100%, rgba(182,138,78,0.18), transparent 65%)",
        }}
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-4xl text-balance font-serif text-4xl leading-[1.1] sm:text-6xl lg:text-7xl">
          <RevealText text="Let's turn your attention into enquiries." />
        </h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-7 max-w-lg text-balance text-base leading-relaxed text-cream/65 sm:text-lg"
        >
          Tell us about your business and where you&rsquo;re trying to take it — we&rsquo;ll
          follow up within one business day.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button href="/contact" variant="solid" tone="onDark">
            Start a project →
          </Button>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cream/70 underline underline-offset-4 transition-colors hover:text-gold-light"
          >
            or WhatsApp {siteConfig.phone}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
