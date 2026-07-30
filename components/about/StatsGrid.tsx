"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function StatsGrid({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-2 gap-8 border-y border-ink/10 py-12 sm:grid-cols-4"
    >
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={fadeUp} className="text-center sm:text-left">
          <p className="font-serif text-4xl text-ink sm:text-5xl">{stat.value}</p>
          <p className="mt-2 text-sm text-ink/55">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
