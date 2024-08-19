/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "www.theinnercircle.biz",
    }]
  }
};

export default nextConfig;
