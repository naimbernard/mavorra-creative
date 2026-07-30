"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with your business, not a mood board — audience, competitors, goals, and the constraints that actually matter.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Strategy becomes concept. We design the identity and interfaces in parallel so brand and product feel like one decision.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Production-grade execution — engineered front-ends, print-ready systems, and content built to hold up in the real world.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "A coordinated go-live across every touchpoint, with the team on hand for the moment it actually goes public.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "Launch is the start. We stay close post-launch to iterate against real data and compound what's working.",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section data-header-theme="light" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A process built for momentum, not meetings."
          className="mb-16 sm:mb-24"
        />

        <div ref={sectionRef} className="relative">
          <div className="absolute left-[15px] top-2 hidden h-[calc(100%-1rem)] w-px bg-ink/10 sm:block lg:left-[19px]" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[15px] top-2 hidden h-[calc(100%-1rem)] w-px origin-top bg-gold sm:block lg:left-[19px]"
          />

          <ol className="flex flex-col gap-14 sm:gap-20">
            {steps.map((step) => (
              <motion.li
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="relative grid grid-cols-1 gap-3 sm:grid-cols-[40px_1fr] sm:gap-8 lg:grid-cols-[280px_1fr] lg:gap-16"
              >
                <div className="flex items-center gap-4 sm:block">
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold bg-cream font-serif text-sm text-gold-dark sm:h-10 sm:w-10">
                    {step.number}
                  </span>
                  <span className="font-serif text-2xl text-ink sm:hidden">{step.title}</span>
                </div>
                <div className="sm:pl-2 lg:pl-0">
                  <h3 className="hidden font-serif text-3xl leading-tight text-ink sm:block lg:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-balance text-base leading-relaxed text-ink/65">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
