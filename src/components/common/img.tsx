import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface Props {
  src: string;
  alt: string;
  className: string;
}

export default function Im({ src, alt, className }: Props) {
  return (
    <div className={twMerge('relative', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100%"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
      />
    </div>
  );
}
