// ---------------------------------------------------------------------------
// TESTIMONIALS
// Shown in the homepage testimonial carousel. `region` should be one of
// "United Kingdom", "Ghana", or "United States" — it's used to visually tag
// each quote and reinforce the agency's international reach.
// ---------------------------------------------------------------------------

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  region: "United Kingdom" | "Ghana" | "United States";
}

export const testimonials: Testimonial[] = [
  {
    id: "solstice-ash",
    quote:
      "Mavora understood exactly what we needed before we could fully articulate it ourselves. The identity they built gave us the confidence to open our flagship without second-guessing a single decision.",
    author: "Eleanor Hartley",
    role: "Founder",
    company: "Solstice & Ash",
    region: "United Kingdom",
  },
  {
    id: "kessben-foods",
    quote:
      "We'd been trying to break into UK retail for two years. Within six months of the new packaging, three buyers said yes. That's not a coincidence — that's design doing its job.",
    author: "Kwabena Asante",
    role: "Managing Director",
    company: "Kessben Foods",
    region: "Ghana",
  },
  {
    id: "northwood-capital",
    quote:
      "Investors judge you in the first five seconds of a website. Mavora rebuilt ours to earn trust in that window, and our inbound pipeline has never looked better.",
    author: "Michael Reyes",
    role: "Head of Investor Relations",
    company: "Northwood Capital",
    region: "United States",
  },
  {
    id: "adom-naturals",
    quote:
      "They treated our launch like it mattered as much to them as it did to us. The campaign didn't just get views — it built an audience we still own today.",
    author: "Abena Owusu",
    role: "Co-Founder",
    company: "Adom Naturals",
    region: "Ghana",
  },
  {
    id: "rivergate-realty",
    quote:
      "Every other agency we spoke to wanted to sell us a template. Mavora asked how our agents actually worked first, and it shows in every screen of the platform.",
    author: "Sarah Whitfield",
    role: "Director of Operations",
    company: "Rivergate Realty",
    region: "United States",
  },
  {
    id: "amina-co",
    quote:
      "Our jewellery deserved a site as considered as the pieces themselves. Mavora delivered that, and the sales numbers followed almost immediately.",
    author: "Amina Bello",
    role: "Founder",
    company: "Amina & Co",
    region: "United Kingdom",
  },
];
