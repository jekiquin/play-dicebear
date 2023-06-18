import { BLUR_DATA_URL } from '@/utils/constants';
import Image, { ImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';
interface Props extends ImageProps {
  className: string;
}

export default function Im({ className, ...rest }: Props) {
  return (
    <div className={twMerge(styles.root, className)}>
      <Image
        {...rest}
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
