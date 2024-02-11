import React from 'react';
import Divided from '../dividedSection';
import { MdOutlineMenu, MdSearch } from 'react-icons/md';
import Link from 'next/link';
import FooterItems from './FooterItems';
import FooterLogo from './FooterLogo';
import FooterConnect from './FooterConnect';

const Footer = () => {
  return (
    <footer className='w-full bg-slate-900 py-12 mt-14'>
      <div className='text-slate-50 max-w-screen-5xl 5xl:mx-auto md:px-14 sm:px-4 px-0 transition-all duration-[.4s] ease'>
        <div className='grid md:grid-cols-12 gap-6'>
          <div className='md:col-span-full xl:col-span-4'>
            <FooterLogo />
          </div>
          <div className='xl:col-span-5 md:col-span-9 flex md:justify-between md:gap-4'>
            <FooterItems
              isMenu={true}
              title='About'
              links={['Privacy', 'Term of Use', 'Disclaimer', 'Sitemap', 'About', 'Contact']}
            />
            <FooterItems
              isCat={true}
              title='Categories'
              links={['Home', 'Technology', 'Health', 'Travel', 'How to and Tutorial', 'Culture']}
            />
          </div>
          <div className='xl:col-span-3 md:col-span-3'>
            <FooterConnect />
          </div>
        </div>
        <div className='w-full'>
          <p className='prose mt-10 md:text-left text-center text-sm text-slate-500'>
            All rights reserved © <span className='underline underline-offset-4'>Life Tech Hub</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
