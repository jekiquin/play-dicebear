import {
  ACCESS_KEY,
  REGION,
  S3_BUCKET,
  SECRET_ACCESS_KEY,
  AVATAR_IMAGE_PATH,
} from '@/config';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const initS3Client = () => {
  if (!ACCESS_KEY || !SECRET_ACCESS_KEY) throw new Error('Missing credentials');

  return new S3Client({
    region: REGION,
    credentials: {
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY,
    },
  });
};

const s3 = initS3Client();

export const uploadToS3 = async (data: string, fileName: string) => {
  if (!S3_BUCKET) throw new Error('Missing bucket name');

  const params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Body: data,
    ContentType: 'image/svg+xml',
  };

  await s3.send(new PutObjectCommand(params));

  return { url: `${AVATAR_IMAGE_PATH}/${fileName}` };
};

export const getImageUrlFromS3 = async (fileName: string) => {
  const params = {
    Bucket: S3_BUCKET,
    Key: fileName,
  };

  const command = new GetObjectCommand(params);

  return await getSignedUrl(s3, command);
};
