import React, { useState } from 'react';
import { avatarOptions } from '@/utils/constants';
import { DicebearQueryKey } from '@/utils/helpers';
import DicebearCategory from './dicebearCategory';
import DicebearOption from './dicebearOption';

const keyOptions = Object.keys(avatarOptions);

export default function DicebearOptions() {
  const [selectedCategory, setSelectedCategory] = useState<DicebearQueryKey>(
    keyOptions[0] as DicebearQueryKey
  );

  const category = keyOptions.map((value) => (
    <DicebearCategory
      key={value}
      className={selectedCategory === value ? 'bg-black text-white' : ''}
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
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 justify-center">{category}</div>
      <div className="flex gap-4 flex-wrap">{options}</div>
    </div>
  );
}
