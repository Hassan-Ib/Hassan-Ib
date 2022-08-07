/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // experimental: {
  //   nftTracing: true,
  // },
  // distDir: "build",
};
