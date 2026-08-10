"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { navLinks } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

const HEADER_HEIGHT = 88;

export function Header() {
  const pathname = usePathname();
  // Always starts "light" so server and first client render match exactly;
  // useLayoutEffect below corrects it synchronously before paint, so real
  // users never see a flash — this only avoids a hydration mismatch.
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useLayoutEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-header-theme]")
    );
    if (sections.length === 0) return;

    const first = sections[0].getAttribute("data-header-theme");
    if (first === "dark" || first === "light") setTheme(first);

    let observer: IntersectionObserver;

    function build() {
      const vh = window.innerHeight;
      const bottomMargin = -(vh - HEADER_HEIGHT - 1);
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const t = entry.target.getAttribute("data-header-theme");
              if (t === "light" || t === "dark") setTheme(t);
            }
          });
        },
        { threshold: 0, rootMargin: `-${HEADER_HEIGHT}px 0px ${bottomMargin}px 0px` }
      );
      sections.forEach((s) => observer.observe(s));
    }

    build();

    function handleResize() {
      observer?.disconnect();
      build();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  // The mobile menu overlay is always a dark (bg-ink) panel, regardless of
  // the underlying section theme — so force light-on-dark header styling
  // for as long as it's open, rather than following the page theme.
  const isDark = menuOpen || theme === "dark";

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50"
        style={{ height: HEADER_HEIGHT }}
      >
        <div className="mx-auto flex h-full max-w-8xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" className="relative z-10" aria-label="Mavorra Creative — home">
            <Image
              src={isDark ? "/logo/mavorra-logo-white.png" : "/logo/mavorra-logo-dark.png"}
              alt="Mavorra Creative"
              width={210}
              height={104}
              priority
              className="h-9 w-auto transition-opacity duration-300 sm:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm font-medium tracking-wide transition-colors duration-300",
                  isDark ? "text-cream/85 hover:text-gold" : "text-ink/80 hover:text-gold-dark"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <Button
                href="/contact"
                variant="outline"
                tone={isDark ? "onDark" : "onLight"}
                className="!px-5 !py-2.5 !text-xs"
              >
                Start a project
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="relative z-10 -mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
            >
              <span
                className={clsx(
                  "block h-px w-6 transition-all duration-300",
                  isDark ? "bg-cream" : "bg-ink",
                  menuOpen && "translate-y-[3.5px] rotate-45"
                )}
              />
              <span
                className={clsx(
                  "block h-px w-6 transition-all duration-300",
                  isDark ? "bg-cream" : "bg-ink",
                  menuOpen && "-translate-y-[3.5px] -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
