'use client';

import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export interface IUseFavorite {
  listingId: string;
  currentUser?: {
    id: string;
    favoriteIds: string[];
  } | null;
}

export function useFavorite({ listingId, currentUser }: IUseFavorite) {
  const isFavorite = currentUser?.favoriteIds?.includes(listingId);

  const router = useRouter();

  const toggleFavorite = async () => {
    if (!currentUser) {
      toast('Please login to favorite this listing', {
        style: {
          background: '#FF5A5F',
          color: '#fff',
        },
      });
      return;
    }

    try {
      if (isFavorite) {
        await axios.delete(`/api/favorites/${listingId}`);
      } else {
        await axios.post(`/api/favorites/${listingId}`);
      }

      router.refresh();
    } catch (error) {
      toast('Something went wrong. Please try again later.');
    }
  };

  return { isFavorite, toggleFavorite };
}
