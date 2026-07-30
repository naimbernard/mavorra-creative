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
      "Strategy-led brand identities — naming, logo systems, colour and type, brand guidelines — built to travel across markets and hold up at any scale.",
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
    title: "Web Design & Development",
    description:
      "Fast, accessible, beautifully-crafted websites and product interfaces built on modern frameworks — designed to convert and engineered to last.",
    capabilities: [
      "Marketing & e-commerce websites",
      "Product & UI/UX design",
      "Front-end engineering",
      "CMS & headless integrations",
    ],
  },
  {
    id: "digital",
    number: "03",
    title: "Social & Digital Campaigns",
    description:
      "Platform-native campaigns that build audiences and drive measurable growth — from launch strategy through paid, organic, and lifecycle content.",
    capabilities: [
      "Campaign strategy & planning",
      "Paid social & performance creative",
      "Content calendars & community",
      "Analytics & reporting",
    ],
  },
  {
    id: "motion",
    number: "04",
    title: "Motion & Content",
    description:
      "Film, motion design, and photography that give a brand its voice in movement — from product films to social-first content libraries.",
    capabilities: [
      "Brand & product film",
      "Motion design & animation",
      "Photography & art direction",
      "Content production",
    ],
  },
];
