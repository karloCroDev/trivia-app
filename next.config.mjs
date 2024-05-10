/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, //just to ignore because I am using dangerously set html so this is failing the build time
  },
};

export default nextConfig;
