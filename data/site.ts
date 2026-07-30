// ---------------------------------------------------------------------------
// SITE-WIDE SETTINGS
// Edit the values below to update contact details, nav links, and social
// links across the entire site. No component code needs to change.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Mavora Creative",
  shortName: "Mavora",
  // Used to build canonical URLs, sitemap, OG tags. Set this to your real
  // production domain before deploying.
  url: "https://www.mavoracreative.com",
  description:
    "Mavora Creative is a full-service branding, web design, and digital creative agency serving clients across the United Kingdom, Ghana, and the United States.",
  email: "hello@mavoracreative.com",
  phone: "+44 20 7946 0958",
  regions: ["United Kingdom", "Ghana", "United States"] as const,
  regionsTagline: "Serving clients across the UK, Ghana & the US",
  address: "71–75 Shelton Street, London, WC2H 9JQ, United Kingdom",
  social: [
    { label: "Instagram", href: "https://instagram.com/mavoracreative" },
    { label: "LinkedIn", href: "https://linkedin.com/company/mavoracreative" },
    { label: "X", href: "https://x.com/mavoracreative" },
    { label: "Behance", href: "https://behance.net/mavoracreative" },
  ],
};

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
