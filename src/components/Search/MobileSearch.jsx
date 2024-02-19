"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getPosts } from "../../../services";

const MobileSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="relative mx-4 mb-4 block rounded-full bg-white p-3 shadow-md sm:mx-0 lg:hidden"
    >
      <input
        className=" w-full bg-transparent  indent-2 outline-none placeholder:text-base "
        type="text"
        name="search"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Post..."
      />
      <div className="absolute right-1 top-1/2 -translate-y-1/2 overflow-hidden rounded-full text-slate-700 shadow-md hover:text-slate-800 hover:drop-shadow-sm">
        <button className="bg-white px-5 py-2">Search</button>
      </div>
    </form>
  );
};

export default MobileSearch;
