import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import Navbar from '@/components/shared/navigation/Navbar';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'A clone of Airbnb built with Next.js 13 and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <div className='mt-18 px-4 py-2 md:px-20 lg:mt-24'>{children}</div>
        <RegisterModal />
        <LoginModal />
        <Toaster />
      </body>
    </html>
  );
}
