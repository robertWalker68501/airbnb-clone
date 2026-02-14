import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
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
        {children}
      </body>
    </html>
  );
}
