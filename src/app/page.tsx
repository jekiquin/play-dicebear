'use client';

import MainImage from '@/components/dicebear/mainImage';
import DicebearOptions from '@/components/dicebear/dicebearOptions';
import { DicebearQuery, constructQuery } from '@/utils/helpers';
import { avatarOptions } from '@/utils/constants';
import { useMemo, useState } from 'react';
import DicebearProvider, {
  useDicebearContext,
} from '@/context/dicebearContext';

const { backgroundColor, eyebrows, eyes, hair, hairColor, mouth, skinColor } =
  avatarOptions;

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center">
      Dicebear
      <DicebearProvider>
        <MainImage />
        <DicebearOptions />
      </DicebearProvider>
    </div>
  );
}
