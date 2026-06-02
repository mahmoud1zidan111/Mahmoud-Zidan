import { useEffect } from "react";
import NavbarProjects from "./AllProjects-comps/NavbarProjects";
import AllProjects from "./AllProjects-comps/AllProjects";
import { useRevealAnimations } from "../../hooks/useRevealAnimations";
import SEO from "../SEO";
import { routesMetadata } from "../../seo/siteConfig";
import { projectsSchema } from "../../seo/schema";

const AllProjectsPage = () => {
  useRevealAnimations();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO metadata={routesMetadata["/projects"]} schema={[projectsSchema]} />
      <NavbarProjects />
      <AllProjects />
    </>
  );
};

export default AllProjectsPage;
