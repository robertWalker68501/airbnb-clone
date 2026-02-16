import ListingCard from '@/components/listings/ListingCard';
import { LISTINGS } from '@/constants';

const Home = () => {
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {LISTINGS.map((listing) => {
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

export default Home;
