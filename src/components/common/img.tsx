import { BLUR_DATA_URL } from '@/utils/constants';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface Props {
  src: string;
  alt: string;
  className: string;
}

export default function Im({ src, alt, className }: Props) {
  return (
    <div className={twMerge(styles.root, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100%"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
    </div>
  );
}

const styles = {
  root: 'relative',
};
