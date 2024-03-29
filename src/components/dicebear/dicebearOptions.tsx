import React, { useState } from 'react';
import { ROUTE, USER, avatarOptions } from '@/utils/constants';
import { DicebearQueryKey } from '@/utils/helpers';
import DicebearCategory from './dicebearCategory';
import DicebearOption from './dicebearOption';
import { useDicebearContext } from '@/context/dicebearContext';
import { saveImage } from '@/fetcher/imageQuery';
import { useRouter } from 'next/navigation';

const keyOptions = Object.keys(avatarOptions);

export default function DicebearOptions() {
  const [selectedCategory, setSelectedCategory] = useState<DicebearQueryKey>(
    keyOptions[0] as DicebearQueryKey
  );
  const router = useRouter();

  const { queryString } = useDicebearContext();

  const handleSave = async () => {
    const res = await saveImage(queryString, USER);
    router.push(ROUTE.home);
  };

  const setDicebearCategoryStyle = (value: string) =>
    selectedCategory === value ? styles.selectedCategory : '';

  const category = keyOptions.map((value) => (
    <DicebearCategory
      key={value}
      className={setDicebearCategoryStyle(value)}
      category={value}
      setSelectedCategory={setSelectedCategory}
    />
  ));

  const options = avatarOptions[selectedCategory].map((option) => (
    <DicebearOption
      key={option}
      selectedCategory={selectedCategory}
      option={option}
    />
  ));

  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={handleSave}>
        Save The Image
      </button>
      <div className={styles.category}>{category}</div>
      <div className={styles.options}>{options}</div>
    </div>
  );
}

const styles = {
  root: 'flex flex-col gap-6',
  category: 'flex gap-4 justify-center',
  options: 'flex gap-4 flex-wrap',
  selectedCategory: 'bg-black text-white',
  button:
    'w-fit grow-0 px-4 py-1 mx-auto border border-black hover:bg-black hover:text-white',
};
