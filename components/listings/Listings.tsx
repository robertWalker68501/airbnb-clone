import ListingCard from '@/components/listings/ListingCard';
import { IHomeProps } from '@/app/page';
import { getCurrentUser } from '@/server-actions/getCurrentUser';
import { getListings } from '@/services/listing';
import { Listing } from '@/app/generated/prisma/client';

const Listings = async ({ searchParams }: IHomeProps) => {
  const params = searchParams;
  const currentUser = await getCurrentUser();
  const listings = await getListings({
    category: params.category,
    locationValue: params.locationValue,
    minPrice: params.minPrice ? Number(params.minPrice) : undefined,
    maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,
  });
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {listings.map((listing: Listing) => {
        return (
          <ListingCard
            key={listing.id}
            listing={listing}
          />
        );
      })}
    </div>
  );
};

export default Listings;
