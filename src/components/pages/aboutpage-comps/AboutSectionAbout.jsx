const AboutSectionAbout = () => {
  return (
    <section
      name="About"
      className="relative w-full pt-24 pb-12 md:pt-28 md:pb-16 lg:min-h-[100svh]"
    >
      <div className="mx-auto max-w-screen-lg px-4">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-12">
          {/* Image */}
          <div className="w-full flex justify-center lg:w-5/12 lg:justify-start">
            <img
              src="/images/mahmoud_zidan_2.png"
              alt="My profile"
              className="
                w-64 sm:w-72 md:w-80 lg:w-full lg:max-w-sm
                rounded-2xl object-cover
                shadow-2xl shadow-primary-color/20
              "
              style={{
                filter: "drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))",
              }}
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Who I am?
            </h1>

            <div className="mt-4 inline-flex items-center bg-primary-color/20 rounded-md py-2 px-4">
              <img
                className="h-[28px] w-auto mr-2"
                src="/icons/egypt.png"
                alt=""
              />
              <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-white">
                Egyptian - 23 years old
              </h2>
            </div>

            <div className="mt-6 space-y-4 max-w-prose">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 text-justify">
                Hey! I’m Mahmoud Zidan, based in Cairo, Egypt (Nozha). I am a
                graduate of ASA Academy, Faculty of Marketing and International
                Trade, with a background in Marketing and Social Media. Since
                2022, I’ve been focused on software development after
                discovering a strong passion for technology and
                problem-solving...
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 text-justify">
                I work mainly with HTML, CSS, JavaScript, TypeScript, React, and
                Next.js, and I’m currently expanding my skills into Full-Stack
                Development by learning Node.js, Express.js, and MongoDB...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionAbout;
