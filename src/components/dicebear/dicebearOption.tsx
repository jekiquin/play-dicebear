import { BACKEND_URL } from '@/config';
import {
  DicebearQuery,
  DicebearQueryKey,
  constructQuery,
} from '@/utils/helpers';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Img from '../common/img';

interface Props {
  query: DicebearQuery;
  selectedCategory: DicebearQueryKey;
  setQuery: React.Dispatch<React.SetStateAction<DicebearQuery>>;
  option: string;
}

export default function DicebearOption({
  query,
  setQuery,
  selectedCategory,
  option,
}: Props) {
  const [selectedOption, setSelectedOption] = useState<string>(
    query[selectedCategory]
  );

  const handleClickOptions = (value: string) => {
    return () => {
      setSelectedOption(value);
      setQuery((prev) => ({ ...prev, [selectedCategory]: value }));
    };
  };
  const queryString = constructQuery({
    ...query,
    [selectedCategory]: option,
  });

  useEffect(() => {
    setSelectedOption(query[selectedCategory]);
  }, [selectedCategory]);

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
}
