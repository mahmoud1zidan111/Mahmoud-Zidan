const AboutSectionAbout = () => {
  return (
    <section name="About" className="relative w-full h-screen mt-10">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0 lg:flex-row lg:gap-8">
        <div className="flex mt-8 md:mt-0">
          <img
            src="/images/mahmoud_zidan_2.png"
            alt="My profile"
            className="rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20"
            style={{ filter: "drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))" }}
          />
        </div>

        <div className="flex flex-col justify-center items-center h-[85%] md:h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4">
            Who I am?
          </h1>
          <div className="flex items-center bg-primary-color/20 rounded-md py-2 px-4">
            <img
              className="h-[30px] w-auto mr-2"
              src="/icons/egypt.png"
              alt=""
            />
            <h2 className="text-lg sm:text-xl md:text-2xl md:py-1 font-semibold text-white">
              Egyptian - 23 years old
            </h2>
          </div>
          <p className="text-md md:text-md text-gray-300 py-4 max-x-md text-justify">
            Hey! I’m Mahmoud Zidan, based in Cairo, Egypt (Nozha). I am a
            graduate of ASA Academy, Faculty of Marketing and International
            Trade, with a background in Marketing and Social Media. Since 2022,
            I’ve been focused on software development after discovering a strong
            passion for technology and problem-solving. I have built a solid
            foundation in C++, Data Structures, and Algorithms, and I enjoy
            transforming logical ideas and flowcharts into clean, optimized code
            and real-world applications.
          </p>
          <p className="text-md md:text-md text-gray-300 max-x-md text-justify">
            I work mainly with HTML, CSS, JavaScript, TypeScript, React, and
            Next.js, and I’m currently expanding my skills into Full-Stack
            Development by learning Node.js, Express.js, and MongoDB. I’ve
            completed freelance projects on Nafazly and continue building larger
            projects such as an AI Doctor platform and a Smart Café System. My
            goal is to create modern, scalable, and impactful web applications
            while continuously improving my skills and delivering high-quality
            user experiences.
          </p>{" "}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionAbout;
