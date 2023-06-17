import axios from 'axios';

export const saveImage = async (dicebearQueryUrl: string) => {
  return (await axios.post('/api/image', { url: dicebearQueryUrl })).data;
};
