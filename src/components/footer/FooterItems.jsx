import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FooterItems({ title, links, isCat, isMenu }) {
  return (
    <div className="w-full px-10 md:px-0">
      <div>
        <h1
          className="link relative mb-4 font-semibold text-slate-200 before:absolute before:-left-2 
      before:bottom-0 before:box-content before:h-full before:w-[2px] before:bg-green-500"
        >
          {title}
        </h1>
        <ul className="gap-1 space-y-3 md:w-full md:columns-2 lg:columns-1">
          {links?.map((link, index) => (
            <li
              key={index}
              className="prose prose-sm max-w-fit prose-a:text-slate-300 hover:prose-a:text-slate-200"
            >
              {isCat && (
                <Link
                  className="block no-underline"
                  href={
                    link === "Home" && isCat === true
                      ? "/"
                      : `/categories/${link.toLowerCase().replace(/\s+/g, "-")} `
                  }
                >
                  {link}
                </Link>
              )}

              {isMenu && (
                <Link
                  className="block no-underline"
                  href={
                    link === "Home" && isCat === true
                      ? "/"
                      : `/${link.toLowerCase().replace(/\s+/g, "-")} `
                  }
                >
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
