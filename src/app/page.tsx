'use client';

import MainImage from '@/components/dicebear/mainImage';
import DicebearOptions from '@/components/dicebear/dicebearOptions';
import { DicebearQuery, constructQuery } from '@/utils/helpers';
import { avatarOptions } from '@/utils/constants';
import { useMemo, useState } from 'react';

const {
  seed,
  backgroundColor,
  eyebrows,
  eyes,
  hair,
  hairColor,
  mouth,
  skinColor,
} = avatarOptions;

export default function Home() {
  const [query, setQuery] = useState<DicebearQuery>({
    seed: seed[0],
    backgroundColor: backgroundColor[0],
    eyebrows: eyebrows[0],
    eyes: eyes[0],
    hair: hair[0],
    hairColor: hairColor[0],
    mouth: mouth[0],
    skinColor: skinColor[0],
  });

  const queryString = useMemo(() => constructQuery(query), [query]);

  return (
    <div className="flex flex-col gap-10 items-center">
      Dicebear
      <MainImage queryString={queryString} />
      <DicebearOptions />
    </div>
  );
}
