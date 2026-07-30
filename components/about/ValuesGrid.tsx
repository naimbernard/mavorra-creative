"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function ValuesGrid({
  values,
}: {
  values: { title: string; description: string }[];
}) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-16"
    >
      {values.map((value) => (
        <motion.div key={value.title} variants={fadeUp} className="border-t border-ink/10 pt-6">
          <h3 className="font-serif text-2xl text-ink sm:text-3xl">{value.title}</h3>
          <p className="mt-3 max-w-md text-balance text-base leading-relaxed text-ink/65">
            {value.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
