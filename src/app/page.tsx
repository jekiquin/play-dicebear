import Img from '@/components/common/img';
import React from 'react';

export default function Home() {
  return (
    <div className={styles.root}>
      <h2>Avatar</h2>
      <Img
        src={`/s3/avatar/1.svg?cache=${Date.now()}`}
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
