import React, { useEffect, useState } from 'react';
import { avatarOptions } from '@/utils/constants';
import { twMerge } from 'tailwind-merge';
import {
  DicebearQuery,
  DicebearQueryKey,
  constructQuery,
} from '@/utils/helpers';
import Img from '../common/img';
import { BACKEND_URL } from '@/config';

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

  const options = avatarOptions[selectedCategory].map((option) => {
    const queryString = constructQuery({
      ...query,
      [selectedCategory]: option,
    });
    return (
      <button
        key={option}
        onClick={handleClickOptions(option)}
        className={twMerge(
          'border p-1',
          selectedOption === option && 'border-4 border-red-800'
        )}
      >
        <Img
          src={`${BACKEND_URL}${queryString}&scale=75`}
          alt="avatar"
          className="h-40 w-40"
        />
      </button>
    );
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 justify-center">{category}</div>
      <div className="flex gap-4 flex-wrap">{options}</div>
    </div>
  );
}
