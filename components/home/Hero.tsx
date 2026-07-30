"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealText } from "@/components/ui/RevealText";
import { Button } from "@/components/ui/Button";
import { EASE_EDITORIAL } from "@/lib/motion";

export function Hero() {
  return (
    <section
      data-header-theme="dark"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink text-cream"
    >
      {/* Ambient background: slow-drifting radial gradient + grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 30% 20%, rgba(182,138,78,0.16), transparent 60%), radial-gradient(50% 45% at 80% 75%, rgba(182,138,78,0.12), transparent 60%)",
          backgroundSize: "160% 160%",
        }}
      >
        <div className="absolute inset-0 animate-gradient-drift" style={{
          backgroundImage:
            "radial-gradient(45% 40% at 25% 25%, rgba(182,138,78,0.14), transparent 60%), radial-gradient(45% 40% at 75% 80%, rgba(182,138,78,0.10), transparent 60%)",
          backgroundSize: "180% 180%",
        }} />
      </div>
      <div aria-hidden="true" className="grain-overlay animate-grain" />

      <div className="relative mx-auto flex w-full max-w-8xl flex-col items-center px-5 pb-24 pt-32 text-center sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE_EDITORIAL }}
          className="mb-10"
        >
          <Image
            src="/logo/mavora-logo-white.png"
            alt="Mavora Creative"
            width={340}
            height={168}
            priority
            className="h-auto w-56 sm:w-72 lg:w-80"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.02em" }}
          animate={{ opacity: 1, letterSpacing: "0.32em" }}
          transition={{ duration: 1.2, delay: 0.5, ease: EASE_EDITORIAL }}
          className="mb-6 text-[11px] uppercase text-gold-light sm:text-xs"
        >
          Branding · Web · Digital — London · Accra · New York
        </motion.p>

        <h1 className="max-w-4xl text-balance font-serif text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-7xl">
          <RevealText text="We build brands worth remembering." delay={0.7} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: EASE_EDITORIAL }}
          className="mt-7 max-w-xl text-balance text-base leading-relaxed text-cream/70 sm:text-lg"
        >
          An independent branding and digital design studio partnering with
          ambitious companies across the UK, Ghana, and the United States.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease: EASE_EDITORIAL }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="/work" variant="solid" tone="onDark">
            View our work
          </Button>
          <Button href="/contact" variant="ghost" tone="onDark">
            Start a project →
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase font-tracking-wide text-cream/40">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-cream/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-full bg-gold"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
