import { DicebearQueryKey } from '@/utils/helpers';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<DicebearQueryKey>>;
  category: string;
}

export default function DicebearCategory({
  className,
  setSelectedCategory,
  category,
}: Props) {
  const handleClickCategory = () => {
    setSelectedCategory(category as DicebearQueryKey);
  };

  return (
    <button
      className={twMerge(
        'border p-1 hover:bg-black hover:text-white transition-all',
        className
      )}
      onClick={handleClickCategory}
    >
      {category.toUpperCase()}
    </button>
  );
}
