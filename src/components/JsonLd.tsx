import { founder, institutions, seo, site, siteUrl } from "@/content/site";

/** Organization structured data for search engines. Empty config values are omitted. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.fullName,
    legalName: site.legalName,
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    description: seo.description,
    ...(site.email && { email: site.email }),
    ...(site.phone && { telephone: site.phone }),
    address: {
      "@type": "PostalAddress",
      ...(site.officeAddress && { streetAddress: site.officeAddress }),
      addressLocality: site.city,
      addressCountry: site.countryCode,
    },
    founder: {
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.title,
      url: founder.url,
      sameAs: [founder.url],
    },
    subOrganization: institutions.map((i) => ({
      "@type": i.category === "School" ? "School" : i.category === "Online academy" ? "EducationalOrganization" : "Organization",
      name: i.name,
      url: i.url,
    })),
    ...(site.socials.length > 0 && { sameAs: site.socials.map((s) => s.href) }),
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all values come from our own config.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
