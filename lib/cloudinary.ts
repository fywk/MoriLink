import cloudinary, {
  ConfigAndUrlOptions,
  TransformationOptions
} from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true, // return "https" URLs
  sign_url: true,
});

const cloudinaryFolder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER;

export function getImageURL(
  path: string,
  options?: TransformationOptions | ConfigAndUrlOptions
): string {
  return cloudinary.v2.url(`${cloudinaryFolder}/${path}`, {
    quality: 100,
    ...(typeof options === "object" ? options : {}),
  });
}

export function getPatternThumbnailURL(path: string): string {
  const transformations = {
    quality: 100,
    width: 154,
    height: 154,
    x: 1013,
    y: 261,
    crop: "crop",
  };

  return cloudinary.v2.url(`${cloudinaryFolder}/${path}`, transformations);
}
