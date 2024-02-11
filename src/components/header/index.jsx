'use client';
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';
import { clsx } from 'clsx';
import Divided from '@/components/dividedSection';
import Categories from './Categories';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = toggle ? 'hidden' : 'auto';
    };

    // Add event listener to handle body scroll when the component mounts
    handleBodyScroll();

    return () => {
      // Remove event listener when the component unmounts
      document.body.style.overflow = 'auto';
    };
  }, [toggle]);

  const handleClickMenu = (index) => {
    setToggle(false);
    setActive(index);
  };

  return (
    <header className='max-w-screen-5xl 5xl:mx-auto md:px-14 sm:px-4 px-0 transition-all duration-[.4s] ease'>
      <div className='flex justify-between items-center '>
        <Link href='/' onClick={() => handleClickMenu(null)}>
          <Logo />
        </Link>
        <nav className='relative pb-4 pt-2'>
          <ul className='3xl:flex hidden gap-8 text-sm font-medium text-slate-600 font-outfit items-center'>
            {['Privacy', 'Term of Use', 'Disclaimer', 'Sitemap', 'About', 'Contact'].map((menu, index) => (
              <li onClick={() => handleClickMenu(index)} key={index}>
                <Link
                  className={clsx(
                    `relative py-4 block transition-all duration-300 ease-in`,
                    active === index && 'desk_nav-active'
                  )}
                  href={`/${menu.toLowerCase().replace(/\s+/g, '-')}`}>
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className='3xl:hidden py-4 px-2 flex cursor-pointer'
            onClick={() => setToggle((prev) => !prev)}>
            {toggle ? <MdOutlineClose size={23} /> : <MdOutlineMenu size={23} />}
          </div>
        </nav>
        <ul
          className={clsx(
            `3xl:hidden absolute top-24 z-50 min-h-screen right-0 bg-sky-100/80 backdrop-blur-md
          flex flex-col w-full items-start transform transition-transform duration-300 ease-in
          text-base font-medium text-slate-600 font-outfit`,
            !toggle && '-translate-x-full'
          )}>
          {['Privacy', 'Term of Use', 'Disclaimer', 'Resources', 'Sitemap', 'About', 'Contact'].map(
            (menu, index) => (
              <li
                key={index}
                className={clsx(`w-full relative border-b-[1px] border-gray-400/20 cursor-pointer`)}>
                <Link
                  className={clsx(
                    `py-4 pl-6 block hover:bg-sky-50`,
                    active === index && 'mobile_nav-active bg-blue-100'
                  )}
                  onClick={() => handleClickMenu(index)}
                  href={`/${menu.toLowerCase().replace(/\s+/g, '-')}`}>
                  {menu}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      <Divided />
    </header>
  );
};

export default Header;
