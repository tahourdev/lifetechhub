import React from 'react';
import { SlSocialFacebook } from 'react-icons/sl';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export default function FooterConnect() {
  return (
    <div className='w-full md:px-0 px-10'>
      <h1
        className='link relative before:absolute mb-6 before:box-content font-semibold text-slate-200 
      before:-left-2 before:h-full before:bottom-0 before:w-[2px] before:bg-green-500'>
        Others
      </h1>
      <p className='text-slate-300 md:text-base text-sm'>Follow us on Social Media</p>
      <div className='flex gap-3 mt-6'>
        <a href='https://www.facebook.com'>
          <SlSocialFacebook size={20} />
        </a>
        <a href=''>
          <FaTwitter size={20} />
        </a>
        <a href=''>
          <FaLinkedinIn size={20} />
        </a>
        <a href=''>
          <AiFillInstagram size={20} />
        </a>
      </div>
    </div>
  );
}
