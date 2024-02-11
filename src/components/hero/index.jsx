// 'use client';
import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { getPosts } from '../../../services';

export default async function Hero() {
  // const [loading, setLoading] = useState(true);
  const featuredPosts = await getPosts();

  const firstPost = featuredPosts.length > 0 ? featuredPosts[0].node : null;
  const nextThreePosts = featuredPosts.slice(1, 4);

  return (
    <div className='grid grid-cols-12 md:gap-8 md:space-y-0 space-y-8 place-items-start my-10 transition-all duration-[.4s] ease'>
      <LeftSide firstPost={firstPost} />
      <div className='lg:col-span-6 col-span-full xl:space-y-8 md:space-y-4 space-y-8 transition-all duration-[.4s] ease'>
        {nextThreePosts.map((nextThreePost, index) => (
          <div key={index}>
            <RightSide nextThreePost={nextThreePost} />
          </div>
        ))}
      </div>
    </div>
  );
}
