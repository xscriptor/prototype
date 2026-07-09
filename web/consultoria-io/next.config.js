/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'consultoria.io' },
      { protocol: 'https', hostname: '144169719.fs1.hubspotusercontent-eu1.net' },
      { protocol: 'https', hostname: 'embed-ssl.wistia.com' },
      { protocol: 'https', hostname: 'iframe.mediadelivery.net' },
      { protocol: 'https', hostname: 'fast.wistia.net' },
    ],
  },
}

module.exports = nextConfig
