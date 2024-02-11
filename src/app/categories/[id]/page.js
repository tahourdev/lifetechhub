import Post from '@/components/post/Post';
import React from 'react';
import { getPostsByCat } from '../../../../services';

export default async function CategoryPage({ params }) {
  const cat = await getPostsByCat(params.id);
  return (
    <div className='w-full h-full'>
      <div
        className='w-full max-h-[30%] flex justify-center items-center 
      bg-slate-900 decoration-green-400 decoration-2 underline-offset-4 underline text-slate-50 py-12 text-3xl font-bold'>
        {cat.name}
      </div>
      <div className='max-w-screen-5xl 5xl:mx-auto md:px-14 sm:px-4 px-0 transition-all duration-[.4s] ease mt-10'>
        <div className='grid 4xl:grid-cols-3 gap-8 3xl:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 transition-all duration-[.4s] ease '>
          {cat.posts.map((post) => (
            <Post
              key={post.title}
              cover={post.featuredImage.url}
              cat={post.categories.map((cat) => cat.name)}
              title={post.title}
              desc={post.excerption}
              author={post.author}
              createdAt={post.createdAt}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
