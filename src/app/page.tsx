import Img from '@/components/common/img';
import React from 'react';

export default function Home() {
  return (
    <div className={styles.root}>
      <Img src="/s3/avatar/1.svg" alt="saved image" className={styles.image} />
    </div>
  );
}

const styles = {
  root: 'flex flex-col items-center',
  image: 'h-36 w-36',
};
