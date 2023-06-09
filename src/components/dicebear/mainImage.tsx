import React from 'react';
import Img from '@/components/common/img';
import { BACKEND_URL } from '@/config';
import { useDicebearContext } from '@/context/dicebearContext';

export default function MainImage() {
  const { queryString } = useDicebearContext();

  return (
    <Img
      src={`${BACKEND_URL}${queryString}`}
      alt="avatar"
      className="h-56 w-56"
    />
  );
}
