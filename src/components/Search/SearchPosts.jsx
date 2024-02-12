import React from "react";
import PostItem from "../post/PostItem";

const SearchPosts = ({ posts }) => {
  // console.log(posts);
  return (
    <div className="w-full">
      <small>10,000+ results from WIRED</small>
      <div className="mt-8 space-y-8">
        {posts.map((post, index) => (
          <div key={index}>
            <PostItem post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPosts;
