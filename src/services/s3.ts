import { ACCESS_KEY, REGION, S3_BUCKET, SECRET_ACCESS_KEY } from '@/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

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
  };

  const outputData = await s3.send(new PutObjectCommand(params));

  return outputData;
};
