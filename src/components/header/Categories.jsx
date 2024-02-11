'use client';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Search from './Search';

const Categories = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        `max-w-screen-5xl mx-auto md:px-14 sm:px-4 px-0 transition-all duration-[.4s] ease w-full`,
        isSticky && 'sticky sm:top-2 top-0 z-50',
        !isSticky && 'sticky -top-40'
      )}>
      <div className='w-full my-4 gap-4  flex justify-between items-center'>
        <ul
          className={clsx(
            `inline-flex lg:basis-3/4 basis-full transition-all duration-300 ease-in snap-x bg-secondary p-1 sm:rounded-full rounded-r-full shadow-md gap-4 divide-x no-scrollbar overflow-auto`,
            isSticky && 'bg-secondary/80 backdrop-blur-md'
          )}>
          {['Home', 'Technology', 'Health', 'Travel', 'Lifestyle', 'How to and Tutorial', 'Culture'].map(
            (cat, index) => (
              <li
                key={index}
                className='md:text-base snap-center text-sm hover:bg-red-400 cursor-pointer p-2 whitespace-nowrap rounded-full transition-all duration-300 ease-in-out text-white font-normal'>
                <Link
                  className='block px-6'
                  href={cat === 'Home' ? '/' : `/categories/${cat.toLowerCase().replace(/\s+/g, '-')} `}>
                  {cat}
                </Link>
              </li>
            )
          )}
        </ul>
        <Search />
      </div>
    </nav>
  );
};

export default Categories;
