const endpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;

const normalizePath = (path) => path.replace(/^\.?\//, "");

export const imageKitUrl = (src, transformations = []) => {
  if (!endpoint || src.startsWith("http")) return src;

  const transform = transformations.length
    ? `/tr:${transformations.join(",")}`
    : "";

  return `${endpoint.replace(/\/$/, "")}${transform}/${normalizePath(src)}`;
};

export const responsiveImage = ({ src, width, height, quality = 80 }) => ({
  src: imageKitUrl(src, [`w-${width}`, `q-${quality}`, "f-auto"]),
  width,
  height,
});
