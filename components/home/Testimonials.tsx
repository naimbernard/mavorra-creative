"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { EASE_EDITORIAL } from "@/lib/motion";

const regionFlag: Record<string, string> = {
  "United Kingdom": "UK",
  Ghana: "GH",
  "United States": "US",
};

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const total = testimonials.length;

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6000);
    return () => clearInterval(id);
  }, [paused, reducedMotion, total]);

  function go(dir: 1 | -1) {
    setIndex((i) => (i + dir + total) % total);
  }

  const current = testimonials[index];

  return (
    <section data-header-theme="light" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Client voices"
          title="What it's like to work with us."
          align="center"
          className="mx-auto"
        />

        <div
          className="relative mx-auto mt-16 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={current.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(1);
                  else if (info.offset.x > 80) go(-1);
                }}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
                className="cursor-grab text-center active:cursor-grabbing"
              >
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-[11px] uppercase font-tracking-wide text-gold-dark">
                  {regionFlag[current.region]} · {current.region}
                </span>
                <blockquote className="text-balance font-serif text-2xl leading-snug text-ink sm:text-3xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-ink/60">
                  <span className="font-semibold text-ink">{current.author}</span>
                  {" — "}
                  {current.role}, {current.company}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-gold" : "w-1.5 bg-ink/20"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold"
            >
              →
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
