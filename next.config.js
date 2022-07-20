/** @type {import('next').NextConfig} */
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    mongodburl: `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
  },
};

module.exports = nextConfig;
