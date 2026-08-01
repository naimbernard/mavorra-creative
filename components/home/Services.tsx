"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Services() {
  const [openId, setOpenId] = useState<string>(services[0]?.id ?? "");

  return (
    <section data-header-theme="light" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Marketing built around brand, visibility and enquiries."
          description="Every capability below is available two ways: as Premium À La Carte Marketing built around a specific need, or bundled into a Marketing Buffet package for consistent monthly support."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          <div className="rounded-sm border border-ink/10 bg-ink/[0.03] p-6 sm:p-7">
            <p className="text-xs uppercase font-tracking-wide text-gold-dark">Route 01</p>
            <h3 className="mt-2 font-serif text-xl text-ink sm:text-2xl">
              Premium À La Carte Marketing
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              Custom marketing services selected around your business need —
              branding, websites, campaign visuals, content, strategy and SEO.
            </p>
          </div>
          <div className="rounded-sm border border-ink/10 bg-ink/[0.03] p-6 sm:p-7">
            <p className="text-xs uppercase font-tracking-wide text-gold-dark">Route 02</p>
            <h3 className="mt-2 font-serif text-xl text-ink sm:text-2xl">
              Marketing Buffet Packages
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              Affordable monthly marketing support for small businesses that
              need consistent content, clean design and visibility.
            </p>
          </div>
        </div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 border-t border-ink/10 sm:mt-20"
        >
          {services.map((service) => {
            const isOpen = openId === service.id;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="border-b border-ink/10"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : service.id)}
                  onMouseEnter={() => setOpenId(service.id)}
                  className="flex w-full items-center gap-6 py-7 text-left sm:py-9"
                  aria-expanded={isOpen}
                >
                  <span
                    className={clsx(
                      "font-serif text-sm transition-colors duration-300 sm:text-base",
                      isOpen ? "text-gold-dark" : "text-ink/35"
                    )}
                  >
                    {service.number}
                  </span>
                  <span
                    className={clsx(
                      "flex-1 text-balance font-serif text-3xl leading-tight transition-colors duration-300 sm:text-4xl lg:text-5xl",
                      isOpen ? "text-ink" : "text-ink/50"
                    )}
                  >
                    {service.title}
                  </span>
                  <span
                    className={clsx(
                      "hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:flex",
                      isOpen ? "rotate-45 border-gold text-gold" : "border-ink/20 text-ink/40"
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={clsx(
                    "grid transition-all duration-500 ease-editorial",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 gap-6 pb-8 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-10 sm:pb-10 sm:pl-16">
                      <p className="max-w-xl text-balance text-base leading-relaxed text-ink/65">
                        {service.description}
                      </p>
                      <ul className="flex flex-wrap gap-2 sm:justify-end">
                        {service.capabilities.map((c) => (
                          <li
                            key={c}
                            className="whitespace-nowrap rounded-full border border-ink/15 px-3 py-1.5 text-xs text-ink/60"
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
