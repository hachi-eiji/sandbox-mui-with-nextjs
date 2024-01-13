/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler:{
    emotion: {
      sourceMap: false,
    }
  }
}

module.exports = nextConfig
