const linksOfSocial = {
  gitHub: "https://github.com/mahmoud1zidan111",
  linkedIn: "https://www.linkedin.com/in/mahmoud-zidan-537ab0344",
  vercel: "https://vercel.com/mahmoud1zidan111s-projects",
};

const GeneralFooter = () => {
  return (
    <footer className="relative mt-auto flex flex-col items-center text-gray-300 mb-6 gap-2 md:flex-row md:justify-evenly">
      <nav className="flex gap-x-4 md:order-last" aria-label="Social profiles">
        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce p-5"
          target="_blank"
          rel="noreferrer"
          href={linksOfSocial.gitHub}
          aria-label="Mahmoud Zidan GitHub profile"
        >
          <i className="bx bxl-github" aria-hidden="true"></i>
        </a>

        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce p-5"
          target="_blank"
          rel="noreferrer"
          href={linksOfSocial.linkedIn}
          aria-label="Mahmoud Zidan LinkedIn profile"
        >
          <i className="bx bxl-linkedin-square" aria-hidden="true"></i>
        </a>

        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce p-5"
          target="_blank"
          rel="noreferrer"
          href={linksOfSocial.vercel}
          aria-label="Mahmoud Zidan Vercel profile"
        >
          <img
            src="https://cdn.simpleicons.org/vercel/white"
            alt=""
            aria-hidden="true"
            className="w-9 h-9"
            width="36"
            height="36"
            loading="lazy"
            decoding="async"
          />
        </a>
      </nav>

      <p className="md:order-2">Copyright ©2026 | All rights reserved</p>
      <p>@MahmoudZidan</p>
    </footer>
  );
};

export default GeneralFooter;
