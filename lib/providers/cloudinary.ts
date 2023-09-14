import { v2 as cloudinary } from "cloudinary";

import { env } from "../env.mjs";

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
  secure: true, // return "https" URLs
  sign_url: true,
  analytics: false,
});

export default cloudinary;
