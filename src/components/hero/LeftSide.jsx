import React from 'react';
import { products } from '@/constant/data';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';

const LeftSide = ({ firstPost }) => {
  return (
    <div className='lg:col-span-6 col-span-full transition-all duration-[.4s] ease'>
      <Link href={`/articles/${firstPost?.slug}`}>
        <div className='w-full sm:rounded-xl hover:hue-rotate-30 overflow-hidden transition-all duration-[.4s] ease'>
          <img
            className='bg-center aspect-[16/9] hover:scale-105 transition-all duration-300 ease object-cover bg-contain'
            src={firstPost?.featuredImage.url}
            alt=''
          />
        </div>
        <div className='p-4 space-y-4'>
          {firstPost?.categories.map((cat) => (
            <div
              key={cat.name}
              className='max-w-fit border border-solid cursor-pointer border-green-400 rounded-lg px-3 py-1'>
              <p className='md:text-base text-xs'>{cat.name}</p>
            </div>
          ))}
          <p className='lg:text-2xl hover:text-green-600 hover:underline decoration-green-600 text-base font-semibold text-slate-700 transition-all duration-100 ease'>
            {firstPost?.title}
          </p>
          <p className='xl:text-sm 2xl:text-base text-slate-500 text-xs font-normal line-clamp-3 transition-all duration-[.4s] ease'>
            {firstPost?.excerption}
          </p>
          {firstPost && (
            <div className='flex space-x-3 items-center'>
              <div className='h-8 w-8 rounded-full overflow-hidden transition-all duration-[.4s] ease'>
                <Image
                  width={582}
                  height={325}
                  className='w-full object-cover'
                  src={firstPost?.author.photo.url}
                  alt=''
                />
              </div>
              <div className='text-slate-500 font-medium text-xs'>
                <p>{firstPost?.author.name}</p>
                <time>{moment(firstPost.createdAt).format('MMM DD')}</time>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default LeftSide;
