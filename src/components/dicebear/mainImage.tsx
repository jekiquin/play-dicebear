import React from 'react';
import Img from '@/components/common/img';
import { BACKEND_URL } from '@/config';

interface Props {
  queryString: string;
}

export default function MainImage({ queryString }: Props) {
  return (
    <Img
      src={`${BACKEND_URL}${queryString}`}
      alt="avatar"
      className="h-56 w-56"
    />
  );
}
