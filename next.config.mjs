await import("./lib/env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400, //seconds (24 hours)
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      {
        protocol: "https",
        hostname: "dodo.ac",
        port: "",
        pathname: "/np/images/**",
      },
    ],
  },
};

export default nextConfig;
