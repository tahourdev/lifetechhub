import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { getPosts } from "../../../services";

export default async function Hero() {
  const featuredPosts = await getPosts();

  const firstPost = featuredPosts.length > 0 ? featuredPosts[0].node : null;
  const nextThreePosts = featuredPosts.slice(1, 4);

  return (
    <div className="my-10 grid grid-cols-12 place-items-start space-y-8 transition-all duration-[.4s] ease-in-out md:gap-8 md:space-y-0">
      <LeftSide firstPost={firstPost} />
      <div className=" col-span-full space-y-8 transition-all duration-[.4s] ease-in-out md:space-y-4 lg:col-span-6 xl:space-y-8">
        {nextThreePosts.map((nextThreePost, index) => (
          <div key={index}>
            <RightSide nextThreePost={nextThreePost} />
          </div>
        ))}
      </div>
    </div>
  );
}
