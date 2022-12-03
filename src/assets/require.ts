export const require = (imgPath:any) => {
  try {
    // const handlePath = imgPath.replace("@", "..");
    return new URL(imgPath, import.meta.url).href;
  } catch (error) {
    console.log(error);
  }
};
