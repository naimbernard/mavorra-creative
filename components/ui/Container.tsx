import { type ElementType, type ReactNode } from "react";
import clsx from "clsx";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}
