"use client";

import { motion } from "framer-motion";
import { staggerContainer, wordReveal, viewportOnce } from "@/lib/motion";
import clsx from "clsx";

/**
 * Splits `text` into words and reveals them with a staggered upward
 * translation as the element scrolls into view. Used for headline copy.
 */
export function RevealText({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      className={clsx("inline", className)}
      variants={staggerContainer(0.06, delay)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom leading-[1.3]"
          aria-hidden="true"
        >
          <motion.span
            variants={wordReveal}
            className={clsx("inline-block leading-[1.3]", wordClassName)}
          >
            {word}
            {i !== words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
