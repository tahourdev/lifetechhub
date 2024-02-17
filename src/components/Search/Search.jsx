"use client";
import useMedia from "@/hooks/useMedia";
import clsx from "clsx";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { getPosts } from "../../../services";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const [posts, setPosts] = useState([]);
  const isMedium = useMedia("(min-width: 767px)");
  const router = useRouter();

  const fetchPosts = async () => {
    const articles = await getPosts();
    setPosts(articles);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  console.log(!searchQuery);

  return (
    <form
      onSubmit={handleSearch}
      className="relative mr-2 inline-flex h-[3rem] w-full max-w-[3rem] items-center 
        justify-center rounded-full bg-white/70 p-2 shadow-md backdrop-blur-md transition-all duration-300 ease-in lg:mr-0 lg:max-w-[25%]"
    >
      <input
        className="hidden w-full bg-transparent pr-4 indent-2 outline-none placeholder:text-sm lg:block"
        type="text"
        name="search"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />

      {isMedium ? (
        <button
          type="submit"
          className=" absolute right-2 top-1/2 -translate-y-1/2"
        >
          <MdSearch className="cursor-pointer text-slate-500" size={20} />
        </button>
      ) : (
        <Link href="/search">
          <MdSearch className={clsx(`text-slate-500`)} size={20} />
        </Link>
      )}
    </form>
  );
};

export default Search;
