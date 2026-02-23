import Listings from '@/components/listings/Listings';
import { Suspense } from 'react';

export interface IHomeProps {
  searchParams: Promise<{
    category?: string;
    locationValue?: string;
    minPrice?: number;
    maxPrice?: number;
  }>;
}

const Home = ({ searchParams }: IHomeProps) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Listings searchParams={searchParams} />
    </Suspense>
  );
};

export default Home;
