import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/data/site";

const termsTitle = "Terms of Service";
const termsDescription = `The terms governing your use of the ${siteConfig.name} website.`;

export const metadata: Metadata = {
  title: termsTitle,
  description: termsDescription,
  alternates: { canonical: "/terms" },
  twitter: {
    card: "summary",
    title: termsTitle,
    description: termsDescription,
  },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="30 July 2026">
      <section>
        <h2>Acceptance of terms</h2>
        <p>
          By accessing or using this website, you agree to be bound by these
          Terms of Service. If you do not agree, please do not use this
          site.
        </p>
      </section>

      <section>
        <h2>Use of this website</h2>
        <p>
          This website is provided for informational purposes to showcase
          the work and services of {siteConfig.name}. You agree not to use
          the site in any way that could damage, disable, or impair it, or
          interfere with any other party&rsquo;s use of it.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          All content on this site — including text, graphics, logos,
          images, and case study materials — is the property of{" "}
          {siteConfig.name} or its clients and is protected by applicable
          intellectual property laws. Nothing on this site should be
          reproduced, distributed, or used commercially without prior
          written permission.
        </p>
      </section>

      <section>
        <h2>Client work &amp; case studies</h2>
        <p>
          Case studies and project details published on this site are
          shared with permission or presented in a summarised form. Results
          referenced in case studies reflect specific client circumstances
          and are not a guarantee of similar outcomes for future engagements.
        </p>
      </section>

      <section>
        <h2>No warranty</h2>
        <p>
          This website is provided &ldquo;as is&rdquo; without warranties of
          any kind, express or implied. We do not warrant that the site will
          be uninterrupted, error-free, or free of harmful components.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {siteConfig.name} shall
          not be liable for any indirect, incidental, or consequential
          damages arising from your use of this website.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of England and Wales,
          without regard to conflict of law principles, without prejudice to
          any mandatory consumer protections applicable in your country of
          residence.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be directed to{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
