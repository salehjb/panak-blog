/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    GRAPHCMS_URI: process.env.GRAPHCMS_URI,
  },
}

module.exports = nextConfig
