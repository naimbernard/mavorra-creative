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

export type Region = "United Kingdom" | "Ghana" | "United States" | "India";

export interface Project {
  slug: string;
  name: string;
  client: string;
  location: string;
  region: Region;
  topLabel: string;
  category: string;
  services: string[];
  year: string;
  resultHeadline: string;
  highlight: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  cover: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "killians-drink-soda",
    name: "Killian’s Drink Soda",
    client: "Killian’s Drink Soda",
    location: "UK / Ghana",
    region: "United Kingdom",
    topLabel: "SEO & MARKETING IMPROVEMENTS · BEVERAGE BRAND",
    category: "SEO & Marketing",
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
    cover: { src: "/work/killians-drink-soda/cover.jpg", alt: "Killian’s Drink Soda marketing cover artwork, abstract composition" },
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
    cover: { src: "/work/ab-realty/cover.jpg", alt: "AB Realty web design and brand cover artwork, abstract composition" },
    gallery: [
      { src: "/work/ab-realty/detail-1.jpg", alt: "AB Realty website interface detail, abstract composition" },
      { src: "/work/ab-realty/detail-2.jpg", alt: "AB Realty lead system detail, abstract composition" },
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
