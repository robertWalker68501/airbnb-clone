'use client';

import Image from 'next/image';
import { Listing } from '@/app/generated/prisma/client';
import useCountries from '@/custom-hooks/useCountries';
import HeartButton from '@/components/favorites/HeartButton';

interface IListingCard {
  listing: Listing;
  currentUser: {
    id: string;
    favoriteIds: string[];
  } | null;
}

const ListingCard = ({ listing, currentUser }: IListingCard) => {
  const { getByValue } = useCountries();
  const location = getByValue(listing.locationValue);

  return (
    <div className='group cursor-pointer'>
      {/* Image */}
      <div className='relative aspect-square overflow-hidden rounded-xl'>
        <Image
          src={listing.imageSrc || ''}
          alt={listing.title}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover transition duration-300 ease-in-out group-hover:scale-105'
        />
        <HeartButton
          listingId={listing.id}
          currentUser={currentUser}
        />
      </div>

      <div className='mt-3 space-y-1 text-sm'>
        <p className='text-gray-500'>
          {location
            ? `${location.region}, ${location.label}`
            : listing.locationValue}
        </p>
        <p className='truncate text-gray-900'>{listing.title}</p>
        <p className='pt-1'>
          <span className='font-semibold text-gray-900'>${listing.price}</span>{' '}
          / <span className='text-gray-500'>night</span>
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
