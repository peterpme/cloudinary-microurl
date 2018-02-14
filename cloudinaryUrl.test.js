const cloudinaryUrl = require("./cloudinaryUrl");
const { Cloudinary } = require("cloudinary-core");

const cl = Cloudinary.new();

it("should default export to be a function", () => {
  expect(cloudinaryUrl("cats", { cloud_name: "dance" })).toBeDefined();
});

it("should fail when no cloud_name is present", () => {
  expect(() => {
    cloudinaryUrl();
  }).toThrow("options.cloud_name required");
});

it("should render an https (secure) url", () => {
  const options = {
    cloud_name: "dance",
    secure: true
  };
  const result = cloudinaryUrl("cats", options);
  const url = cl.url("cats", options);
  expect(result).toBe(url);
});

it("should render correctly without any additional options", () => {
  const result = cloudinaryUrl("cats", { cloud_name: "dance" });
  const url = cl.url("cats", { cloud_name: "dance" });
  expect(result).toBe(url);
});

it("should render correctly with crop and width", () => {
  const options = {
    cloud_name: "dance",
    crop: "fill",
    width: 100
  };
  const result = cloudinaryUrl("dog", options);
  const url = cl.url("dog", options);

  expect(result).toBe(url);
});

it("should render a bunch of different transformations", () => {
  const options = {
    crop: "fit",
    effect: "blur:200",
    fetch_format: "auto",
    cloud_name: "dance",
    flags: "progressive",
    gravity: "face",
    height: 300,
    quality: 80,
    width: 400
  };

  const result = cloudinaryUrl("dog", options);
  const url = cl.url("dog", options);

  expect(result).toBe(url);
});
