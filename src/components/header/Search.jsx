import useMedia from '@/hooks/useMedia';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = () => {
  const isMedium = useMedia('(min-width: 767px)');
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSearch}
      className='lg:max-w-[25%] max-w-[3rem] h-[3rem] relative transition-all duration-300 ease-in 
        bg-white/70 backdrop-blur-md p-2 rounded-full inline-flex items-center justify-center shadow-md w-full mr-2 lg:mr-0'>
      <input
        className='bg-transparent pr-4 indent-2 lg:block hidden w-full outline-none placeholder:text-sm'
        type='text'
        placeholder='Search...'
      />

      {isMedium ? (
        <button className=' absolute top-1/2 -translate-y-1/2 right-2'>
          <MdSearch className='text-slate-500' size={20} />
        </button>
      ) : (
        <Link href='/search'>
          <MdSearch className={clsx(`text-slate-500`)} size={20} />
        </Link>
      )}
    </form>
  );
};

export default Search;
