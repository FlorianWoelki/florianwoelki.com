/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/llms.txt',
        destination: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
        permanent: false,
      },
    ];
  },
};
