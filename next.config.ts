import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "", // Leave this empty unless you specifically want to allow images from a custom port
        pathname: "/**", // This allows all image paths from the domain
      },
    ],
  },
};

export default nextConfig;
