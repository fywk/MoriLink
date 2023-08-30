import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    MY_SECRET_REVALIDATION_TOKEN: z.string().min(1),
    CLOUDINARY_CLOUD_NAME: z.string().min(1),
    CLOUDINARY_API_KEY: z.string().min(1),
    CLOUDINARY_API_SECRET: z.string().min(1),
    CLOUDINARY_FOLDER: z.string().min(1),
    OPENWEATHER_API_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: {},
});
