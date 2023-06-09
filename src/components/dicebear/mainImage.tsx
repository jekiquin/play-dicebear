import React from 'react';
import Img from '@/components/common/img';

interface Props {
  queryString: string;
}

export default function MainImage({ queryString }: Props) {
  return (
    <Img
      src={`https://api.dicebear.com/6.x/adventurer/svg${queryString}`}
      alt="avatar"
      className="h-40 w-40"
    />
  );
}
