import projects from "../utils/constants";
import { siteConfig } from "./siteConfig";

const absoluteUrl = (path) => new URL(path, siteConfig.siteUrl).toString();

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.siteUrl}/#person`,
  name: siteConfig.personName,
  url: siteConfig.siteUrl,
  image: absoluteUrl(siteConfig.image),
  email: siteConfig.email,
  jobTitle: "React Developer and Full Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  knowsAbout: [
    "React.js",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "Frontend Development",
    "Full Stack Development",
    "Data Structures",
    "Algorithms",
  ],
  sameAs: siteConfig.sameAs,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.siteUrl}/#website`,
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  inLanguage: "en",
  publisher: {
    "@id": `${siteConfig.siteUrl}/#person`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.siteUrl}/projects?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const webPageSchema = ({ title, description, path }) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name: title,
  description,
  inLanguage: "en",
  isPartOf: {
    "@id": `${siteConfig.siteUrl}/#website`,
  },
  about: {
    "@id": `${siteConfig.siteUrl}/#person`,
  },
});

export const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteConfig.siteUrl}/projects#projects`,
  name: "Mahmoud Zidan Web Development Projects",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: project.demo,
      codeRepository: project.code,
      creator: {
        "@id": `${siteConfig.siteUrl}/#person`,
      },
      programmingLanguage: project.technologies,
      image: absoluteUrl(project.src),
    },
  })),
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});
