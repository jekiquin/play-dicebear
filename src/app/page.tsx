'use client';
import Img from '@/components/common/img';
import { useDicebearContext } from '@/context/dicebearContext';
import { getImage } from '@/fetcher/imageQuery';

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [imgUrl, setImgUrl] = useState('');

  const fetchImageUrl = async () => {
    const { url } = await getImage(1);
    setImgUrl(url);
  };

  useEffect(() => {
    fetchImageUrl();
  }, []);

  console.log({ imgUrl });

  return (
    <div className={styles.root}>
      {imgUrl && (
        <>
          <h2>Avatar</h2>
          <Img
            src={`${imgUrl}?cache=${Date.now()}`}
            alt="saved image"
            className={styles.image}
          />
        </>
      )}
    </div>
  );
}

const styles = {
  root: 'flex flex-col items-center',
  image: 'h-36 w-36',
};
