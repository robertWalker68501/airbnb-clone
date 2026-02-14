'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { LuMenu, LuSearch } from 'react-icons/lu';

import Logo from '@/components/shared/Logo';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClickClose = () => {
    setOpen(false);
  };

  return (
    <nav className='fixed top-0 z-50 h-18 w-full border-b border-gray-200 bg-white lg:h-24'>
      <div className='mx-auto flex h-full w-[95%] items-center justify-between md:w-[90%]'>
        <Logo href='/' />

        {/* Center Navbar */}
        <div className='flex cursor-pointer items-center gap-3 rounded-full border border-gray-200 px-4 py-2 shadow-md'>
          <span className='flex items-center gap-2 text-sm font-medium text-gray-700'>
            <Image
              src='/assets/images/home.png'
              alt='Home Icon'
              width={25}
              height={25}
            />
            <span className='hidden lg:block'>Anywhere</span>
          </span>
          <span className='hidden h-6 w-px bg-gray-300 md:block' />
          <span className='hidden text-sm font-medium text-gray-700 md:block'>
            Any Week
          </span>
          <span className='hidden h-6 w-px bg-gray-300 md:block' />
          <span className='hidden text-sm text-gray-500 md:block'>
            Add Guests
          </span>

          <div className='bg-primary grid size-8 place-items-center rounded-full text-white'>
            <LuSearch size={16} />
          </div>
        </div>

        {/* Right Navbar */}
        <div
          ref={menuRef}
          className='relative flex items-center gap-4'
        >
          <button className='hidden cursor-pointer rounded-full bg-gray-50 px-4 py-2 text-sm font-medium hover:bg-gray-100 md:block'>
            Airbnb your home
          </button>

          <div className='flex cursor-pointer items-center gap-2 rounded-full border border-gray-300 px-2 py-1 transition hover:shadow-md'>
            <button
              onClick={() => setOpen((prev) => !prev)}
              aria-haspopup='menu'
              aria-expanded={open}
              aria-controls='navbar-dropdown-menu'
              className='grid size-8 cursor-pointer place-items-center rounded-full transition hover:bg-gray-100'
            >
              <LuMenu size={18} />
            </button>

            <div className='relative size-8 overflow-hidden rounded-full'>
              <Image
                src='/assets/images/image.png'
                alt='User Avatar'
                fill
                className='object-cover'
              />
            </div>
          </div>

          {/* Dropdown Menu */}
          {open && (
            <div className='absolute top-14 right-0 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-lg'>
              <ul
                id='navbar-dropdown-menu'
                role='menu'
                className='text-sm text-gray-800'
              >
                <li role='none'>
                  <button
                    role='menuitem'
                    onClick={handleLinkClickClose}
                    className='w-full rounded-lg px-4 py-3 text-left hover:bg-gray-100'
                  >
                    Airbnb your home
                  </button>
                </li>
                <li role='none'>
                  <button
                    role='menuitem'
                    onClick={handleLinkClickClose}
                    className='w-full rounded-lg px-4 py-3 text-left hover:bg-gray-100'
                  >
                    Help Center
                  </button>
                </li>
                <li role='none'>
                  <div
                    role='separator'
                    className='my-1 border-t border-gray-300'
                  />
                </li>
                <li role='none'>
                  <button
                    role='menuitem'
                    onClick={handleLinkClickClose}
                    className='w-full rounded-lg px-4 py-3 text-left hover:bg-gray-100'
                  >
                    Sign Up
                  </button>
                </li>
                <li role='none'>
                  <button
                    role='menuitem'
                    onClick={handleLinkClickClose}
                    className='w-full rounded-lg px-4 py-3 text-left hover:bg-gray-100'
                  >
                    Sign In
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
