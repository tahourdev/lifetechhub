/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["", "media.graphassets.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // port: "",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
