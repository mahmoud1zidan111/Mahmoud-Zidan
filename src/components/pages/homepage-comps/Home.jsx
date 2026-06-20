// import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import MobileSocialLinks from "./MobileSocialLinks";
import { imageKitUrl } from "../../../utils/imageKit";

const Home = () => {
  return (
    <section
      name="Home"
      aria-labelledby="home-title"
      className="relative w-full md:h-screen h-unset mt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-0 md:flex-row md:gap-8">
        <div className="flex flex-col justify-center items-center h-[85%] md:h-full order-2 md:order-1 md:items-start">
          <h1
            id="home-title"
            className="text-4xl md:text-6xl font-bold text-white mb-2 mt-3 md:mt-0 md:mb-4"
          >
            <span data-gsap="up">I {"'"}m Mahmoud Zidan</span>
          </h1>
          <h2
            data-gsap="up"
            data-gsap-delay="0.08"
            className="rounded-md bg-primary-color/20 max-w-max px-6 inline text-xl md:text-3xl lg:text-4xl font-semibold text-white"
          >
            Full Stack Developer
          </h2>
          <p
            data-gsap="up"
            data-gsap-delay="0.16"
            className="text-gray-300 py-4 max-x-md text-justify"
          >
            React and Full-Stack Developer focused on building responsive and
            modern web applications using React, Node.js, JavaScript, Tailwind
            CSS, and modern web technologies. I also studied C++, Data
            Structures, and Algorithms, and solved many problem-solving
            challenges to strengthen my analytical and logical thinking skills.
            Currently improving my skills by creating real-world projects and
            exploring scalable full-stack solutions. Welcome to my portfolio, I
            {"'"}m excited to share my journey with you!
          </p>

          <div
            data-gsap="up"
            data-gsap-delay="0.24"
            className="hidden desktop:flex"
          >
            <Link
              to="About"
              smooth
              duration={400}
              className="group text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0"
            >
              About me
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

          <div data-gsap="up" data-gsap-delay="0.24">
            <MobileSocialLinks />
          </div>
        </div>

        <div data-gsap="scale" className="flex order-1 md:order-2 mt-8 md:mt-0">
          <img
            //add a phto in hire
            src={imageKitUrl(
              "portfolio/profile/mahmoud_zidan.png?updatedAt=1780363003070",
              ["w-480", "q-85", "f-auto"],
            )}
            alt="Mahmoud Zidan React and Full Stack Developer portrait"
            width="480"
            height="640"
            decoding="async"
            className="mb-2 rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20"
            style={{ filter: "drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
