import moment from 'moment';
import Link from 'next/link';
import React from 'react';

const CatPostItem = ({ post }) => {
  console.log(post.createdAt);
  return (
    <article className='grid grid-cols-12 space-x-8'>
      <Link href={`/articles/${post.slug}`} className='4xl:col-span-4 rounded-lg col-span-6 overflow-hidden'>
        <img
          className='object-cover aspect-[3/2] cursor-pointer hover:scale-110 rounded-lg hover:hue-rotate-30 bg-no-repeat bg-cover transition-all duration-300 ease-in-out'
          src={post.featuredImage.url}
          alt=''
        />
      </Link>
      <div className='4xl:col-span-8 col-span-6 flex flex-col 3xl:justify-center justify-start lg:gap-4 gap-2'>
        {/* <p className='md:text-xs text-[10px] max-w-fit border border-solid cursor-pointer border-green-400 rounded-lg px-3 py-1'>
          {post.cat}
        </p> */}
        <Link
          href={`/articles/${post.slug}`}
          className='3xl:text-xl hover:underline decoration-green-600 transition-all duration-100 ease line-clamp-2 lg:line-clamp-none text-base hover:text-green-600 cursor-pointer font-semibold'>
          {post.title}
        </Link>
        <div>
          <p className='lg:text-sm text-xs text-slate-600'>
            {moment(post.createdAt).format('MMM DD')} by <span>{post.author.name}</span>
          </p>
        </div>
        <p className='3xl:text-base text-sm text-slate-600 line-clamp-3'>{post.excerption}</p>
      </div>
    </article>
  );
};

export default CatPostItem;
