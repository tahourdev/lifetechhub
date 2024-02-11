import React from 'react';
import PostDetails from '@/components/post/PostDetails';
import { getSinglePostDetails } from '../../../../services';

export default async function page({ params }) {
  const slug = params.id;
  const postDetails = await getSinglePostDetails(slug);

  return (
    <div className='w-full'>
      <PostDetails postDetails={postDetails} slug={slug} />
    </div>
  );
}
