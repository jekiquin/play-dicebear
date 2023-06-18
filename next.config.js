/** @type {import('next').NextConfig} */
const {
  protocol: protocolBE,
  hostname: hostnameBE,
  pathname: pathnameBE,
} = new URL(process.env.NEXT_PUBLIC_BACKEND_URL);
const {
  protocol: protocolFE,
  hostname: hostnameFE,
  port: portFE,
} = new URL(process.env.NEXT_PUBLIC_CURRENT_URL || 'http://localhost:3000');

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: protocolBE.replace(':', ''),
        hostname: hostnameBE,
        port: '',
        pathname: `${pathnameBE}**`,
      },
      {
        protocol: protocolFE.replace(':', ''),
        hostname: hostnameFE,
        port: portFE,
        pathname: '/avatar-image',
      },
    ],
  },
  rewrites() {
    return [
      {
        source: '/avatar-image/:path*',
        destination: `https://${process.env.S3_BUCKET}.s3.${process.env.REGION}.amazonaws.com/avatar/:path*
        `,
      },
    ];
  },
};

module.exports = nextConfig;
