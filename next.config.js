/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    unoptimized: true, // <-- OBRIGATÓRIO para export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
