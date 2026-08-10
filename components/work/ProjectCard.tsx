"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";
import { fadeUp, viewportOnce } from "@/lib/motion";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index,
  headingLevel = "h3",
}: {
  project: Project;
  index: number;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
      <Magnetic strength={0.06}>
        <Link href={`/work/${project.slug}`} className="group block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ink/5">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute left-4 top-4 rounded-full border border-ink/15 bg-cream/90 px-3 py-1 text-[11px] uppercase font-tracking-wide text-ink/70 backdrop-blur-sm">
              {project.region}
            </span>
            <span className="absolute bottom-4 left-4 translate-y-2 text-sm font-medium text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              View case study →
            </span>
          </div>
          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <Heading className="font-serif text-2xl leading-tight text-ink transition-colors group-hover:text-gold-dark">
                {project.name}
              </Heading>
              <p className="mt-1 text-sm text-ink/55">{project.category}</p>
              {project.website && (
                <p className="mt-1 text-xs text-ink/40">
                  {project.location} · {project.website}
                </p>
              )}
            </div>
            <span className="shrink-0 pt-1 text-sm text-ink/40">{project.year}</span>
          </div>
        </Link>
      </Magnetic>
    </motion.div>
  );
}
