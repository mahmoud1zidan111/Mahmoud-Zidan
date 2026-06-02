import { useEffect } from "react";
import Navbar from "./homepage-comps/Navbar";
import Home from "./homepage-comps/Home";
import About from "./homepage-comps/About";
import MyProjects from "./homepage-comps/MyProjects";
import Techs from "./homepage-comps/Techs";
import Contact from "./homepage-comps/Contact";
import CertificateSlider from "./homepage-comps/CertificateSlider";
import { useRevealAnimations } from "../../hooks/useRevealAnimations";
import SEO from "../SEO";
import { routesMetadata } from "../../seo/siteConfig";

const HomePage = () => {
  const certificates = [
    {
      image: "/images/certificates/Mahmoud_Magdy_Suod_Sweilm_NTI.jpg",
      alt: "Mahmoud Zidan NTI web development certificate",
    },
    {
      image: "/images/certificates/Mahmoud_Magdy_Suod_Sweilm_ITIgegis.png",
      alt: "Mahmoud Zidan ITI web development certificate",
    },
  ];

  useRevealAnimations();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO metadata={routesMetadata["/"]} />
      <Navbar />
      <Home />
      <About />
      <MyProjects />
      <Techs />
      <CertificateSlider certificates={certificates} />
      <Contact />
    </>
  );
};

export default HomePage;
