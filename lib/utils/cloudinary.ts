import cloudinary from "cloudinary";

import { env } from "../env.mjs";

import type { ConfigAndUrlOptions, TransformationOptions } from "cloudinary";

cloudinary.v2.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
  secure: true, // return "https" URLs
  sign_url: true,
});

export default cloudinary;

export function getImageURL(
  path: string,
  options?: TransformationOptions | ConfigAndUrlOptions,
  withFolderName = false
): string {
  const publicID = withFolderName ? path : `${env.CLOUDINARY_FOLDER}/${path}`;
  return cloudinary.v2.url(publicID, {
    quality: 100,
    ...(typeof options === "object" ? options : undefined),
  });
}

export function getPatternThumbnailURL(path: string): string {
  const transformations: TransformationOptions = {
    width: 154,
    height: 154,
    x: 1013,
    y: 261,
    crop: "crop",
  };

  return getImageURL(path, transformations);
}
