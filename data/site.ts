// ---------------------------------------------------------------------------
// SITE-WIDE SETTINGS
// Edit the values below to update contact details, nav links, and social
// links across the entire site. No component code needs to change.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Mavorra Creative",
  shortName: "Mavorra",
  tagline: "Built to be noticed. Designed to be remembered.",
  // Used to build canonical URLs, sitemap, OG tags. Set this to your real
  // production domain before deploying.
  url: "https://www.mavorracreative.com",
  description:
    "Mavorra Creative is a marketing company that helps businesses look trusted, professional and ready to grow — through branding, websites, campaign visuals, content, SEO and lead generation systems.",
  email: "hustlebernard1@gmail.com",
  phone: "+44 7424 495918",
  whatsapp: "https://wa.me/447424495918",
  regions: ["United Kingdom", "Ghana", "United States"] as const,
  regionsTagline: "Serving clients across the UK, Ghana & the US",
  social: [
    { label: "Instagram", href: "https://instagram.com/mavorracreative" },
    { label: "LinkedIn", href: "https://linkedin.com/company/mavorracreative" },
    { label: "X", href: "https://x.com/mavorracreative" },
    { label: "Behance", href: "https://behance.net/mavorracreative" },
  ],
};

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Packages", href: "/#packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
