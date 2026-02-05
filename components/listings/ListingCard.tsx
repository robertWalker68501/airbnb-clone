import Image from 'next/image';
import { LuHeart } from 'react-icons/lu';

interface Listing {
  id: number;
  title: string;
  location: string;
  image: string;
  price: number;
}

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <div className='group cursor-pointer'>
      {/* Image */}
      <div className='relative aspect-square overflow-hidden rounded-xl'>
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className='object-cover transition group-hover:scale-105'
        />

        <button className='absolute top-3 right-3 cursor-pointer rounded-full bg-white/90 p-2 shadow hover:bg-white'>
          <LuHeart
            size={18}
            className='text-gray-700'
          />
        </button>
      </div>

      <div className='mt-3 space-y-1 text-sm'>
        <p className='text-gray-500'>{listing.location}</p>
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
