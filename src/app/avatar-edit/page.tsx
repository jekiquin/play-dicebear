'use client';

import MainImage from '@/components/dicebear/mainImage';
import DicebearOptions from '@/components/dicebear/dicebearOptions';

export default function AvatarEdit() {
  return (
    <div className={styles.root}>
      <MainImage />
      <DicebearOptions />
    </div>
  );
}

const styles = {
  root: 'flex flex-col gap-10 items-center',
};
