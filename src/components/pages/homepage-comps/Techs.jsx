import { Link as ScrollLink } from "react-scroll";
import { imageKitUrl } from "../../../utils/imageKit";

const Techs = () => {
  const techs = [
    {
      id: 1,
      src: "portfolio/techs/html.png?updatedAt=1780363202924",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "portfolio/techs/css.png?updatedAt=1780363202598",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "portfolio/techs/javascript.png?updatedAt=1780363202620",
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: "portfolio/techs/react.png?updatedAt=1780363202959",
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 5,
      src: "portfolio/techs/c++.png?updatedAt=1780363202564",
      title: "C++",
      style: "shadow-emerald-500",
    },
    {
      id: 6,
      src: "portfolio/techs/tailwind.png?updatedAt=1780363202874",
      title: "Tailwind CSS",
      style: "shadow-cyan-700",
    },
    {
      id: 7,
      src: "portfolio/techs/node.png?updatedAt=1780363202756",
      title: "Node JS",
      style: "shadow-lime-400",
    },
    {
      id: 8,
      src: "portfolio/techs/nextjs.png?updatedAt=1780363202764",
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 9,
      src: "portfolio/techs/git.png?updatedAt=1780363202521",
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 10,
      src: "portfolio/techs/github.png?updatedAt=1780363202880",
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 11,
      src: "portfolio/techs/postgres.png?updatedAt=1780363202985",
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: "portfolio/techs/redux.png?updatedAt=1780363202855",
      title: "Redux",
      style: "shadow-violet-700",
    },
  ];

  return (
    <section
      name="Technologies"
      aria-labelledby="technologies-title"
      className="relative w-full md:h-screen h-unset"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div data-gsap="left">
          <h2
            id="technologies-title"
            className="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl"
          >
            Technologies
          </h2>
          <p className="py-6">
            These are the technologies I{"'"}ve worked with as a React and Full
            Stack Developer
          </p>
        </div>

        <div
          data-gsap-stagger="scale"
          className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                className="w-20 mx-auto py-2 md:py-4"
                src={imageKitUrl(src, ["w-480", "q-85", "f-auto"])}
                alt={`${title} technology icon`}
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
              <p className="mt-4 md:mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <ScrollLink
        to="Education"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default Techs;
