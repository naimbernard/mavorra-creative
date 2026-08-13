// ---------------------------------------------------------------------------
// MARKETING BUFFET PACKAGES
// Affordable monthly marketing support tiers, shown in the homepage
// "Packages" section. Reorder or edit tiers here — no component changes
// needed.
//
// `price`/`period` are kept here for your own reference only — the site
// intentionally doesn't display them. Every "Register interest" button
// sends the visitor to /contact with their tier pre-filled in the form,
// so pricing becomes a conversation on the call instead of a number
// someone can bounce off of.
// ---------------------------------------------------------------------------

export interface Package {
  id: string;
  name: string;
  price: string;
  period: string;
  audience: string;
  description: string;
}

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter",
    price: "£120",
    period: "/month",
    audience: "For small businesses that need a basic monthly presence.",
    description:
      "Steady social content and simple monthly planning to keep your brand active and visible.",
  },
  {
    id: "growth",
    name: "Growth",
    price: "£220",
    period: "/month",
    audience: "For businesses that need more consistency and momentum.",
    description:
      "More frequent content and a clear monthly calendar, designed to build real momentum online.",
  },
  {
    id: "momentum",
    name: "Momentum",
    price: "£350",
    period: "/month",
    audience: "For businesses that need stronger visibility and campaign support.",
    description:
      "Expanded content and promotional support, plus a monthly strategy call to keep visibility growing.",
  },
  {
    id: "authority",
    name: "Authority",
    price: "£500",
    period: "/month",
    audience: "For businesses that need regular content, brand polish and stronger strategic support.",
    description:
      "Our most complete monthly package — regular content, brand polish and ongoing strategic support.",
  },
];
