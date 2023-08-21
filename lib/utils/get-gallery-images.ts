import { cache } from "react";

import { env } from "../env.mjs";
import cloudinary from "./cloudinary";
import { getBase64ImageURL } from "./get-base-64-image-url";

import type { ResourceApiResponse } from "cloudinary";
import type { CloudinaryImageProps } from "../types/miscellaneous";

export const getGalleryImages = cache(async (): Promise<CloudinaryImageProps[]> => {
  const response: ResourceApiResponse = await cloudinary.v2.search
    .expression(`folder:${env.CLOUDINARY_FOLDER}/screenshots/*`)
    .sort_by("created_at", "desc")
    .max_results(500)
    .execute();

  let images: CloudinaryImageProps[] = [];
  response.resources.map((image) =>
    images.push({
      public_id: image.public_id,
      filename: String(image.filename),
      created_at: image.created_at,
      width: image.width,
      height: image.height,
    }),
  );

  const placeholderImagePromises = images.map((image) => getBase64ImageURL(image));
  const base64ImageURLs = await Promise.all(placeholderImagePromises);
  images.map((image, index) => (image.blurDataURL = base64ImageURLs[index]));

  return images;
});
