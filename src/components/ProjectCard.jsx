/* eslint-disable react/prop-types */
import { imageKitUrl } from "../utils/imageKit";

const ProjectCard = ({ project, handleModalInfo }) => {
  const handleClickDemo = (demoUrl) => {
    window.open(demoUrl, "_blank", "noopener,noreferrer");
  };

  const handleClickCode = (codeUrl) => {
    window.open(codeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto  overflow-hidden">
      <img
        onClick={() => handleModalInfo(project)}
        src={imageKitUrl(project.src, ["w-520", "q-80", "f-auto"])}
        alt={`${project.title} project by Mahmoud Zidan`}
        width="520"
        height="320"
        loading="lazy"
        decoding="async"
        className="rounded-md duration-200 hover:scale-105 cursor-pointer"
      />

      <div className="flex items-center justify-center">
        <button
          onClick={() => handleClickDemo(project.demo)}
          className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
        >
          Demo
        </button>

        <button
          onClick={() => handleClickCode(project.code)}
          className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
        >
          Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
