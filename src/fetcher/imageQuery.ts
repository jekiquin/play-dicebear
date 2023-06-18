import axios from 'axios';

export const saveImage = async (dicebearQueryUrl: string, id: number) => {
  return (
    await axios.post(
      '/api/image',
      { url: dicebearQueryUrl, id },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  ).data;
};

export const getImage = async (id: number) => {
  return (await axios.get(`/api/image/${id}`)).data;
};
