import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div data-header-theme="light" className="bg-cream pb-24 pt-36 sm:pt-44">
      <Container className="max-w-3xl">
        <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-ink/50">Last updated: {updated}</p>

        <div className="prose-legal mt-12 flex flex-col gap-8 text-ink/75">
          {children}
        </div>
      </Container>
    </div>
  );
}
