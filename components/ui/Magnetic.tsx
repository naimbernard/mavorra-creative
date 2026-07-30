"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useSpring } from "framer-motion";
import { useIsDesktopPointer, usePrefersReducedMotion } from "@/lib/hooks";

/**
 * Wraps a button/card so it drifts subtly toward the cursor on desktop
 * hover ("magnetic" micro-interaction). No-op on touch devices and when
 * prefers-reduced-motion is set.
 */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktopPointer();
  const reducedMotion = usePrefersReducedMotion();
  const x = useSpring(0, { stiffness: 150, damping: 12, mass: 0.4 });
  const y = useSpring(0, { stiffness: 150, damping: 12, mass: 0.4 });

  const active = isDesktop && !reducedMotion;

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={active ? { x, y } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
