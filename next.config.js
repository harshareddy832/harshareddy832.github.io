/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/harshareddy832.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/harshareddy832.github.io/' : '',
  trailingSlash: true,
  distDir: 'out'
}

module.exports = nextConfig 