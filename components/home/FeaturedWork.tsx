"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { fadeUp, viewportOnce } from "@/lib/motion";

const gallery = projects.filter((p) => p.featured);

function CardContent({ project, index }: { project: (typeof gallery)[number]; index: number }) {
  const isContain = project.cover.fit === "contain";

  return (
    <>
      <div
        className={clsx(
          "absolute inset-0 overflow-hidden rounded-sm",
          isContain && (project.cover.bg ?? "bg-black")
        )}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(min-width: 1024px) 31vw, (min-width: 768px) 92vw, 90vw"
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
  return (
    <section data-header-theme="dark" className="relative bg-ink text-cream">
      {/* Plain vertical layout on every screen size: stacked cards on phones,
          a 2-column grid on tablets and 3 columns from laptop up. No horizontal scrolling. */}
      <div className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Featured work"
            title="Selected case studies"
            tone="onDark"
            className="mb-14 sm:mb-16"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {gallery.map((project, i) => (
              <motion.div
                key={project.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className={clsx(
                  "relative h-[70vh] w-full overflow-hidden rounded-sm md:h-auto",
                  // An odd last card spans the full row on 2-column tablets.
                  gallery.length % 2 === 1 && i === gallery.length - 1
                    ? "md:col-span-2 md:aspect-[16/9] lg:col-span-1 lg:aspect-[4/5]"
                    : "md:aspect-[4/5]"
                )}
              >
                <CardContent project={project} index={i} />
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
