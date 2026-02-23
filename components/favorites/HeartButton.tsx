'use client';

import { LuHeart } from 'react-icons/lu';
import { useFavorite } from '@/custom-hooks/useFavorite';
import clsx from 'clsx';

interface IHeartButton {
  listingId: string;
  currentUser: {
    id: string;
    favoriteIds: string[];
  } | null;
}

const HeartButton = ({ listingId, currentUser }: IHeartButton) => {
  const { toggleFavorite, isFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <button
      type='button'
      aria-label='Add to favorites'
      className='absolute top-3 right-3 cursor-pointer rounded-full bg-white/90 p-2 hover:bg-white'
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite();
      }}
    >
      <LuHeart
        size={18}
        className={clsx(
          'transition',
          isFavorite ? 'fill-rose-500 text-rose-500' : 'text-gray-700'
        )}
      />
    </button>
  );
};

export default HeartButton;
