/** @type {import('next').NextConfig} */
const { protocol, hostname, pathname } = new URL(
  process.env.NEXT_PUBLIC_BACKEND_URL
);
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: protocol.replace(':', ''),
        hostname,
        port: '',
        pathname: `${pathname}**`,
      },
      {
        protocol: 'https',
        hostname: `${process.env.S3_BUCKET}.s3.${process.env.REGION}.amazonaws.com`,
        port: '',
        pathname: `/avatar/**`,
      },
    ],
  },
};

module.exports = nextConfig;
