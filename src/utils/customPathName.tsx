//@ts-ignore
const customPathName = (pathName) => {
  let completePathName;
  let path = pathName.replace("/", "").split("/")[0];
  path = path.split("-");

  if (path.length > 1) {
    // @ts-ignore
    completePathName = path.map((p) => {
      const firstLetter = p[0].toUpperCase();

      return firstLetter + p.slice(1, p.length);
    });
    completePathName = completePathName.join(" ");
  } else {
    path = path[0];
    const firstLetter = path[0].toUpperCase();
    completePathName = firstLetter + path.slice(1, path.length);
  }
  return completePathName;
};

export default customPathName;
