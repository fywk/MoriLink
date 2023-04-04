/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "acnhcdn.com",
      },
      {
        protocol: "https",
        hostname: "dodo.ac",
        port: "",
        pathname: "/np/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
