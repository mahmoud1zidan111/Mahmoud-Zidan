export const siteConfig = {
  name: "Mahmoud Zidan Portfolio",
  personName: "Mahmoud Zidan",
  titleTemplate: "%s | Mahmoud Zidan",
  defaultTitle: "Mahmoud Zidan | React & Full Stack Developer Portfolio",
  defaultDescription:
    "Mahmoud Zidan is a React and Full Stack Developer based in Cairo, Egypt, building responsive web applications with React, JavaScript, Node.js, Tailwind CSS, and modern frontend engineering.",
  siteUrl:
    import.meta.env.VITE_PUBLIC_SITE_URL || "https://mahmoudzidan.vercel.app",
  locale: "en_US",
  language: "en",
  email: "mailto:mmaam2210@gmail.com",
  image: "/images/mahmoud_zidan.png",
  sameAs: [
    "https://www.linkedin.com/in/mahmoud-zidan-537ab0344",
    "https://github.com/mahmoud1zidan111",
    "https://vercel.com/mahmoud1zidan111s-projects",
  ],
  keywords: [
    "Mahmoud Zidan",
    "Mahmoud Zidan developer",
    "Mahmoud Zidan portfolio",
    "Mahmoud Zidan React developer",
    "Mahmoud Zidan full stack developer",
    "React developer Cairo",
    "Full Stack Developer Egypt",
    "JavaScript developer portfolio",
    "Tailwind CSS developer",
  ],
};

export const routesMetadata = {
  "/": {
    title: "Mahmoud Zidan | React & Full Stack Developer Portfolio",
    description:
      "Explore Mahmoud Zidan's developer portfolio featuring React, JavaScript, Node.js, Tailwind CSS projects, frontend engineering skills, certificates, and contact information.",
    path: "/",
    type: "website",
  },
  "/about-me": {
    title: "About Mahmoud Zidan | React Developer in Cairo",
    description:
      "Learn about Mahmoud Zidan, a Cairo-based React and Full Stack Developer with a foundation in JavaScript, C++, data structures, algorithms, and modern web development.",
    path: "/about-me",
    type: "profile",
  },
  "/projects": {
    title: "Projects | Mahmoud Zidan React Developer Portfolio",
    description:
      "Browse Mahmoud Zidan's web development projects, including React applications, AI-powered interfaces, SaaS landing pages, dashboards, and responsive frontend builds.",
    path: "/projects",
    type: "website",
  },
  "/technologies": {
    title: "Technologies | Mahmoud Zidan Full Stack Developer",
    description:
      "Discover the technologies Mahmoud Zidan works with, including React, JavaScript, Tailwind CSS, Node.js, Next.js, Redux, PostgreSQL, Git, and GitHub.",
    path: "/technologies",
    type: "website",
  },
};
