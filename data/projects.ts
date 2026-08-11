// ---------------------------------------------------------------------------
// FEATURED WORK / CASE STUDIES
// This is the single source of truth for the /work grid, the homepage
// "Featured Work" scroll gallery, and each /work/[slug] case study page.
//
// TO ADD A NEW PROJECT: copy an existing object, give it a unique `slug`,
// and drop matching images into /public/work/<slug>/ using the same
// filenames referenced below (cover.jpg, detail-1.jpg, detail-2.jpg).
//
// TO SWAP IN REAL PROJECT IMAGES: replace the files inside
// /public/work/<slug>/ and keep the same filenames — no code changes needed.
// ---------------------------------------------------------------------------

export type Region = "United Kingdom" | "Ghana" | "United States" | "India" | "Switzerland";

export interface ProjectImage {
  src: string;
  alt: string;
  /**
   * Defaults to "cover" (fills the frame, cropping edges as needed). Use
   * "contain" for images — like logo lockups — where nothing can be
   * cropped; the frame is filled with `bg` behind it instead.
   */
  fit?: "cover" | "contain";
  /** Backdrop Tailwind class shown behind a "contain"-fit image. Defaults to "bg-black". */
  bg?: string;
}

export interface Project {
  slug: string;
  name: string;
  client: string;
  location: string;
  website?: string;
  region: Region;
  topLabel: string;
  category: string;
  /** 50-60 char, unique per-project SEO title. Falls back to `${name} — ${category} Case Study` if omitted. */
  seoTitle?: string;
  /** 150-160 char, unique per-project meta description referencing industry + location. Falls back to `summary` if omitted. */
  seoDescription?: string;
  services: string[];
  year: string;
  resultHeadline: string;
  resultLabel?: string;
  highlight: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  cover: ProjectImage;
  /** Used for the case-study detail page's full-width hero background. Falls back to `cover` if omitted. */
  heroImage?: ProjectImage;
  gallery: { src: string; alt: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "killians-drink-soda",
    name: "Killian’s Drink Soda",
    client: "Killian’s Drink Soda",
    location: "Switzerland",
    region: "Switzerland",
    topLabel: "SEO & MARKETING IMPROVEMENTS · BEVERAGE BRAND",
    category: "SEO & Marketing",
    seoTitle: "Killian's Drink Soda — SEO & Marketing Case Study",
    seoDescription:
      "SEO and marketing case study for Killian's Drink Soda, a sugar-free sparkling drink brand — sharper messaging, search visibility and social content direction.",
    services: [
      "SEO improvements",
      "Marketing strategy",
      "Content direction",
      "Social media visibility",
    ],
    year: "2026",
    resultHeadline: "Clearer marketing direction for a growing beverage brand",
    highlight:
      "Clearer content direction and stronger marketing angles for a growing beverage brand.",
    summary:
      "Sharper marketing direction and search visibility for a sugar-free sparkling drink brand.",
    challenge:
      "Killian’s Drink Soda had a strong product, but its online presence needed clearer messaging, better search visibility and more consistent marketing direction. The brand needed to communicate the benefits of its sugar-free sparkling drink in a clean, credible and customer-friendly way.",
    approach:
      "We refined the brand’s marketing message around its key product strengths: sugar-free, sparkling, refreshing and naturally lemon-led. We improved the content direction, strengthened SEO wording, created clearer promotional angles and developed social media ideas designed to make the product easier to discover, understand and promote.",
    result:
      "Mavorra Creative helped shape stronger marketing angles for Killian’s Drink Soda, improving how the product could be presented online, promoted through content and positioned for customer attention.",
    cover: {
      src: "/work/killians-drink-soda/cover.jpg",
      alt: "A can of Killian's Soda Zitron sparkling lemon soda surrounded by lemon slices, ice cubes and splashing water",
    },
    gallery: [
      { src: "/work/killians-drink-soda/detail-1.jpg", alt: "Killian’s Drink Soda content direction detail, abstract composition" },
      { src: "/work/killians-drink-soda/detail-2.jpg", alt: "Killian’s Drink Soda social visibility detail, abstract composition" },
    ],
    featured: true,
  },
  {
    slug: "ab-realty",
    name: "AB Realty",
    client: "AB Realty",
    location: "Goa, India",
    region: "India",
    topLabel: "WEB DESIGN · SOCIAL MEDIA · CUSTOM CRM · LEAD GENERATION",
    category: "Web Design & Lead Systems",
    seoTitle: "AB Realty — Web Design & Lead Systems Case Study",
    seoDescription:
      "Web design, brand image and lead generation case study for AB Realty, a real estate business in Goa, India — custom CRM, social content, digital presence.",
    services: [
      "Web design",
      "Social media posts",
      "Custom CRM",
      "Brand image",
      "Lead generation systems",
    ],
    year: "2026",
    resultHeadline: "A stronger digital system for a modern real estate brand",
    highlight:
      "A cleaner digital presence, brand image and enquiry system for a modern real estate business.",
    summary:
      "A more professional digital presence and lead system for a modern real estate brand.",
    challenge:
      "AB Realty needed a stronger digital presence that matched the quality of the properties and opportunities it represents. The business needed more than just a website — it needed a cleaner brand image, better social media presentation, a simple way to manage property requirements and a clearer system for generating and handling leads.",
    approach:
      "We developed a more professional digital direction for AB Realty across web design, social media content and lead generation. The work included improving the brand’s online image, creating property-focused marketing content, designing a stronger website experience and planning a custom CRM-style system to help manage enquiries, listings and buyer requirements more efficiently.",
    result:
      "Mavorra Creative helped AB Realty move towards a more professional, organised and lead-focused online presence, connecting brand image, website structure, social media content and enquiry management into one clearer business system.",
    cover: {
      src: "/work/ab-realty/cover.png",
      alt: "AB Realty logo — an \"A/B\" monogram above the wordmark \"AB Realty, real estate agency\" on white",
      fit: "contain",
      bg: "bg-white",
    },
    heroImage: {
      src: "/work/ab-realty/hero.png",
      alt: "AB Realty logo — an \"A/B\" monogram above the wordmark \"AB Realty, real estate agency\" on white",
      fit: "contain",
      bg: "bg-white",
    },
    gallery: [
      { src: "/work/ab-realty/detail-1.jpg", alt: "AB Realty website interface detail, abstract composition" },
      { src: "/work/ab-realty/detail-2.jpg", alt: "AB Realty lead system detail, abstract composition" },
    ],
    featured: true,
  },
  {
    slug: "synergy-human-factors",
    name: "Synergy Human Factors",
    client: "Synergy Human Factors",
    location: "Bristol, UK",
    website: "synergyhumanfactors.com",
    region: "United Kingdom",
    topLabel: "WEB DESIGN · SEO · MARKETING MATERIALS · HUMAN FACTORS CONSULTANCY",
    category: "Web Design & Marketing",
    seoTitle: "Synergy Human Factors — Web Design & SEO Case Study | UK",
    seoDescription:
      "How Mavorra Creative redesigned the website, improved SEO and sharpened marketing for Synergy Human Factors, a human factors consultancy in Bristol, UK.",
    services: [
      "Web design",
      "SEO improvements",
      "Marketing materials",
      "Brand messaging",
    ],
    year: "2026",
    resultHeadline: "A clearer, more credible digital presence for a specialist consultancy",
    highlight:
      "A refreshed website and stronger marketing materials for a specialist human factors consultancy.",
    summary:
      "A redesigned website, sharper SEO and clearer marketing materials for a human factors consultancy.",
    challenge:
      "Synergy Human Factors offers specialist, credibility-led consultancy work, but its website and marketing materials weren’t reflecting the expertise behind the business. The brand needed a clearer, more professional online presence, stronger search visibility and materials that could support client-facing conversations.",
    approach:
      "We redesigned the website to better communicate Synergy Human Factors’ expertise and credibility, strengthened on-page SEO to improve search visibility, and developed marketing materials that gave the consultancy clearer, more consistent messaging across its client-facing touchpoints.",
    result:
      "Mavorra Creative helped Synergy Human Factors present a more professional, credible online presence, with improved search visibility and marketing materials better suited to a specialist consultancy audience.",
    cover: {
      src: "/work/synergy-human-factors/cover.png",
      alt: "Synergy Human Factors logo — a dotted circular mark beside the wordmark \"Synergy Human Factors\" on white",
      fit: "contain",
      bg: "bg-white",
    },
    heroImage: {
      src: "/work/synergy-human-factors/hero.png",
      alt: "Synergy Human Factors logo — a dotted circular mark beside the wordmark \"Synergy Human Factors\" on white",
      fit: "contain",
      bg: "bg-white",
    },
    gallery: [
      { src: "/work/synergy-human-factors/detail-1.jpg", alt: "Synergy Human Factors website design detail, abstract composition" },
      { src: "/work/synergy-human-factors/detail-2.jpg", alt: "Synergy Human Factors marketing materials detail, abstract composition" },
    ],
    featured: true,
  },
  {
    slug: "bernard-builders",
    name: "Bernard Builders",
    client: "Bernard Builders",
    location: "Cape Coast, Ghana",
    website: "bernard-builders.com",
    region: "Ghana",
    topLabel: "BUSINESS DEVELOPMENT & GROWTH MARKETING · CONSTRUCTION",
    category: "Business Development & Growth Marketing",
    seoTitle: "Bernard Builders — Construction Brand Growth Case Study",
    seoDescription:
      "An ongoing growth marketing partnership with Bernard Builders, a construction business in Cape Coast, Ghana — lead generation, positioning, market research.",
    services: [
      "Business development",
      "Lead generation",
      "Brand positioning",
      "Market research",
      "Content creation",
    ],
    year: "2025",
    resultHeadline: "An ongoing growth partnership, extended after hitting KPI targets",
    resultLabel: "Status",
    highlight:
      "An ongoing growth partnership running lead generation, brand positioning and content for a construction business in Ghana.",
    summary:
      "An ongoing business development and growth marketing partnership for a construction business in Cape Coast, Ghana.",
    challenge:
      "Bernard Builders needed a structured growth engine rather than one-off marketing — consistent lead flow, a clearer market position, and content that supported a longer sales cycle in the construction and builders space.",
    approach:
      "Mavorra Creative was brought on as an ongoing partner rather than for a single project — running continuous lead generation, repositioning the brand for target market segments, conducting market research to guide strategy, and producing ongoing content to support the sales pipeline.",
    result:
      "Bernard Builders is a 2-year retained partnership, with an extension already agreed following delivery against the agreed 2-year KPI targets. Mavorra Creative continues to run lead generation, brand positioning, market research and content creation as an ongoing growth partner.",
    cover: {
      src: "/work/bernard-builders/cover.png",
      alt: "Bernard Builders logo mark — a gold \"BB\" monogram inside a circular emblem on a black background",
      fit: "contain",
    },
    heroImage: {
      src: "/work/bernard-builders/hero.png",
      alt: "Bernard Builders & Real Estate full gold logo lockup on a black background",
      fit: "contain",
    },
    gallery: [
      { src: "/work/bernard-builders/detail-1.jpg", alt: "Bernard Builders lead generation detail, abstract composition (placeholder — pending real project asset)" },
      { src: "/work/bernard-builders/detail-2.jpg", alt: "Bernard Builders brand positioning detail, abstract composition (placeholder — pending real project asset)" },
    ],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];
  return { next };
}
