import { useEffect } from "react";
import SEO from "../SEO";
import { routesMetadata } from "../../seo/siteConfig";

const AllTechsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <SEO metadata={routesMetadata["/technologies"]} />;
};

export default AllTechsPage;
