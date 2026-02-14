import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className='mt-18 px-4 py-2 md:px-20 lg:mt-24'>{children}</div>;
};

export default Container;
