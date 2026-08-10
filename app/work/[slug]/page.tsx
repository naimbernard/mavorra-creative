import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getAdjacentProjects, getProjectBySlug, projects } from "@/data/projects";
import { creativeWorkJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  const title = project.seoTitle ?? `${project.name} — ${project.category} Case Study`;
  const description = project.seoDescription ?? project.summary;
  const shareImage = project.heroImage ?? project.cover;

  return {
    title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.name} — ${siteConfig.name}`,
      description,
      url: `/work/${project.slug}`,
      images: [
        {
          url: shareImage.src,
          width: project.heroImage ? 1200 : 1400,
          height: project.heroImage ? 1200 : 1750,
          alt: shareImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${siteConfig.name}`,
      description,
      images: [shareImage.src],
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { next } = getAdjacentProjects(project.slug);
  const heroImg = project.heroImage ?? project.cover;
  const isContain = heroImg.fit === "contain";

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd(project)) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Work", url: "/work" },
              { name: project.name, url: `/work/${project.slug}` },
            ])
          ),
        }}
      />

      <article>
        <header
          data-header-theme="dark"
          className={clsx(
            "relative flex min-h-[85svh] items-end overflow-hidden text-cream",
            isContain ? "bg-black" : "bg-ink"
          )}
        >
          <Image
            src={heroImg.src}
            alt={heroImg.alt}
            fill
            priority
            sizes="100vw"
            className={isContain ? "object-contain" : "object-cover"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
          <Container className="relative pb-14 pt-40 sm:pb-20">
            <Link
              href="/work"
              className="mb-8 inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold"
            >
              ← All work
            </Link>
            <p className="mb-3 text-xs uppercase font-tracking-wide text-gold-light">
              {project.topLabel}
            </p>
            <h1 className="max-w-3xl text-balance font-serif text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">
              <span className="sr-only">
                {project.category} case study for {project.name}, {project.location} —{" "}
              </span>
              {project.name}
            </h1>
          </Container>
        </header>

        <div data-header-theme="light" className="bg-cream">
          <Container className="grid grid-cols-2 gap-6 border-b border-ink/10 py-10 sm:grid-cols-4 sm:py-12">
            {[
              { label: "Client", value: project.client },
              { label: "Location", value: project.location },
              ...(project.website ? [{ label: "Website", value: project.website }] : []),
              { label: "Year", value: project.year },
              { label: "Services", value: project.services.join(", ") },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase font-tracking-wide text-ink/40">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-snug text-ink/80">{item.value}</p>
              </div>
            ))}
          </Container>

          <Container className="grid grid-cols-1 gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="font-serif text-2xl text-ink sm:text-3xl">The challenge</h2>
                <p className="mt-4 max-w-lg text-balance text-base leading-relaxed text-ink/65">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-ink sm:text-3xl">Our approach</h2>
                <p className="mt-4 max-w-lg text-balance text-base leading-relaxed text-ink/65">
                  {project.approach}
                </p>
              </div>
            </div>
            <div className="lg:pt-1">
              <div className="rounded-sm border border-ink/10 bg-ink/[0.03] p-8 sm:p-10">
                <p className="text-xs uppercase font-tracking-wide text-gold-dark">
                  {project.resultLabel ?? "Result"}
                </p>
                <p className="mt-4 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl">
                  {project.resultHeadline}
                </p>
                <p className="mt-5 max-w-md text-balance text-base leading-relaxed text-ink/65">
                  {project.result}
                </p>
              </div>
            </div>
          </Container>

          <Container className="grid grid-cols-1 gap-6 pb-24 sm:grid-cols-2 sm:pb-32">
            {project.gallery.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[8/5] overflow-hidden rounded-sm bg-ink/5"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            ))}
          </Container>
        </div>

        <section
          data-header-theme="dark"
          className="border-t border-cream/10 bg-ink py-20 text-cream sm:py-28"
        >
          <Container className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase font-tracking-wide text-cream/40">Next project</p>
              <Link
                href={`/work/${next.slug}`}
                className="mt-4 block text-balance font-serif text-4xl leading-tight text-cream transition-colors hover:text-gold sm:text-6xl"
              >
                {next.name} →
              </Link>
              <p className="mt-3 text-sm text-cream/50">{next.category} · {next.location}</p>
            </div>
            <Button href="/contact" variant="outline" tone="onDark">
              Start your project
            </Button>
          </Container>
        </section>
      </article>
    </>
  );
}
