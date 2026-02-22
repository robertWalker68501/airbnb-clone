import Listings from '@/components/listings/Listings';

export interface IHomeProps {
  searchParams: {
    category?: string;
    locationValue?: string;
    minPrice?: number;
    maxPrice?: number;
  };
}

const Home = ({ searchParams }: IHomeProps) => {
  return <Listings searchParams={searchParams} />;
};

export default Home;
