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

export type Region = "United Kingdom" | "Ghana" | "United States";

export interface Project {
  slug: string;
  name: string;
  client: string;
  location: string;
  region: Region;
  category: string;
  services: string[];
  year: string;
  stat: string;
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
    slug: "solstice-ash",
    name: "Solstice & Ash",
    client: "Solstice & Ash",
    location: "London, United Kingdom",
    region: "United Kingdom",
    category: "Branding",
    services: ["Brand strategy", "Visual identity", "Retail signage"],
    year: "2025",
    stat: "42% increase in flagship footfall post-launch",
    summary:
      "A full repositioning for a London fashion retailer ahead of its flagship Marylebone store opening.",
    challenge:
      "Solstice & Ash had strong product but a visual identity that no longer matched its move upmarket. Ahead of a flagship store opening, they needed a brand system confident enough to stand alongside established Marylebone neighbours.",
    approach:
      "We rebuilt the identity around a restrained serif wordmark, a warm neutral palette, and an editorial photography direction. The system was designed to flex from hangtags to storefront signage without losing precision.",
    result:
      "The rebrand launched alongside the new flagship, driving a 42% increase in footfall in the first quarter and coverage across three major UK style publications.",
    cover: { src: "/work/solstice-ash/cover.jpg", alt: "Solstice & Ash brand identity cover artwork in ivory and gold tones" },
    gallery: [
      { src: "/work/solstice-ash/detail-1.jpg", alt: "Solstice & Ash identity system detail, abstract composition" },
      { src: "/work/solstice-ash/detail-2.jpg", alt: "Solstice & Ash retail signage concept, abstract composition" },
    ],
    featured: true,
  },
  {
    slug: "kessben-foods",
    name: "Kessben Foods",
    client: "Kessben Foods Ltd.",
    location: "Accra, Ghana",
    region: "Ghana",
    category: "Brand Identity & Packaging",
    services: ["Brand identity", "Packaging design", "Export brand guidelines"],
    year: "2025",
    stat: "3 new UK retail listings within 6 months",
    summary:
      "A packaging and identity overhaul preparing an Accra food-export company for international retail shelves.",
    challenge:
      "Kessben's packaging worked domestically but didn't meet the shelf-impact or regulatory expectations of UK and EU retail buyers, limiting export conversations.",
    approach:
      "We designed a modular packaging system with clear nutritional hierarchy, a refreshed mark rooted in Ghanaian textile pattern language, and export-ready guidelines covering multiple SKUs and languages.",
    result:
      "The new packaging system helped secure three new UK retail listings within six months of rollout, alongside a 28% lift in average shelf dwell time in test markets.",
    cover: { src: "/work/kessben-foods/cover.jpg", alt: "Kessben Foods packaging identity cover artwork in warm neutral tones" },
    gallery: [
      { src: "/work/kessben-foods/detail-1.jpg", alt: "Kessben Foods packaging system detail, abstract composition" },
      { src: "/work/kessben-foods/detail-2.jpg", alt: "Kessben Foods export guideline spread, abstract composition" },
    ],
    featured: true,
  },
  {
    slug: "northwood-capital",
    name: "Northwood Capital",
    client: "Northwood Capital Partners",
    location: "New York, United States",
    region: "United States",
    category: "Web Design & Development",
    services: ["Web design", "Front-end development", "CMS integration"],
    year: "2024",
    stat: "2.1x increase in qualified investor inquiries",
    summary:
      "An investor-facing website for a New York fintech, built to earn trust in the first five seconds.",
    challenge:
      "Northwood's previous site read as a generic template and gave institutional investors little reason to trust the platform or engage further.",
    approach:
      "We designed a restrained, data-forward site with clear proof points, custom motion for key metrics, and a CMS-driven insights hub the internal team could publish to without engineering support.",
    result:
      "Within one quarter of launch, qualified investor inquiries rose 2.1x and average session duration more than doubled.",
    cover: { src: "/work/northwood-capital/cover.jpg", alt: "Northwood Capital website design cover artwork, abstract composition" },
    gallery: [
      { src: "/work/northwood-capital/detail-1.jpg", alt: "Northwood Capital website interface detail, abstract composition" },
      { src: "/work/northwood-capital/detail-2.jpg", alt: "Northwood Capital insights hub detail, abstract composition" },
    ],
    featured: true,
  },
  {
    slug: "amina-co",
    name: "Amina & Co",
    client: "Amina & Co",
    location: "Edinburgh, United Kingdom",
    region: "United Kingdom",
    category: "Branding & eCommerce",
    services: ["Brand identity", "E-commerce design", "Photography direction"],
    year: "2024",
    stat: "68% growth in online jewellery sales",
    summary:
      "A boutique Edinburgh jewellery house rebuilt as a considered, editorial e-commerce experience.",
    challenge:
      "Amina & Co's handmade jewellery had a loyal in-store following but an online presence that undersold the craft and made mobile checkout difficult.",
    approach:
      "We paired a refined identity with a bespoke e-commerce build — large-format product photography, a simplified three-step checkout, and a collections structure suited to limited-run pieces.",
    result:
      "Online jewellery sales grew 68% year-on-year, with mobile conversion nearly doubling within four months of launch.",
    cover: { src: "/work/amina-co/cover.jpg", alt: "Amina & Co brand and e-commerce cover artwork, abstract composition" },
    gallery: [
      { src: "/work/amina-co/detail-1.jpg", alt: "Amina & Co e-commerce interface detail, abstract composition" },
      { src: "/work/amina-co/detail-2.jpg", alt: "Amina & Co packaging detail, abstract composition" },
    ],
    featured: true,
  },
  {
    slug: "adom-naturals",
    name: "Adom Naturals",
    client: "Adom Naturals",
    location: "Kumasi, Ghana",
    region: "Ghana",
    category: "Social & Digital Campaign",
    services: ["Campaign strategy", "Content production", "Paid social"],
    year: "2024",
    stat: "1.4M campaign impressions across West Africa",
    summary:
      "A social-first launch campaign introducing a Kumasi skincare brand to a regional audience.",
    challenge:
      "Adom Naturals had a strong product story but no existing digital audience and a launch date that left little room for a slow content ramp-up.",
    approach:
      "We built a six-week campaign around founder-led storytelling, region-specific creator partnerships, and a always-on paid social layer optimised weekly against engagement and conversion data.",
    result:
      "The campaign generated 1.4M impressions across West Africa and grew Adom's owned social following by 9x ahead of a planned regional retail expansion.",
    cover: { src: "/work/adom-naturals/cover.jpg", alt: "Adom Naturals campaign cover artwork, abstract composition" },
    gallery: [
      { src: "/work/adom-naturals/detail-1.jpg", alt: "Adom Naturals campaign content detail, abstract composition" },
      { src: "/work/adom-naturals/detail-2.jpg", alt: "Adom Naturals social content grid detail, abstract composition" },
    ],
    featured: true,
  },
  {
    slug: "rivergate-realty",
    name: "Rivergate Realty",
    client: "Rivergate Realty Group",
    location: "Austin, United States",
    region: "United States",
    category: "Web Design & Development",
    services: ["Web design", "Listings platform", "Front-end development"],
    year: "2023",
    stat: "35% faster average listing-to-lead time",
    summary:
      "A custom listings platform for an Austin real estate group replacing a slow, templated MLS feed.",
    challenge:
      "Rivergate's existing site relied on a bolted-on MLS plugin that loaded slowly and gave agents no control over how listings were presented.",
    approach:
      "We built a custom listings platform with instant filtering, optimised media delivery, and agent-editable feature pages for top properties, all on a headless CMS.",
    result:
      "Average listing-to-lead time dropped 35%, and page load times improved from 6.2s to under 1.4s on mobile.",
    cover: { src: "/work/rivergate-realty/cover.jpg", alt: "Rivergate Realty website design cover artwork, abstract composition" },
    gallery: [
      { src: "/work/rivergate-realty/detail-1.jpg", alt: "Rivergate Realty listings interface detail, abstract composition" },
      { src: "/work/rivergate-realty/detail-2.jpg", alt: "Rivergate Realty property page detail, abstract composition" },
    ],
    featured: true,
  },
  {
    slug: "marlowe-finch",
    name: "Marlowe & Finch",
    client: "Marlowe & Finch Studio",
    location: "Manchester, United Kingdom",
    region: "United Kingdom",
    category: "Motion & Content",
    services: ["Motion design", "Brand film", "Content systems"],
    year: "2023",
    stat: "3x increase in reel engagement across socials",
    summary:
      "A reel-driven brand refresh for a Manchester creative studio built to perform on short-form video.",
    challenge:
      "Marlowe & Finch's brand system looked sharp in print but fell flat in the motion-first environments where most of their audience actually found them.",
    approach:
      "We designed a modular motion system — animated wordmark, type-driven title cards, and a repeatable edit rhythm — so the in-house team could produce on-brand reels without a motion designer on every job.",
    result:
      "Engagement on short-form video content nearly tripled within two months, and the studio began fielding inbound enquiries directly through social for the first time.",
    cover: { src: "/work/marlowe-finch/cover.jpg", alt: "Marlowe & Finch motion identity cover artwork, abstract composition" },
    gallery: [
      { src: "/work/marlowe-finch/detail-1.jpg", alt: "Marlowe & Finch motion system detail, abstract composition" },
      { src: "/work/marlowe-finch/detail-2.jpg", alt: "Marlowe & Finch content template detail, abstract composition" },
    ],
    featured: true,
  },
  {
    slug: "kotoka-robotics",
    name: "Kotoka Robotics",
    client: "Kotoka Robotics",
    location: "Accra, Ghana",
    region: "Ghana",
    category: "Full Rebrand",
    services: ["Brand strategy", "Visual identity", "Pitch deck design", "Web design"],
    year: "2023",
    stat: "Closed a $2.1M seed round post-rebrand",
    summary:
      "A full identity and pitch-narrative rebuild for an Accra robotics and edtech startup ahead of a seed raise.",
    challenge:
      "Kotoka Robotics had category-defining technology but a brand and pitch deck that read as early-stage in a way that undercut investor confidence.",
    approach:
      "We rebuilt the identity system, pitch narrative, and deck design in parallel, then extended the system into a new marketing site that gave technical and investor audiences distinct entry points.",
    result:
      "Kotoka closed a $2.1M seed round within the quarter following the rebrand, with investors specifically citing the clarity of the new pitch materials.",
    cover: { src: "/work/kotoka-robotics/cover.jpg", alt: "Kotoka Robotics rebrand cover artwork, abstract composition" },
    gallery: [
      { src: "/work/kotoka-robotics/detail-1.jpg", alt: "Kotoka Robotics identity system detail, abstract composition" },
      { src: "/work/kotoka-robotics/detail-2.jpg", alt: "Kotoka Robotics pitch deck detail, abstract composition" },
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
