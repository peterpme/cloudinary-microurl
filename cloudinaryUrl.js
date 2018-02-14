const TYPES = {
  fetch_format: "f",
  crop: "c",
  effect: "e",
  flags: "fl",
  gravity: "g",
  height: "h",
  radius: "r",
  quality: "q",
  width: "w",
  dpr: "dpr"
};

module.exports = (id, options = {}) => {
  if (!options.cloud_name) throw Error("options.cloud_name required");

  const scheme = options.secure ? "https" : "http";
  const source = options.source || "upload";

  const keys = Object.keys(options);
  const urlParams = keys
    .map(key => {
      const prefix = TYPES[key];
      const value = options[key];
      if (prefix) {
        return `${prefix}_${value}`;
      }
    })
    .filter(Boolean)
    .join(",");

  const url = [
    `${scheme}://res.cloudinary.com`,
    encodeURIComponent(options.cloud_name),
    "image",
    source,
    urlParams,
    encodeURIComponent(id)
  ]
    .filter(Boolean)
    .join("/");

  return url;
};
