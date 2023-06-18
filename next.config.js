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
} = new URL(process.env.NEXT_PUBLIC_CURRENT_URL);

const AVATAR_IMAGE_PATH = process.env.NEXT_PUBLIC_AVATAR_IMAGE_PATH;

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
        pathname: AVATAR_IMAGE_PATH,
      },
    ],
  },
  rewrites() {
    return [
      {
        source: `${AVATAR_IMAGE_PATH}/:path*`,
        destination: `https://${process.env.S3_BUCKET}.s3.${process.env.REGION}.amazonaws.com/:path*
        `,
      },
    ];
  },
};

module.exports = nextConfig;
