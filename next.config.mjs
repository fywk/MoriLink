await import("./lib/env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 7_776_000, // seconds (90 days)
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "acnhcdn.com" },
      {
        protocol: "https",
        hostname: "dodo.ac",
        port: "",
        pathname: "/np/images/**",
      },
    ],
    qualities: [75, 85, 95, 100],
  },
};

export default nextConfig;
