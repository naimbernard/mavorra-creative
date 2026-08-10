import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/home/CtaBand";
import { RevealText } from "@/components/ui/RevealText";
import { StatsGrid } from "@/components/about/StatsGrid";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { siteConfig } from "@/data/site";

const aboutTitle = "About Us — Marketing & Brand Strategy Agency";
const aboutDescription =
  "Mavorra Creative helps businesses look trusted, professional and ready to grow through branding, websites, campaign visuals, content, SEO and lead generation systems.";

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Mavorra Creative",
    description:
      "A marketing company built around brand image, visibility and lead generation — working across the UK, Ghana, and the United States.",
    url: "/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: aboutTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: aboutTitle,
    description: aboutDescription,
    images: ["/og-image.png"],
  },
};

const stats = [
  { value: "2", label: "Service routes: à la carte & buffet" },
  { value: "4", label: "Marketing Buffet package tiers" },
  { value: "3", label: "Countries served" },
  { value: "1", label: "Team, no hand-offs" },
];

const values = [
  {
    title: "Strategy before style",
    description:
      "Every visual decision traces back to a business reason. If we can't explain why, it doesn't ship.",
  },
  {
    title: "Built for attention and enquiries",
    description:
      "Brand and content work only earns its keep if it turns attention into enquiries — that's the standard we hold it to.",
  },
  {
    title: "Premium or affordable, never generic",
    description:
      "Choose bespoke à la carte marketing or a Marketing Buffet package — either way, it's built around your business, not a template.",
  },
  {
    title: "Partners, not vendors",
    description:
      "We stay close after launch. The best work compounds when the relationship doesn't end at delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section
        data-header-theme="dark"
        className="relative flex min-h-[70svh] flex-col justify-center overflow-hidden bg-ink pb-16 pt-36 text-cream sm:pt-40"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(50% 50% at 20% 30%, rgba(182,138,78,0.16), transparent 60%)",
          }}
        />
        <Container className="relative">
          <p className="mb-5 text-xs uppercase font-tracking-wide text-gold-light">
            About Mavorra
          </p>
          <h1 className="max-w-3xl text-balance font-serif text-4xl leading-[1.1] sm:text-6xl lg:text-7xl">
            <RevealText text="A marketing partner for businesses ready to grow." />
          </h1>
          <p className="mt-8 max-w-xl text-balance text-base leading-relaxed text-cream/70 sm:text-lg">
            We&rsquo;re a small, senior team of strategists, designers, and
            engineers helping businesses across the United Kingdom, Ghana,
            and the United States look trusted, professional, and ready to
            grow.
          </p>
        </Container>
      </section>

      <section data-header-theme="light" className="bg-cream py-16 sm:py-24">
        <Container>
          <StatsGrid stats={stats} />
        </Container>
      </section>

      <section data-header-theme="light" className="bg-cream pb-24 pt-6 sm:pb-32">
        <Container>
          <SectionHeading
            eyebrow="How we think"
            title="A small set of beliefs we don&rsquo;t compromise on."
            className="mb-14 sm:mb-20"
          />
          <ValuesGrid values={values} />
        </Container>
      </section>

      <section data-header-theme="light" className="bg-cream pb-24 sm:pb-32">
        <Container>
          <div className="rounded-sm border border-ink/10 bg-ink/[0.03] px-8 py-12 text-center sm:px-16 sm:py-16">
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">
              {siteConfig.regionsTagline}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-balance text-base leading-relaxed text-ink/65">
              Three studios, one team — working across time zones so your
              project always has someone close to it.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
