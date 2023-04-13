/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

const withOffline = require('next-offline')

module.exports = withPWA({
  // next.js config
  experimental: {
    appDir: true,
  },
  withOffline,
})
