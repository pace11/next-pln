export const previewImage = ({ img }) => {
  const imgArray = JSON.parse(img);
  if (!img) return "";
  if (Array.isArray(imgArray)) {
    return imgArray?.[0]?.url;
  }
};
