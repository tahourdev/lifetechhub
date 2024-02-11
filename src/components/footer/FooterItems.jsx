import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FooterItems({ title, links, isCat, isMenu }) {
  return (
    <div className='w-full md:px-0 px-10'>
      <div>
        <h1
          className='link relative before:absolute mb-4 before:box-content font-semibold text-slate-200 
      before:-left-2 before:h-full before:bottom-0 before:w-[2px] before:bg-green-500'>
          {title}
        </h1>
        <ul className='space-y-3 md:columns-2 lg:columns-1 gap-1 md:w-full'>
          {links?.map((link, index) => (
            <li
              key={index}
              className='prose hover:prose-a:text-slate-200 max-w-fit prose-sm prose-a:text-slate-400'>
              {isCat && (
                <Link
                  className='block no-underline'
                  href={
                    link === 'Home' && isCat === true
                      ? '/'
                      : `/categories/${link.toLowerCase().replace(/\s+/g, '-')} `
                  }>
                  {link}
                </Link>
              )}

              {isMenu && (
                <Link
                  className='block no-underline'
                  href={
                    link === 'Home' && isCat === true ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')} `
                  }>
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
