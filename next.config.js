/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400, //seconds (24 hours)
    modularizeImports: {
      "@headlessui/react": {
        transform: "@headlessui/react/{{member}}",
      },
      "@tabler/icons-react": {
        transform: "@tabler/icons-react/{{member}}",
      },
      "animal-crossing": {
        transform: "animal-crossing/{{member}}",
      },
    },
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

module.exports = nextConfig;
