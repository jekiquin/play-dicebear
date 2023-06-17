import axios from 'axios';

export const saveImage = async (dicebearQueryUrl: string, id: number = 1) => {
  return (await axios.post('/api/image', { url: dicebearQueryUrl, id })).data;
};
