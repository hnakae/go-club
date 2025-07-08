const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval';
            script-src-elem 'self' 'unsafe-inline' http://eidogo.com http://localhost:4001 https://app.tina.io;
            connect-src 'self' http://localhost:4001 https://app.tina.io https://identity.tinajs.io https://content.tinajs.io;
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
            style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com;
            font-src 'self' https://fonts.gstatic.com data:;
            img-src 'self' data:;
            frame-src 'self' https://online-go.com https://app.tina.io https://github.com;
          `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "eugenego.club",
          },
        ],
        destination: "https://www.eugenego.club/:path*",
        permanent: true,
      },
    ];
  },
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

module.exports = withMDX(nextConfig);
