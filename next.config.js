/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false;
    }
    return config;
  },
  // Force Next.js to use the WASM version of SWC
  experimental: {
    swcTraceProfiling: false,
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
