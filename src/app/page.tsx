'use client';
import { useDicebearContext } from '@/context/dicebearContext';
import { queryObjectToQueryString } from '@/utils/helpers';
import dynamic from 'next/dynamic';
import React from 'react';

const Img = dynamic(() => import('@/components/common/img'), { ssr: false });

export default function Home() {
  const { query } = useDicebearContext();

  const cacheValue = queryObjectToQueryString(query);
  console.log(cacheValue);
  return (
    <div className={styles.root}>
      <h2>Avatar</h2>
      <Img
        src={`/s3/avatar/1.svg?cache=${cacheValue}`}
        alt="saved image"
        className={styles.image}
      />
    </div>
  );
}

const styles = {
  root: 'flex flex-col items-center',
  image: 'h-36 w-36',
};
