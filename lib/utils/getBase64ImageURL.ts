import { getImageURL } from "../cloudinary";
import { CloudinaryImageProps } from "../types";

import type { TransformationOptions } from "cloudinary";

const cache = new Map<CloudinaryImageProps, string>();

export async function getBase64ImageURL(
  image: CloudinaryImageProps
): Promise<string> {
  let url = cache.get(image);
  if (url) return url;

  const blurPlaceholderTransformations: TransformationOptions = {
    width: 8,
    effect: "blur:200",
    quality: 50,
    format: "jpg",
  };

  const response = await fetch(
    getImageURL(image.public_id, blurPlaceholderTransformations, true)
  );
  const buffer = await response.arrayBuffer();
  const data = Buffer.from(buffer).toString("base64");

  return `data:image/jpeg;base64,${data}`;
}
