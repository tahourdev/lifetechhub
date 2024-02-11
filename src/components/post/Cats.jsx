// 'use client';
import React from 'react';
import PostByCat from './PostByCat';
import { getCategories } from '../../../services';
import Post from './CatPostItem';
import SectionPost from './SectionPost';
import Link from 'next/link';

export const Cats = async () => {
  // const [catPosts, setCatPosts] = useState([]);
  // useEffect(() => {
  //   getCategories()
  //     .then((newCatPosts) => setCatPosts(newCatPosts))
  //     .catch((error) => console.log('Fetching is in trouble', error));
  // }, []);

  const catPosts = await getCategories();

  return (
    <>
      {catPosts.map((post, index) => (
        <div key={index} className='w-full'>
          <SectionPost link={post.slug} title={post.name} more='See All' see={true} />
          <PostByCat posts={post.posts} />
        </div>
      ))}
    </>
  );
};
