"use client";
import React from "react";
import Post from "./Post";
import SectionPost from "./SectionPost";
import { getLatesPosts, getPosts } from "../../../services";
import readingTime from "reading-time";
import { useQuery } from "@tanstack/react-query";
import ContentLoading from "../Loading/ContentLoading";

const LatestPosts = () => {
  // const latestPosts = await getPosts();

  const { data, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: () => getLatesPosts(),
  });

  if (!data && isLoading) {
    return <ContentLoading />;
  }
  const posts = data.slice(4, 10);

  return (
    <div className="w-full">
      <SectionPost title="Latest Post" see={false} />
      <div className="ease grid gap-8 transition-all duration-[.4s] md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-2 4xl:grid-cols-3 ">
        {posts.map((post, index) => (
          <div key={index}>
            <Post
              key={post.node.title}
              cover={post.node.featuredImage.url}
              cat={post.node.categories.map((cat) => cat.name)}
              title={post.node.title}
              desc={post.node.excerption}
              author={post.node.author}
              createdAt={post.node.createdAt}
              slug={post.node.slug}
              timeReading={readingTime(post.node.content.html).text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
