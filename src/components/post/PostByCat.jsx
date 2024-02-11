import React from 'react';
import SectionPost from './SectionPost';
import CatPostItem from './CatPostItem';
import { products } from '@/constant/data';

const PostByCat = ({ posts }) => {
  console.log(posts);
  return (
    <div className='w-full'>
      <div className='space-y-8'>
        {posts.map((post, index) => (
          <div key={index}>
            <CatPostItem post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostByCat;
