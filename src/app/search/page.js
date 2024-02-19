import AdsShow from "@/components/Ads/AdsShow";
import SearchPosts from "@/components/Search/SearchPosts";
import React from "react";
import { getPostBySearch, getPosts } from "../../../services";
import AdsShowOne from "@/components/Ads/AdsShowOne";
import MobileSearch from "@/components/Search/MobileSearch";

const page = async ({ searchParams }) => {
  const searchQuery = searchParams?.query;
  const posts = await getPostBySearch(searchQuery);

  // const filteredResults = posts.filter((post) =>
  //   post.node.title.toLowerCase().includes(searchQuery.toLowerCase()),
  // );

  return (
    <div className="ease max-w-screen-5xl px-0 transition-all duration-[.4s] sm:px-4 md:px-14 5xl:mx-auto">
      <MobileSearch />
      <div className="grid grid-cols-12 gap-y-12 xl:gap-14">
        <div className="col-span-12 space-y-12 3xl:col-span-8 4xl:col-span-9">
          <SearchPosts posts={posts} />
        </div>
        <div className="hidden 3xl:sticky 3xl:top-24 3xl:col-span-4 3xl:block 3xl:h-screen 4xl:col-span-3">
          <AdsShowOne />
        </div>
      </div>
    </div>
  );
};

export default page;
