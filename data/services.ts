// ---------------------------------------------------------------------------
// SERVICES
// Shown in the homepage "Services" section. Each item needs a title, a short
// description, and a list of sub-capabilities. Reorder the array to reorder
// the section on the page.
// ---------------------------------------------------------------------------

export interface Service {
  id: string;
  number: string; // display index, e.g. "01"
  title: string;
  description: string;
  capabilities: string[];
}

export const services: Service[] = [
  {
    id: "branding",
    number: "01",
    title: "Branding & Identity",
    description:
      "Strategy-led brand identities — naming, logo systems, colour and type, brand guidelines — built to make a business look trusted and professional from the first impression.",
    capabilities: [
      "Brand strategy & positioning",
      "Naming & verbal identity",
      "Logo & visual identity systems",
      "Brand guidelines",
    ],
  },
  {
    id: "web",
    number: "02",
    title: "Website Design",
    description:
      "Fast, credible, conversion-focused websites built on modern frameworks — designed to earn trust in seconds and turn visitors into enquiries.",
    capabilities: [
      "Marketing & e-commerce websites",
      "Product & UI/UX design",
      "Front-end engineering",
      "CMS & headless integrations",
    ],
  },
  {
    id: "campaign-visuals",
    number: "03",
    title: "Campaign Visuals",
    description:
      "Adverts, promotional graphics and campaign artwork built to a consistent visual system, so every launch looks considered rather than improvised.",
    capabilities: [
      "Advert & promo design",
      "Campaign concept direction",
      "Print & digital artwork",
      "Launch & seasonal creative",
    ],
  },
  {
    id: "social",
    number: "04",
    title: "Social Media Content",
    description:
      "Platform-native content and captions that build visibility and audience trust — from single posts to fully planned monthly calendars.",
    capabilities: [
      "Post & story design",
      "Caption writing",
      "Content calendars",
      "Community-ready templates",
    ],
  },
  {
    id: "strategy",
    number: "05",
    title: "Marketing Strategy",
    description:
      "Clear, business-first marketing direction — positioning, messaging and campaign planning built around growth and customer attention, not trends.",
    capabilities: [
      "Positioning & messaging",
      "Campaign planning",
      "Audience & offer clarity",
      "Marketing roadmaps",
    ],
  },
  {
    id: "seo",
    number: "06",
    title: "SEO Improvements",
    description:
      "Practical search and visibility improvements — content, structure and wording refined so the right customers can actually find the business.",
    capabilities: [
      "On-page SEO improvements",
      "Search-friendly content wording",
      "Local & regional visibility",
      "Technical & structural checks",
    ],
  },
  {
    id: "lead-generation",
    number: "07",
    title: "Lead Generation Systems",
    description:
      "Enquiry-focused systems that turn visibility into leads — landing pages, forms and follow-up flows designed around how the business actually sells.",
    capabilities: [
      "Landing pages & offer pages",
      "Enquiry forms & funnels",
      "Follow-up & nurture flows",
      "Conversion tracking",
    ],
  },
  {
    id: "crm",
    number: "08",
    title: "Custom CRM / Enquiry Systems",
    description:
      "Simple, custom-built systems for managing enquiries, listings and customer requirements — built around the business, not a bolted-on plugin.",
    capabilities: [
      "Enquiry & lead management",
      "Custom dashboards",
      "Workflow & handover setup",
      "Integrations with existing tools",
    ],
  },
];
