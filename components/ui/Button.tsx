import Link from "next/link";
import type { ReactNode } from "react";
import clsx from "clsx";
import { Magnetic } from "./Magnetic";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  tone?: "onLight" | "onDark";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "solid",
  tone = "onLight",
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 min-h-[44px]";

  const styles: Record<string, string> = {
    "solid-onLight": "bg-ink text-cream hover:bg-gold",
    "solid-onDark": "bg-cream text-ink hover:bg-gold hover:text-ink",
    "outline-onLight": "border border-ink text-ink hover:border-gold hover:text-gold",
    "outline-onDark": "border border-cream/40 text-cream hover:border-gold hover:text-gold",
    "ghost-onLight": "text-ink hover:text-gold",
    "ghost-onDark": "text-cream hover:text-gold",
  };

  const content = (
    <Link
      href={href}
      className={clsx(base, styles[`${variant}-${tone}`], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );

  return (
    <Magnetic className="inline-block">
      {content}
    </Magnetic>
  );
}
