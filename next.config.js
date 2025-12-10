/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <-- NECESSÁRIO PARA GERAR /out

  images: {
    unoptimized: true, // <-- NECESSÁRIO para export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
