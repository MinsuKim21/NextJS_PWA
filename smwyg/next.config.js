/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const config = {
  // ...원래 next config 파일
  reactStrictMode: true,
  images: {
    domains: ['k.kakaocdn.net'],
  },
}

const nextConfig = withPWA({
  dest: 'public',
  runtimeCaching: [],
})(config);

module.exports = nextConfig;
