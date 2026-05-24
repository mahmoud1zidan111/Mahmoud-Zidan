const linksOfScial = {
  gitHup: "https://github.com/mahmoud1zidan111",
  linkedIn: "https://www.linkedin.com/in/mahmoud-zidan-537ab0344",
  vercel: "https://vercel.com/mahmoud1zidan111s-projects",
};
const GeneralFooter = () => {
  return (
    <footer className="relative mt-auto flex flex-col items-center text-gray-300 mb-6 gap-2 md:flex-row md:justify-evenly">
      <div className="flex gap-x-4 md:order-last">
        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce p-5"
          target="_blank"
          href={linksOfScial.gitHup}
        >
          <i className="bx bxl-github"></i>
        </a>

        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce p-5"
          target="_blank"
          href={linksOfScial.linkedIn}
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>

        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce  p-5"
          target="_blank"
          href={linksOfScial.vercel}
        >
          <img
            src="https://cdn.simpleicons.org/vercel/white"
            alt="Vercel"
            className="w-9 h-9"
          />{" "}
        </a>
      </div>

      <p className="md:order-2">• Copyright ©2024 | All rights reserved • </p>
      <p>@MahmoudZidan</p>
    </footer>
  );
};

export default GeneralFooter;
