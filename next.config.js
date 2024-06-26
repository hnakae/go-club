// next.config.js

const withMDX = require("@next/mdx")();
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/ClubExpressClubFiles/454497/graphics/**",
      },
    ],
  },
};

module.exports = nextConfig;
