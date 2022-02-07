/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['marcokaehler.dev', 'tribari.github.io'],
  },
  assetPrefix: isProd ? '/marcokaehler.dev/' : ''
}

module.exports = nextConfig
