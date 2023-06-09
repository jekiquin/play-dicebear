import React, { useEffect, useState } from 'react';
import { avatarOptions } from '@/utils/constants';
import { twMerge } from 'tailwind-merge';
import { DicebearQuery, DicebearQueryKey } from '@/utils/helpers';

interface Props {
  setQuery: React.Dispatch<React.SetStateAction<DicebearQuery>>;
  query: DicebearQuery;
}

const keyOptions = Object.keys(avatarOptions);

export default function DicebearOptions({ setQuery, query }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<DicebearQueryKey>(
    keyOptions[0] as DicebearQueryKey
  );

  const [selectedOption, setSelectedOption] = useState<string>(
    query[selectedCategory]
  );

  const handleClickCategory = (value: string) => {
    return () => {
      setSelectedCategory(value as DicebearQueryKey);
    };
  };

  const handleClickOptions = (value: string) => {
    return () => {
      setSelectedOption(value);
      setQuery((prev) => ({ ...prev, [selectedCategory]: value }));
    };
  };

  useEffect(() => {
    setSelectedOption(query[selectedCategory]);
  }, [selectedCategory]);

  const category = keyOptions.map((value) => (
    <button
      className={twMerge(
        'border p-1 hover:bg-black hover:text-white transition-all',
        selectedCategory === value && 'bg-black text-white'
      )}
      onClick={handleClickCategory(value)}
      key={value}
    >
      {value.toUpperCase()}
    </button>
  ));

  const options = avatarOptions[selectedCategory].map((option) => (
    <button
      key={option}
      onClick={handleClickOptions(option)}
      className={twMerge(
        'border p-1',
        selectedOption === option && 'border border-red-800'
      )}
    >
      {option}
    </button>
  ));

  console.log(selectedCategory, selectedOption);

  return (
    <div>
      <div className="flex gap-4">{category}</div>
      <div className="flex gap-4">{options}</div>
    </div>
  );
}
