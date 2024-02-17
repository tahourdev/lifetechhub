"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const TableContent = ({ contents }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const contentTable = contents.map((text, index) => {
    if (text.type === "heading-two") {
      const link = text.id;

      {
        return (
          <li key={index} className="flex flex-col">
            <Link
              className="cursor-pointer border-b px-2 py-1 font-normal hover:text-red-400"
              activeClass="active"
              spy={true}
              // offset={-70}
              duration={500}
              to={link}
            >
              {text.children.map((headingText) => headingText.text)}
            </Link>
          </li>
        );
      }
    }
    return null;
  });

  return (
    <div
      className={`${
        isSticky ? "top-14 opacity-100" : "top-32 opacity-0"
      } relative border-r-2 border-slate-300/50 transition-all duration-300 ease-linear`}
    >
      <ul className="prose prose-a:text-slate-600 prose-a:no-underline">
        {contentTable}
      </ul>
    </div>
  );
};

export default TableContent;
