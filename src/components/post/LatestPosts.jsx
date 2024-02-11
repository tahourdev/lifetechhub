import React from 'react';
import Post from './Post';
import SectionPost from './SectionPost';
import { getPosts } from '../../../services';

const LatestPosts = async () => {
  const latestPosts = await getPosts();
  const posts = latestPosts.slice(4, 10);

  return (
    <div className='w-full'>
      <SectionPost title='Latest Post' see={false} />
      <div className='grid 4xl:grid-cols-3 gap-8 3xl:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 transition-all duration-[.4s] ease '>
        {posts.map((post) => (
          <Post
            key={post.node.title}
            cover={post.node.featuredImage.url}
            cat={post.node.categories.map((cat) => cat.name)}
            title={post.node.title}
            desc={post.node.excerption}
            author={post.node.author}
            createdAt={post.node.createdAt}
            slug={post.node.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
