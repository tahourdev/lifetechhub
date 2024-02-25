"use client";
import React from "react";
import PostByCat from "./PostByCat";
import { getCategories } from "../../../services";
import SectionPost from "./SectionPost";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import ContentLoading from "../Loading/ContentLoading";

export const Cats = () => {
  // const catPosts = await getCategories();
  const { data, isLoading } = useQuery({
    queryKey: ["cat"],
    queryFn: () => getCategories(),
  });

  if (!data) {
    return <ContentLoading />;
  }

  return (
    <>
      {data.map((cat, index) => (
        <div key={index} className="w-full">
          <SectionPost
            link={cat.slug}
            title={cat.name}
            more="See All"
            see={true}
          />
          <PostByCat posts={cat.posts} />
        </div>
      ))}
    </>
  );
};
