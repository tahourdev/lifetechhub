import React from 'react';
import Divided from '../dividedSection';
import Link from 'next/link';

const SectionPost = ({ title, more, see, link }) => {
  return (
    <div className='flex gap-4 my-8 items-center'>
      <h3 className='text-2xl whitespace-nowrap font-semibold text-slate-700'>{title}</h3>
      <Divided />
      {see && (
        <Link href={`/categories/${link}`} className='whitespace-nowrap'>
          {more}
        </Link>
      )}
    </div>
  );
};

export default SectionPost;
