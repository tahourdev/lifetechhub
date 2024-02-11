import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { SlSocialFacebook } from 'react-icons/sl';
import { FaLinkedinIn } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className='flex gap-3 items-center'>
      <p className='text-sm text-slate-500 uppercase font-medium whitespace-nowrap'>Share on:</p>
      <div className='bg-slate-900 hover:bg-red-400 transition-all duration-200 ease-in cursor-pointer rounded-sm p-1'>
        <BsTwitterX color='white' />
      </div>
      <div className='bg-slate-900 hover:bg-red-400 transition-all duration-200 ease-in cursor-pointer rounded-sm p-1'>
        <SlSocialFacebook color='white' />
      </div>
      <div className='bg-slate-900 hover:bg-red-400 transition-all duration-200 ease-in cursor-pointer rounded-sm p-1'>
        <FaLinkedinIn size={15} color='white' />
      </div>
    </div>
  );
};

export default Socials;
