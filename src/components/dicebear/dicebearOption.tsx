import { BACKEND_URL } from '@/config';
import { DicebearQueryKey, constructQuery } from '@/utils/helpers';
import React, { useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Img from '../common/img';
import { useDicebearContext } from '@/context/dicebearContext';

interface Props {
  selectedCategory: DicebearQueryKey;
  option: string;
}

export default function DicebearOption({ selectedCategory, option }: Props) {
  const { query, dispatch } = useDicebearContext();

  const handleClick = () => {
    dispatch({ type: selectedCategory, payload: option });
  };

  const queryString = useMemo(
    () =>
      constructQuery({
        ...query,
        [selectedCategory]: option,
      }),
    [option]
  );

  return (
    <button
      onClick={handleClick}
      className={twMerge(
        'border p-1',
        query[selectedCategory] === option && 'border-4 border-red-800'
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
