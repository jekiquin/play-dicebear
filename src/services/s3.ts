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

const createPutObjectCommand = (fileName: string, data: string) => {
  if (!S3_BUCKET) throw new Error('Missing bucket name');

  const params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Body: data,
    ContentType: 'image/svg+xml',
    CacheControl: 'no-cache',
  };

  return new PutObjectCommand(params);
};

const createGetObjectCommand = (fileName: string) => {
  if (!S3_BUCKET) throw new Error();

  const params = {
    Bucket: S3_BUCKET,
    Key: fileName,
  };

  return new GetObjectCommand(params);
};

export const uploadToS3 = async (data: string, fileName: string) => {
  const putObjectCommand = createPutObjectCommand(fileName, data);
  await s3.send(putObjectCommand);
  const url = await getImageUrlFromS3(fileName);

  return { url };
};

export const getImageUrlFromS3 = async (fileName: string) => {
  const getObjectCommand = createGetObjectCommand(fileName);
  return await getSignedUrl(s3, getObjectCommand);
};
