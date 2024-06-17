// next.config.js
const nextConfig = {
  reactStrictMode: true,
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
