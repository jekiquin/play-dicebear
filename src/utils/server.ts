import { getImageUrlFromS3, uploadToS3 } from '@/services/s3';
import axios from 'axios';

export const createFileName = (id: number) => {
  return `avatar/${id}.svg`;
};

export const saveImageUrlToS3 = async (url: string, id: number) => {
  const { data } = await axios.get(url);
  const fileName = createFileName(id);
  return uploadToS3(data, fileName);
};

export const getUrlFromS3 = async (id: number) => {
  try {
    const fileName = createFileName(id);
    const url = await getImageUrlFromS3(fileName);
    return await axios.get(url);
  } catch {
    throw new Error('Error fetching id from S3');
  }
};
