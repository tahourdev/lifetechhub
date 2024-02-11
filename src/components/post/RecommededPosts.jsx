'use client';
import React, { useState, useEffect } from 'react';
import Post from './Post';
import { getRecommendedPosts } from '../../../services';

const RecommededPosts = ({ slug, categories }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchRecommendedPosts = async () => {
      try {
        const recommendedPosts = await getRecommendedPosts(slug, categories);
        setPosts(recommendedPosts);
      } catch (error) {
        console.error('Error fetching recommended posts:', error);
      }
    };

    fetchRecommendedPosts();
  }, [slug, categories]);

  return (
    <div className='w-full mt-8 mb-4'>
      <h3 className='text-slate-800 text-xl text-center uppercase font-bold underline underline-offset-4 decoration-green-500 decoration-4 mb-6'>
        Recommended
      </h3>
      <div className='grid 4xl:grid-cols-3 gap-8 3xl:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 transition-all duration-[.4s] ease '>
        {posts.map((post) => (
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
  );
};

export default RecommededPosts;
