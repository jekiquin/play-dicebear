import React from 'react';
import Img from '@/components/common/img';
import { useDicebearContext } from '@/context/dicebearContext';

export default function MainImage() {
  const { queryString } = useDicebearContext();

  return <Img src={queryString} alt="avatar" className={styles.img} />;
}

const styles = {
  img: 'h-56 w-56 rounded-full overflow-hidden',
};
