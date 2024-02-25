// 'use client';
import React from "react";
import PostByCat from "./PostByCat";
import { getCategories } from "../../../services";
import SectionPost from "./SectionPost";

export const Cats = async () => {
  const catPosts = await getCategories();

  return (
    <>
      {catPosts.map((post, index) => (
        <div key={index} className="w-full">
          <SectionPost
            link={post.slug}
            title={post.name}
            more="See All"
            see={true}
          />
          <PostByCat posts={post.posts} />
        </div>
      ))}
    </>
  );
};
