/* eslint-disable react/prop-types */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link as ScrollLink } from "react-scroll";
import CertificateModal from "./CertificateModal";
import { imageKitUrl } from "../../../utils/imageKit";

const CertificateSlider = ({ certificates }) => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    rows: 1,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const openCertificateModal = (image) => {
    setSelectedImage(image);
  };

  return (
    <section
      name="Education"
      aria-labelledby="education-title"
      className="relative w-full h-unset md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div data-gsap="left" className="mb-2">
          <h2 id="education-title" className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1">
            Education
          </h2>
          <p className="py-6">Check out some of my certificates</p>
        </div>

        <Slider {...settings} data-gsap="up" className="grid w-[90%] lg:w-full mx-auto">
          {certificates.map((certificate, index) => (
            <div
              onClick={() => openCertificateModal(certificate.image)}
              key={index}
              className="p-4 cursor-zoom-in"
            >
              <img
                src={imageKitUrl(certificate.image, ["w-760", "q-82", "f-auto"])}
                alt={certificate.alt}
                width="760"
                height="420"
                loading="lazy"
                decoding="async"
                className="grid w-[90%] lg:w-full mx-auto mx-auto w-full h-[200px] lg:h-[220px] rounded-md object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>

      <ScrollLink
        to="Contact"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>

      <CertificateModal
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </section>
  );
};

export default CertificateSlider;
