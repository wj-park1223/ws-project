/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    async rewrites() {
      return [
        {
          source: '/public/:path*',
          destination: '/:path*',
        },
      ];
    },
  };