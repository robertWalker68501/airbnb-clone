import clsx from 'clsx';
import { IconType } from 'react-icons';

interface ICategoryCard {
  label: string;
  icon: IconType;
  selected?: boolean;
  onClick: () => void;
}

const CategoryCard = ({
  label,
  icon: Icon,
  selected,
  onClick,
}: ICategoryCard) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={clsx(
        `my-6 flex flex-col gap-3 rounded-xl border p-4 text-left text-gray-700 transition hover:border-black`,
        selected ? 'border-black bg-gray-50' : 'border-gray-200'
      )}
    >
      <Icon size={28} />
      <span className='font-medium'>{label}</span>
    </button>
  );
};

export default CategoryCard;
