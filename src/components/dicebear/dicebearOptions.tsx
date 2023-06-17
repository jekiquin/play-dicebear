import React, { useState } from 'react';
import { avatarOptions } from '@/utils/constants';
import { DicebearQueryKey } from '@/utils/helpers';
import DicebearCategory from './dicebearCategory';
import DicebearOption from './dicebearOption';
import { useDicebearContext } from '@/context/dicebearContext';
import { saveImage } from '@/fetcher/imageQuery';
import Img from '../common/img';

const keyOptions = Object.keys(avatarOptions);

export default function DicebearOptions() {
  const [selectedCategory, setSelectedCategory] = useState<DicebearQueryKey>(
    keyOptions[0] as DicebearQueryKey
  );

  const [savedImage, setSavedImage] = useState<string>('');

  const { queryString } = useDicebearContext();

  const handleSave = async () => {
    const res = await saveImage(queryString);
    // const url = URL.createObjectURL(new Blob([res]));
    // setSavedImage(url);
    console.log(res);
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
      {/* {savedImage && (
        <img src={savedImage} alt="saved image" className="h-5 w-5" />
      )} */}
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
