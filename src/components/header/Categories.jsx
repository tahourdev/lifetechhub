"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import { getPostBytitle } from "../../../services";
import { debounce } from "lodash";
import SearchPosts from "../Search/SearchPosts";

const Categories = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        `ease mx-auto w-full max-w-screen-5xl px-0 transition-all duration-[.4s] sm:px-4 md:px-14`,
        isSticky && "sticky top-0 z-50 sm:top-2",
        !isSticky && "sticky -top-40",
      )}
    >
      <div className="relative my-4 w-full ">
        <div className=" flex items-center justify-between gap-4">
          <ul
            className={clsx(
              `no-scrollbar inline-flex basis-full snap-x gap-4 divide-x overflow-auto rounded-r-full bg-secondary p-1 shadow-md transition-all duration-300 ease-in sm:rounded-full lg:basis-3/4`,
              isSticky && "bg-secondary/80 backdrop-blur-md",
            )}
          >
            {[
              "Home",
              "Technology",
              "Health",
              "Travel",
              "Lifestyle",
              "How to and Tutorial",
              "Culture",
            ].map((cat, index) => (
              <li
                key={index}
                className="cursor-pointer snap-center whitespace-nowrap rounded-full text-sm font-normal text-white transition-all duration-300 ease-in-out hover:bg-red-400 md:text-base"
              >
                <Link
                  className="block rounded-full px-6 py-2"
                  href={
                    cat === "Home"
                      ? "/"
                      : `/categories/${cat.toLowerCase().replace(/\s+/g, "-")} `
                  }
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Categories;
