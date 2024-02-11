import React from 'react';
import Link from 'next/link';
import { MdOutlineMenu } from 'react-icons/md';

const Menu = () => {
  return (
    <ul className='3xl:flex hidden gap-8 items-center'>
      {['Privacy', 'Term of Use', 'Disclaimer', 'Sitemap', 'About Us', 'Contact Us'].map((menu, index) => (
        <li key={index}>
          <Link className='text-[10px] font-medium text-slate-600 font-outfit' href='/'>
            {menu}
          </Link>
        </li>
      ))}
      <div className='3xl:hidden flex'>
        <MdOutlineMenu />
      </div>
    </ul>
  );
};

export default Menu;
