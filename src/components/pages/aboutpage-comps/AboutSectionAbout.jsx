import { imageKitUrl } from "../../../utils/imageKit";

const AboutSectionAbout = () => {
  return (
    <section
      name="About"
      aria-labelledby="about-page-title"
      className="relative w-full pt-24 pb-12 md:pt-28 md:pb-16 lg:min-h-[100svh]"
    >
      <div className="mx-auto max-w-screen-lg px-4">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-12">
          <div
            data-gsap="scale"
            className="w-full flex justify-center lg:w-5/12 lg:justify-start"
          >
            <img
              src={imageKitUrl(
                "portfolio/profile/mahmoud_zidan_2.png?updatedAt=1780363003020",
                ["w-520", "q-85", "f-auto"],
              )}
              alt="Mahmoud Zidan React developer based in Cairo Egypt"
              width="520"
              height="650"
              loading="eager"
              decoding="async"
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

          <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start">
            <h1
              id="about-page-title"
              data-gsap="right"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            >
              About Mahmoud Zidan
            </h1>

            <div
              data-gsap="right"
              className="mt-4 inline-flex items-center bg-primary-color/20 rounded-md py-2 px-4"
            >
              <img
                className="h-[28px] w-auto mr-2"
                src="/icons/egypt.png"
                alt=""
                width="28"
                height="28"
                loading="lazy"
                decoding="async"
              />
              <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-white">
                React Developer in Cairo, Egypt
              </h2>
            </div>

            <div data-gsap-stagger="up" className="mt-6 space-y-4 max-w-prose">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 text-justify">
                Hey! I{"'"}m Mahmoud Zidan, a React and Full Stack Developer
                based in Cairo, Egypt. I graduated from ASA Academy, Faculty of
                Marketing and International Trade, then moved into software
                development after discovering a strong passion for technology,
                frontend engineering, and problem-solving.
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 text-justify">
                I work mainly with HTML, CSS, JavaScript, TypeScript, React,
                Tailwind CSS, and Next.js, and I{"'"}m expanding into Full Stack
                Development with Node.js, Express.js, MongoDB, and scalable web
                application architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionAbout;
