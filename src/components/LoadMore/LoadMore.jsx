"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "../Loading/Spinner";
import { getPostsByCat } from "../../../services";
import CategoryPosts from "../categoryPosts/CategoryPosts";
import { delay } from "lodash";

const LoadMore = ({ cat }) => {
  const [posts, setPosts] = useState([]);
  // page already load
  const [pageLoaded, setPageLoaded] = useState(1);

  const { ref, inView } = useInView();

  const loadMorePosts = async () => {
    const nextPage = pageLoaded + 1;
    const newPosts = (await getPostsByCat(cat)) ?? [];
    setPosts((prevPosts) => [...prevPosts, newPosts]);
    setPageLoaded(nextPage);
  };

  console.log(posts);

  useEffect(() => {
    if (inView) {
      console.log("Scroll to the end");
      loadMorePosts();
    }
  }, [inView]);
  return (
    <>
      {/* <CategoryPosts cat={posts} /> */}
      <div className="flex w-full items-center justify-center" ref={ref}>
        <Spinner />
      </div>
    </>
  );
};

export default LoadMore;
