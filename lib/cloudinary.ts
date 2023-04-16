import cloudinary from "cloudinary";

import type { ConfigAndUrlOptions, TransformationOptions } from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true, // return "https" URLs
  sign_url: true,
});

export default cloudinary;

const cloudinaryFolder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER;

export function getImageURL(
  path: string,
  options?: TransformationOptions | ConfigAndUrlOptions,
  withFolderName = false
): string {
  const publicID = withFolderName ? path : `${cloudinaryFolder}/${path}`;
  return cloudinary.v2.url(publicID, {
    quality: 100,
    ...(typeof options === "object" ? options : undefined),
  });
}

export function getPatternThumbnailURL(path: string): string {
  const transformations = {
    width: 154,
    height: 154,
    x: 1013,
    y: 261,
    crop: "crop",
  };

  return getImageURL(path, transformations);
}
