import { cache } from "react";

import { env } from "../env.mjs";
import cloudinary, { getImageURL } from "../providers/cloudinary";

import type { ResourceApiResponse, TransformationOptions } from "cloudinary";

import type { CloudinaryImageProps } from "../types/miscellaneous";

export async function getBase64ImageURL(image: CloudinaryImageProps): Promise<string> {
  const localCache = new Map<CloudinaryImageProps["public_id"], string>();

  const url = localCache.get(image.public_id);
  if (url) return url;

  const blurPlaceholderTransformations: TransformationOptions = {
    width: 8,
    effect: "blur:200",
    quality: 50,
    format: "jpg",
  };

  const response = await fetch(getImageURL(image.public_id, blurPlaceholderTransformations, true));
  const buffer = await response.arrayBuffer();
  const data = Buffer.from(buffer).toString("base64");
  const base64ImageURL = `data:image/jpeg;base64,${data}`;

  localCache.set(image.public_id, base64ImageURL);
  return base64ImageURL;
}

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

/**
 * Generate a thumbnail URL for a pattern image.
 * @param path - The path to the image
 */
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
