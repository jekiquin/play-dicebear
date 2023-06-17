import { uploadToS3 } from '@/services/s3';
import axios from 'axios';

export const saveImageUrlToS3 = async (url: string, id: number) => {
  const { data } = await axios.get(url);
  const fileName = `avatar/${id}.svg`;
  return uploadToS3(data, fileName);
};
