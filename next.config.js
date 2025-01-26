const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    loader: "custom",
    unoptimized: true,
    domains: ['marcokaehler.dev', 'tribari.github.io'],
  }
}

module.exports = nextConfig
