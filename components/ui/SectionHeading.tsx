"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "onLight",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "onLight" | "onDark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={clsx(
            "mb-4 font-tracking-wide text-xs uppercase",
            tone === "onLight" ? "text-gold-dark" : "text-gold-light"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={clsx(
          "text-balance font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl",
          tone === "onLight" ? "text-ink" : "text-cream"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={clsx(
            "mt-5 text-balance text-base leading-relaxed sm:text-lg",
            tone === "onLight" ? "text-ink/70" : "text-cream/70"
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
