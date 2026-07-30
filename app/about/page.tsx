import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/home/CtaBand";
import { RevealText } from "@/components/ui/RevealText";
import { StatsGrid } from "@/components/about/StatsGrid";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us — Independent Creative Agency",
  description:
    "Mavora Creative is an independent branding and digital design studio working with ambitious companies across the United Kingdom, Ghana, and the United States.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Mavora Creative",
    description:
      "An independent branding and digital design studio working across the UK, Ghana, and the United States.",
    url: "/about",
  },
};

const stats = [
  { value: "8+", label: "Years in practice" },
  { value: "40+", label: "Brands launched" },
  { value: "3", label: "Countries served" },
  { value: "94%", label: "Client return rate" },
];

const values = [
  {
    title: "Strategy before style",
    description:
      "Every visual decision traces back to a business reason. If we can't explain why, it doesn't ship.",
  },
  {
    title: "Craft over templates",
    description:
      "We build systems bespoke to each brand — never a reskinned theme wearing your logo.",
  },
  {
    title: "Global by default",
    description:
      "Working across London, Accra, and New York keeps our thinking honest and our references wide.",
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
            About Mavora
          </p>
          <h1 className="max-w-3xl text-balance font-serif text-4xl leading-[1.1] sm:text-6xl lg:text-7xl">
            <RevealText text="An independent studio for brands with somewhere to be." />
          </h1>
          <p className="mt-8 max-w-xl text-balance text-base leading-relaxed text-cream/70 sm:text-lg">
            We&rsquo;re a small, senior team of strategists, designers, and
            engineers building brand and digital work for companies across
            the United Kingdom, Ghana, and the United States.
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
