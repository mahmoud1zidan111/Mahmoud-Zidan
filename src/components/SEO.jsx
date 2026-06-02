/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { siteConfig, routesMetadata } from "../seo/siteConfig";
import {
  breadcrumbSchema,
  personSchema,
  webPageSchema,
  websiteSchema,
} from "../seo/schema";

const absoluteUrl = (path) => new URL(path, siteConfig.siteUrl).toString();

const SEO = ({ metadata, schema = [] }) => {
  const location = useLocation();
  const routeMetadata = metadata || routesMetadata[location.pathname] || routesMetadata["/"];
  const canonical = absoluteUrl(routeMetadata.path || location.pathname);
  const image = absoluteUrl(routeMetadata.image || siteConfig.image);
  const title = routeMetadata.title || siteConfig.defaultTitle;
  const description = routeMetadata.description || siteConfig.defaultDescription;
  const schemas = [
    personSchema,
    websiteSchema,
    webPageSchema({ title, description, path: routeMetadata.path || location.pathname }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      ...(location.pathname === "/"
        ? []
        : [{ name: title.replace(" | Mahmoud Zidan", ""), path: location.pathname }]),
    ]),
    ...schema,
  ];

  return (
    <Helmet titleTemplate={siteConfig.titleTemplate} defaultTitle={siteConfig.defaultTitle}>
      <html lang={siteConfig.language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={siteConfig.keywords.join(", ")} />
      <meta name="author" content={siteConfig.personName} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonical} />

      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:type" content={routeMetadata.type || "website"} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Mahmoud Zidan React and Full Stack Developer portfolio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
