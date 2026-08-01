// ---------------------------------------------------------------------------
// MARKETING BUFFET PACKAGES
// Affordable monthly marketing support tiers, shown in the homepage
// "Packages" section. Reorder or edit tiers here — no component changes
// needed.
// ---------------------------------------------------------------------------

export interface Package {
  id: string;
  name: string;
  price: string;
  period: string;
  audience: string;
  inclusions: string[];
}

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter",
    price: "£120",
    period: "/month",
    audience: "For small businesses that need a basic monthly presence.",
    inclusions: [
      "4 social media posts",
      "1 story set",
      "Caption writing",
      "Basic monthly planning",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "£220",
    period: "/month",
    audience: "For businesses that need more consistency and momentum.",
    inclusions: [
      "8 social media posts",
      "2 story sets",
      "Caption writing",
      "Content calendar",
    ],
  },
  {
    id: "momentum",
    name: "Momentum",
    price: "£350",
    period: "/month",
    audience: "For businesses that need stronger visibility and campaign support.",
    inclusions: [
      "12 social media posts",
      "4 story sets",
      "1 promo flyer",
      "Monthly strategy call",
    ],
  },
  {
    id: "authority",
    name: "Authority",
    price: "£500",
    period: "/month",
    audience: "For businesses that need regular content, brand polish and stronger strategic support.",
    inclusions: [
      "16 social media posts",
      "4 story sets",
      "2 promo flyers",
      "Monthly strategy support",
    ],
  },
];
