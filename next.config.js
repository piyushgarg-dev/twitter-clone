/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "piyush-twitter-new.s3.ap-south-1.amazonaws.com",
      "i.imgur.com",
    ],
  },
};

module.exports = nextConfig;
