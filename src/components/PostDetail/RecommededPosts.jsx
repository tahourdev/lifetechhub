"use client";
import React, { useState, useEffect } from "react";
import { getRecommendedPosts } from "../../../services";
import readingTime from "reading-time";
import Post from "../post/Post";
// import Post from "./Post";

const RecommededPosts = ({ slug, categories }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchRecommendedPosts = async () => {
      try {
        const recommendedPosts = await getRecommendedPosts(slug, categories);
        setPosts(recommendedPosts);
      } catch (error) {
        console.error("Error fetching recommended posts:", error);
      }
    };

    fetchRecommendedPosts();
  }, [slug, categories]);

  // console.log(posts.map((post) => post.content));
  return (
    <div className="mb-4 mt-8 w-full">
      <h3 className="mb-6 text-center text-xl font-bold uppercase text-slate-800 underline decoration-green-500 decoration-4 underline-offset-4">
        Recommended
      </h3>
      <div className="ease grid gap-8 transition-all duration-[.4s] md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-2 4xl:grid-cols-3 ">
        {posts.map((post, index) => (
          <div key={index}>
            <Post
              key={post.title}
              cover={post.featuredImage.url}
              cat={post.categories.map((cat) => cat.name)}
              title={post.title}
              desc={post.excerption}
              author={post.author}
              createdAt={post.createdAt}
              slug={post.slug}
              timeReading={readingTime(post.content.html).text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommededPosts;
