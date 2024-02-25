"use client";
import React from "react";
import PostByCat from "./PostByCat";
import { getCategories } from "../../../services";
import SectionPost from "./SectionPost";
import { useQuery } from "@tanstack/react-query";
import ContentLoading from "../Loading/ContentLoading";

export const Cats = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cat"],
    queryFn: () => getCategories(),
  });

  if (!data) {
    return <ContentLoading />;
  }

  return (
    <>
      {data?.map((cat, index) => (
        <div key={index}>
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
