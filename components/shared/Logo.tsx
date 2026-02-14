import Image from 'next/image';
import Link from 'next/link';

interface ILogo {
  href: string;
  classes?: string;
  width?: number;
  height?: number;
}

const Logo = ({
  href = '/',
  classes = '',
  width = 100,
  height = 100,
}: ILogo) => {
  return (
    <Link
      href={href}
      className={`${classes}`}
    >
      <Image
        src='/assets/images/logo.png'
        alt='Airbnb Logo'
        width={width}
        height={height}
      />
    </Link>
  );
};

export default Logo;
