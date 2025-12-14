import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dluq2gdvu/**",
      },
    ],

    qualities: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  },
};

export default nextConfig;
