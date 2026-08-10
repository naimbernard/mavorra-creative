import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import type { Project } from "@/data/projects";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo/mavorra-logo-dark.png`,
    image: `${siteConfig.url}/og-image.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Ghana" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: services.map((s) => s.title),
    sameAs: siteConfig.social.map((s) => s.href),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
    },
  };
}

export function creativeWorkJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.seoDescription ?? project.summary,
    url: `${siteConfig.url}/work/${project.slug}`,
    image: `${siteConfig.url}${(project.heroImage ?? project.cover).src}`,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Thing",
      name: project.category,
    },
    keywords: project.services.join(", "),
    datePublished: `${project.year}-01-01`,
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
    areaServed: {
      "@type": "Country",
      name: project.region,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
