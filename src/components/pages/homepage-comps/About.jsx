import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <section
      name="About"
      className="relative w-full md:h-screen text-white h-unset"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">
            About me
          </h2>
        </div>

        <p className="mb-4 py-6">
          Hey! I{"'"}m based in Cairo, Egypt (Nozha), and I am a graduate of ASA
          Academy, Faculty of Marketing and International Trade, with a
          background in Marketing and Social Media. Over time, I discovered a
          stronger passion for technology and problem-solving, which led me to
          transition into software development.
        </p>

        <p>
          I have a solid foundation in C++, Data Structures, and Algorithms, and
          I{"'"}ve solved many problem-solving challenges using both C++ and
          JavaScript. This experience helped me build strong logical thinking,
          improve my coding discipline, and develop the ability to write
          efficient and clean solutions. Thanks to my creativity, attention to
          detail, and determination, I developed a strong passion for web
          development. I am now focused on growing as a Junior Front-End
          Developer, working with JavaScript and React, while continuously
          improving my problem-solving skills and building real-world projects.
        </p>

        <Link
          to="/about-me"
          className="text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300"
        >
          See more
          <span className="">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </Link>
      </div>

      <ScrollLink
        to="Projects"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default About;
