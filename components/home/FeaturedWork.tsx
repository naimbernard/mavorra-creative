"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { useIsDesktopViewport, usePrefersReducedMotion } from "@/lib/hooks";

gsap.registerPlugin(ScrollTrigger);

const gallery = projects.filter((p) => p.featured);

function CardContent({ project, index }: { project: (typeof gallery)[number]; index: number }) {
  const isContain = project.cover.fit === "contain";

  return (
    <>
      <div
        data-card-image
        className={clsx(
          "absolute inset-0 overflow-hidden rounded-sm",
          isContain && (project.cover.bg ?? "bg-black")
        )}
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(min-width: 1280px) 36vw, (min-width: 768px) 46vw, 90vw"
          className={isContain ? "object-contain" : "object-cover"}
          priority={index === 0}
        />
        {/* Base tint so text stays legible over any cover image */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/5" />
        {/* Extra scrim behind the text block for guaranteed contrast */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-ink via-ink/60 to-transparent" />
      </div>

      <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
        <span className="mb-3 w-fit rounded-full border border-cream/40 bg-ink/40 px-3 py-1 text-[11px] uppercase font-tracking-wide text-cream backdrop-blur-sm">
          {project.category}
        </span>
        <h3 className="font-serif text-2xl leading-tight text-cream drop-shadow-sm sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/90">{project.highlight}</p>
        <Link
          href={`/work/${project.slug}`}
          className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-gold-light underline decoration-transparent underline-offset-4 transition-all duration-300 hover:text-gold hover:decoration-gold"
        >
          View case study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </>
  );
}

export function FeaturedWork() {
  const isDesktop = useIsDesktopViewport(768);
  const reducedMotion = usePrefersReducedMotion();
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!isDesktop || reducedMotion) return;
    if (!pinRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const pin = pinRef.current!;

      const getDistance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cardRefs.current.forEach((card) => {
        if (!card) return;
        const img = card.querySelector<HTMLElement>("[data-card-image]");
        if (!img) return;
        gsap.fromTo(
          img,
          { clipPath: "inset(0 14% 0 14%)", scale: 1.12 },
          {
            clipPath: "inset(0 0% 0 0%)",
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: "left 88%",
              end: "left 30%",
              scrub: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, pinRef);

    return () => ctx.revert();
  }, [isDesktop, reducedMotion]);

  return (
    <section data-header-theme="dark" className="relative bg-ink text-cream">
      {/* Desktop: pinned horizontal scroll gallery */}
      {isDesktop && !reducedMotion ? (
        <div ref={pinRef} className="relative flex h-[100svh] flex-col overflow-hidden bg-ink">
          <Container className="relative z-10 shrink-0 pb-8 pt-28 lg:pb-10 lg:pt-32">
            <SectionHeading
              eyebrow="Featured work"
              title="Selected case studies"
              tone="onDark"
            />
          </Container>
          <div className="relative min-h-0 flex-1 overflow-hidden">
            <div
              ref={trackRef}
              className="absolute inset-0 flex h-full items-center gap-7 pl-[6vw] pr-[10vw] will-change-transform"
            >
              {gallery.map((project, i) => (
                <div
                  key={project.slug}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className="relative h-[calc(100%-2rem)] w-[62vw] shrink-0 overflow-hidden rounded-sm bg-ink/40 lg:w-[40vw] xl:w-[34vw]"
                >
                  <CardContent project={project} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Mobile / reduced-motion: vertical scroll-snap stack, native scroll
        <div className="py-20 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Featured work"
              title="Selected case studies"
              tone="onDark"
              className="mb-14 sm:mb-16"
            />
          </Container>
          <div className="flex snap-y snap-mandatory flex-col gap-6 px-5 sm:px-8">
            {gallery.map((project, i) => (
              <motion.div
                key={project.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="relative h-[70vh] w-full shrink-0 snap-center overflow-hidden rounded-sm"
              >
                <CardContent project={project} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
