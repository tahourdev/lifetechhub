import React from "react";
import SectionPost from "./SectionPost";
import { products } from "@/constant/data";
import PostItem from "./PostItem";

const PostByCat = ({ posts }) => {
  console.log(posts);
  return (
    <div className="w-full">
      <div className="space-y-8">
        {posts?.map((post, index) => (
          <div key={index}>
            <PostItem post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostByCat;
