import React from 'react';
import { products } from '@/constant/data';
import Link from 'next/link';
import moment from 'moment';

const RightSide = ({ nextThreePost }) => {
  return (
    <div className='grid grid-cols-12 xl:gap-6 gap-4 transition-all duration-300 ease'>
      <div className='2xl:col-span-6 md:col-span-5 place-self-start col-span-6 sm:rounded-xl overflow-hidden transition-all duration-[.4s] ease'>
        <Link href={`/articles/${nextThreePost.node.slug}`}>
          <img
            className='sm:rounded-xl aspect-video hover:scale-110 hover:hue-rotate-30 transition-all duration-300 ease overflow-hidden cursor-pointer bg-center object-cover bg-contain'
            src={nextThreePost?.node.featuredImage.url}
            alt=''
          />
        </Link>
      </div>
      <div className='2xl:col-span-6 pr-4 lg:pr-0 md:col-span-7 col-span-6 space-y-3 transition-all duration-[.4s] ease'>
        {nextThreePost?.node.categories.map((cat) => (
          <p
            key={cat.name}
            className='max-w-fit border border-solid border-green-400 rounded-lg px-3 py-1 xl:text-xs text-[10px]'>
            {cat.name}
          </p>
        ))}
        <Link href={`/articles/${nextThreePost.node.slug}`}>
          <p className='xl:text-lg text-xs font-semibold text-slate-700 hover:text-green-600 hover:underline decoration-green-600 line-clamp-2 pt-3 transition-all duration-100 ease'>
            {nextThreePost.node.title}
          </p>
        </Link>
        <p className='xl:text-sm text-slate-500 text-[10px] font-normal line-clamp-3 transition-all duration-[.4s] ease'>
          {nextThreePost?.node.excerption}
        </p>
        <div className='flex space-x-3 items-center'>
          <div className='h-8 w-8 rounded-full overflow-hidden transition-all duration-[.4s] ease'>
            <img className='w-full' src={nextThreePost?.node.author.photo.url} alt='' />
          </div>
          <div className='text-slate-500 font-medium text-xs'>
            <p>{nextThreePost?.node.author.name}</p>
            <time>{moment(nextThreePost?.node.createdAt).format('MMM DD')}</time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
