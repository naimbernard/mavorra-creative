import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/data/site";

const privacyTitle = "Privacy Policy";
const privacyDescription = `How ${siteConfig.name} collects, uses, and protects your personal data.`;

export const metadata: Metadata = {
  title: privacyTitle,
  description: privacyDescription,
  alternates: { canonical: "/privacy" },
  twitter: {
    card: "summary",
    title: privacyTitle,
    description: privacyDescription,
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="30 July 2026">
      <section>
        <h2>Introduction</h2>
        <p>
          {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your
          privacy and is committed to protecting the personal data you share
          with us. This policy explains what information we collect, how we
          use it, and the choices you have — whether you&rsquo;re contacting
          us from the United Kingdom, Ghana, the United States, or elsewhere.
        </p>
      </section>

      <section>
        <h2>Information we collect</h2>
        <p>We collect information you provide directly to us, including:</p>
        <ul>
          <li>Contact details submitted through our contact form (name, email, country, project details, message).</li>
          <li>Email addresses submitted to our newsletter signup.</li>
          <li>Any information you send us directly via email or phone.</li>
        </ul>
        <p className="mt-3">
          We also collect limited technical data automatically — such as
          browser type, device type, and pages visited — via standard web
          analytics, to help us understand how the site is used.
        </p>
      </section>

      <section>
        <h2>How we use your information</h2>
        <ul>
          <li>To respond to enquiries submitted through our contact form.</li>
          <li>To send newsletter updates to subscribers who opt in.</li>
          <li>To improve our website&rsquo;s content, performance, and usability.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2>Third-party services</h2>
        <p>
          We use trusted third-party providers to operate this site,
          including hosting (Vercel) and transactional email delivery
          (Resend) for processing contact form submissions. These providers
          process data on our behalf and are bound by their own privacy and
          security commitments.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Depending on your location, you may have rights to access,
          correct, delete, or export your personal data, and to withdraw
          consent to marketing communications at any time. To exercise any
          of these rights, contact us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </section>

      <section>
        <h2>Data retention</h2>
        <p>
          We retain contact form submissions and correspondence only for as
          long as necessary to respond to your enquiry and maintain business
          records, after which it is securely deleted.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be directed to{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or{" "}
          {siteConfig.address}.
        </p>
      </section>
    </LegalLayout>
  );
}
