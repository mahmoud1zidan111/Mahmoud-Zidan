import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const linksOfScial = {
  gitHup: "https://github.com/mahmoud1zidan111",
  linkedIn: "https://www.linkedin.com/in/mahmoud-zidan-537ab0344",
  vercel: "https://vercel.com/mahmoud1zidan111s-projects",
  Email: "mailto:mmaam2210@gmail.com",
  Cv: "/Mahmoud_Magdy_Zidan_cv.pdf",
};
const MobileSocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={20} /> LinkedIn
        </>
      ),
      href: linksOfScial.linkedIn,
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={20} /> GitHub
        </>
      ),
      href: linksOfScial.gitHup,
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={20} /> Mail
        </>
      ),
      href: linksOfScial.Email,
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={20} /> cv
        </>
      ),
      href: linksOfScial.Cv,
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex mt-4 desktop:hidden">
      <ul className="flex gap-2 flex-wrap justify-center">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex items-center gap-2 w-28 h-9 px-4 bg-gradient-to-t from-green-400/50 to-primary-color/50 rounded-md" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex gap-3 items-center w-full text-white text-sm"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileSocialLinks;
