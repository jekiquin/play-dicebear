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
    ],
  },
};

module.exports = nextConfig;
