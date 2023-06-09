import { DicebearQueryKey, constructQuery } from '@/utils/helpers';
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

  const queryString = constructQuery({
    ...query,
    [selectedCategory]: option,
  });

  const selectedStyle = query[selectedCategory] === option && styles.selected;

  return (
    <button
      onClick={handleClick}
      className={twMerge(styles.root, selectedStyle)}
    >
      <Img src={queryString} alt="avatar" className={styles.img} />
    </button>
  );
}

const styles = {
  root: 'border p-1 hover:border-red-800',
  img: 'h-40 w-40',
  selected: 'border-4 border-red-800',
};
