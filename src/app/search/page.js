import AdsShow from "@/components/Ads/AdsShow";
import SearchPosts from "@/components/Search/SearchPosts";
import React from "react";
import { getPostBySearch, getPosts } from "../../../services";
import AdsShowOne from "@/components/Ads/AdsShowOne";

const page = async ({ searchParams }) => {
  const searchQuery = searchParams.query;
  const posts = await getPostBySearch(searchQuery);

  // const filteredResults = posts.filter((post) =>
  //   post.node.title.toLowerCase().includes(searchQuery.toLowerCase()),
  // );

  return (
    <div className="ease max-w-screen-5xl px-0 transition-all duration-[.4s] sm:px-4 md:px-14 5xl:mx-auto">
      <div className="grid grid-cols-12 gap-y-12 xl:gap-14">
        <div className="col-span-12 space-y-12 3xl:col-span-8 4xl:col-span-9">
          <SearchPosts posts={posts} />
        </div>
        <div className=" sticky top-24 col-span-12 flex h-screen flex-col space-y-12 lg:col-span-12 3xl:col-span-4 4xl:col-span-3">
          <AdsShowOne />
        </div>
      </div>
    </div>
  );
};

export default page;
