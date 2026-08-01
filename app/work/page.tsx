import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Work — Branding & Web Design Case Studies",
  description:
    "Selected branding, web design, SEO and marketing case studies from Mavorra Creative, working with clients across the UK, Ghana, and the United States.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work — Mavorra Creative",
    description:
      "Selected branding, web design, SEO and marketing case studies from Mavorra Creative.",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <div data-header-theme="light" className="bg-cream pb-28 pt-36 sm:pt-44">
      <Container>
        <header className="max-w-3xl">
          <p className="mb-4 text-xs uppercase font-tracking-wide text-gold-dark">
            Our work
          </p>
          <h1 className="text-balance font-serif text-5xl leading-[1.08] text-ink sm:text-6xl lg:text-7xl">
            Selected case studies.
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink/65 sm:text-lg">
            A cross-section of branding, web, and campaign work for clients
            across the United Kingdom, Ghana, and the United States.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}
