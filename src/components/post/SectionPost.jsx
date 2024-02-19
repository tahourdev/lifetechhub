import React from "react";
import Divided from "../dividedSection";
import Link from "next/link";

const SectionPost = ({ title, more, see, link }) => {
  return (
    <div className="my-8 flex items-center gap-4 px-4 sm:px-0">
      <h3 className="whitespace-nowrap text-2xl font-semibold text-slate-700">
        {title}
      </h3>
      <Divided />
      {see && (
        <Link href={`/categories/${link}`} className="whitespace-nowrap">
          {more}
        </Link>
      )}
    </div>
  );
};

export default SectionPost;
