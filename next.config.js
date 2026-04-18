/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    qualities: [75, 90],
  },
  allowedDevOrigins: ['192.168.1.7'],
};

module.exports = nextConfig;
