"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  return (
    <>
      <div
        data-card-image
        className="absolute inset-0 overflow-hidden rounded-sm"
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(min-width: 1280px) 36vw, (min-width: 768px) 46vw, 90vw"
          className="object-cover"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      </div>

      <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
        <span className="mb-3 w-fit rounded-full border border-cream/30 px-3 py-1 text-[11px] uppercase font-tracking-wide text-cream/90">
          {project.category}
        </span>
        <h3 className="font-serif text-2xl leading-tight text-cream sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 max-w-xs text-sm text-cream/75">{project.stat}</p>
        <Link
          href={`/work/${project.slug}`}
          className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-gold-light transition-colors hover:text-gold"
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
        <div ref={pinRef} className="relative h-[100svh] overflow-hidden">
          <Container className="absolute inset-x-0 top-16 z-10 lg:top-20">
            <SectionHeading
              eyebrow="Featured work"
              title="Selected case studies"
              tone="onDark"
            />
          </Container>
          <div
            ref={trackRef}
            className="absolute left-0 top-0 flex h-full items-center gap-7 pl-[6vw] pr-[10vw] will-change-transform"
          >
            {gallery.map((project, i) => (
              <div
                key={project.slug}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="relative h-[64vh] w-[62vw] shrink-0 overflow-hidden rounded-sm bg-ink/40 sm:h-[68vh] lg:w-[40vw] xl:w-[34vw]"
              >
                <CardContent project={project} index={i} />
              </div>
            ))}
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
              className="mb-12"
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
