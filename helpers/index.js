export const previewImage = ({ img }) => {
  const imgArray = JSON.parse(img);
  if (!img) return "";
  if (Array.isArray(imgArray)) {
    return imgArray?.[0]?.url;
  }
};

export const previewMultipleImg = ({ img }) => {
  const imgArray = JSON.parse(img);
  if (!img) return [];
  if (Array.isArray(imgArray)) {
    return imgArray?.slice(1);
  }
};
