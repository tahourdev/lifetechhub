import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import readingTime from 'reading-time';
import Socials from '../social';
import RawContent from './RawContent';
import HtmlContent from './HtmlContent';
import RecommededPosts from './RecommededPosts';
import TableContent from './TableContent';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default async function PostDetails({ postDetails, slug }) {
  const categories = postDetails.categories.map((cat) => cat.name);
  const catSlug = postDetails.categories.map((cat) => cat.slug);
  const author = postDetails.author.name;
  const date = moment(postDetails.createdAt).format('MMM DD');
  const header = postDetails.title;
  const featuredImage = postDetails.featuredImage.url;
  const timeReading = readingTime(postDetails.content.html).text;

  return (
    <div className='max-w-screen-5xl 5xl:mx-auto md:px-14 sm:px-4 px-0 transition-all duration-[.4s] ease'>
      <div className='grid grid-cols-12 gap-y-12 gap-x-10'>
        <div className='4xl:col-span-3 sticky top-24 h-screen'>
          <TableContent postDetails={postDetails} />
        </div>
        <div className='4xl:col-span-6 3xl:col-span-8 col-span-12 space-y-12'>
          <div className='sm:px-0 px-4'>
            <div className='flex gap-x-4 justify-between flex-wrap gap-y-4 items-center mt-10 mb-6'>
              <div className='flex items-center divide-x divide-slate-300 gap-2'>
                <Link
                  href={`/categories/${catSlug}`}
                  className='pr-2 max-w-fit uppercase border border-solid border-green-400 rounded-lg px-3 py-1 xl:text-xs text-[10px]'>
                  {categories}
                </Link>
                <p className='uppercase pl-2 text-xs text-slate-600 underline decoration-green-400 decoration-1 underline-offset-4'>
                  {author}
                </p>
                <time className='px-2 uppercase text-xs text-slate-600'>{date}</time>
                <p className='px-2 uppercase text-xs text-slate-600'>{timeReading}</p>
              </div>
              <Socials />
            </div>
            <article className='prose'>
              {/* Header text */}
              <div>
                <h3 className='prose-xl mb-4 text-center'>{header}</h3>
                <div className='border-b-2' />
              </div>

              <Image
                width={900}
                height={400}
                quality={100}
                className='rounded-xl object-cover'
                src={featuredImage}
                alt={postDetails.title}
              />

              {/* body text */}
              <HtmlContent postDetails={postDetails} />
              <RawContent content={postDetails} />
            </article>
            <Socials />
            <div className='border-b-2 my-8' />
          </div>
        </div>
        <div className='4xl:col-span-3'></div>
      </div>
      {/* Recommended Post */}
      <RecommededPosts slug={slug} categories={categories} />
    </div>
  );
}
