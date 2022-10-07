/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ["links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "avatars.githubusercontent.com",
      "i.pinimg.com",
      "thumbs.dreamstime.com",
      "images.unsplash.com",
    ],
  },
};