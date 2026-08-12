import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";

const contactTitle = "Contact — Start a Project";
const contactDescription =
  "Get in touch with Mavorra Creative to start a branding, website, campaign, SEO or marketing project. Serving clients across the UK, Ghana, and the United States.";

export const metadata: Metadata = {
  title: contactTitle,
  description: contactDescription,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Mavorra Creative",
    description:
      "Get in touch to start a branding, website, campaign, SEO or marketing project.",
    url: "/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: contactTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: contactTitle,
    description: contactDescription,
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <div data-header-theme="light" className="bg-cream pb-28 pt-36 sm:pt-44">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div>
          <p className="mb-4 text-xs uppercase font-tracking-wide text-gold-dark">
            Get in touch
          </p>
          <h1 className="text-balance font-serif text-5xl leading-[1.08] text-ink sm:text-6xl">
            Let&rsquo;s start a project.
          </h1>
          <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-ink/65 sm:text-lg">
            Tell us a little about what you&rsquo;re building. We work with
            businesses across the UK, Ghana and the US, and reply to every
            enquiry within one business day.
          </p>

          <dl className="mt-12 flex flex-col gap-6 border-t border-ink/10 pt-8 text-sm">
            <div>
              <dt className="text-ink/40">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${siteConfig.email}`} className="text-ink hover:text-gold-dark">
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink/40">Phone / WhatsApp</dt>
              <dd className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="text-ink hover:text-gold-dark"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gold-dark hover:text-gold"
                >
                  Message on WhatsApp →
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink/40">Studio</dt>
              <dd className="mt-1 text-ink/80">{siteConfig.address}</dd>
            </div>
            <div>
              <dt className="text-ink/40">Reach</dt>
              <dd className="mt-1 text-ink/80">{siteConfig.regionsTagline}</dd>
            </div>
          </dl>
        </div>

        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </Container>
    </div>
  );
}
