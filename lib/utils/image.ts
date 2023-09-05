import { cache } from "react";

import { env } from "../env.mjs";
import cloudinary from "../providers/cloudinary";

import type { ConfigAndUrlOptions, ResourceApiResponse, TransformationOptions } from "cloudinary";

import type { CloudinaryImageProps } from "../types/miscellaneous";

const sharp = require("sharp");

export async function generateBase64ImageURL(image: CloudinaryImageProps): Promise<string> {
  const localCache = new Map<CloudinaryImageProps["public_id"], string>();

  const url = localCache.get(image.public_id);
  if (url) return url;

  const blurPlaceholderTransformations: TransformationOptions = {
    width: 8,
    effect: "blur:200",
    quality: 50,
    format: "jpg",
  };

  const response = await fetch(
    generateImageURL(image.public_id, blurPlaceholderTransformations, true),
  );
  const buffer = await response.arrayBuffer();
  const data = Buffer.from(buffer).toString("base64");
  const base64ImageURL = `data:image/jpeg;base64,${data}`;

  localCache.set(image.public_id, base64ImageURL);
  return base64ImageURL;
}

export function generateImageURL(
  path: string,
  options?: TransformationOptions | ConfigAndUrlOptions,
  withFolderName = false,
): string {
  const publicID = withFolderName ? path : `${env.CLOUDINARY_FOLDER}/${path}`;

  return cloudinary.v2.url(publicID, {
    quality: 100,
    ...(typeof options === "object" ? options : undefined),
  });
}

/**
 * Generate a thumbnail URL for a pattern image.
 * @param path - The path to the image
 */
export function generatePatternThumbnailURL(path: string): string {
  const transformations: TransformationOptions = {
    width: 154,
    height: 154,
    x: 1013,
    y: 261,
    crop: "crop",
  };

  return generateImageURL(path, transformations);
}

export const getGalleryImages = cache(async (): Promise<CloudinaryImageProps[]> => {
  const response: ResourceApiResponse = await cloudinary.v2.search
    .expression(`folder:${env.CLOUDINARY_FOLDER}/screenshots/*`)
    .sort_by("filename", "desc")
    .max_results(500)
    .execute();

  let images: CloudinaryImageProps[] = [];
  response.resources.map((image) =>
    images.push({
      public_id: image.public_id,
      filename: image.filename,
      created_at: image.created_at,
      width: image.width,
      height: image.height,
    }),
  );

  const placeholderImagePromises = images.map((image) => generateBase64ImageURL(image));
  const base64ImageURLs = await Promise.all(placeholderImagePromises);
  images.map((image, index) => (image.blurDataURL = base64ImageURLs[index]));

  return images;
});

export async function getLatestMap() {
  const response: ResourceApiResponse = await cloudinary.v2.search
    .expression(`folder:${env.CLOUDINARY_FOLDER}/maps/*`)
    .sort_by("created_at", "desc")
    .max_results(1)
    .execute();

  const image = response.resources[0];

  return image;
}

/**
 * Get the background color of the map from a pixel located at 320, 205.
 *
 * @param input - The path to the map image
 * @returns A string representing the RGB values in CSS `rgb(R G B)` format
 */
export async function getMapBackgroundColor(input: string): Promise<string> {
  const response = await fetch(input);
  const buffer = await response.arrayBuffer();
  const data = await sharp(Buffer.from(buffer))
    .extract({ left: 320, top: 205, width: 1, height: 1 })
    .raw()
    .toBuffer();
  const [r, g, b] = data;

  return `rgb(${r} ${g} ${b})`;
}
