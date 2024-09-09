/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/about-me",
  assetPrefix: "/about-me",

  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
