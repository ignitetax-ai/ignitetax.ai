/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ignitetax.ai",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
