'use client';

import MainImage from '@/components/dicebear/mainImage';
import DicebearOptions from '@/components/dicebear/dicebearOptions';
import DicebearProvider from '@/context/dicebearContext';

export default function Home() {
  return (
    <div className={styles.root}>
      Dicebear
      <DicebearProvider>
        <MainImage />
        <DicebearOptions />
      </DicebearProvider>
    </div>
  );
}

const styles = {
  root: 'flex flex-col gap-10 items-center',
};
