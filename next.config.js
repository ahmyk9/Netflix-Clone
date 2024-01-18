/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['rb.gy', 'image.tmdb.org'], // Add 'rb.gy' to the list of domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
