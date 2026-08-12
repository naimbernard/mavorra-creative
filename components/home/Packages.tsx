"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { packages } from "@/data/packages";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Packages() {
  return (
    <section id="packages" data-header-theme="light" className="scroll-mt-24 bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Marketing Buffet"
          title="Affordable monthly marketing support."
          description="Consistent content, clean design and visibility for small businesses — without overcomplicating the process. Pick the tier that matches your momentum."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeUp}
              className="flex flex-col rounded-sm border border-ink/10 bg-cream p-7 shadow-[0_1px_0_rgba(22,21,19,0.04)] sm:p-8"
            >
              <p className="text-xs uppercase font-tracking-wide text-gold-dark">{pkg.name}</p>
              <p className="mt-3 font-serif text-2xl leading-snug text-ink">{pkg.audience}</p>

              <ul className="mt-6 flex flex-col gap-3 border-t border-ink/10 pt-6 text-sm text-ink/75">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <Button
                  href={`/contact?package=${pkg.id}`}
                  variant="outline"
                  tone="onLight"
                  className="w-full"
                >
                  Register interest
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-sm text-ink/55">
          Need something more tailored? Ask about our{" "}
          <Link href="/contact" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            à la carte marketing
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
