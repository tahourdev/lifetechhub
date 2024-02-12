import React from "react";
import Link from "next/link";
import moment from "moment";

const RightSide = ({ nextThreePost }) => {
  return (
    <div className="grid grid-cols-12 gap-4 transition-all duration-300 ease-in-out xl:gap-6">
      <div className="ease col-span-6 place-self-start overflow-hidden transition-all duration-[.4s] sm:rounded-xl md:col-span-5 2xl:col-span-6">
        <Link href={`/articles/${nextThreePost.node.slug}`}>
          <img
            className="aspect-video cursor-pointer overflow-hidden bg-contain bg-center object-cover transition-all duration-300 ease-in-out hover:scale-110 hover:hue-rotate-30 sm:rounded-xl"
            src={nextThreePost?.node.featuredImage.url}
            alt=""
          />
        </Link>
      </div>
      <div className="ease col-span-6 space-y-3 pr-4 transition-all duration-[.4s] md:col-span-7 lg:pr-0 2xl:col-span-6">
        {nextThreePost?.node.categories.map((cat) => (
          <p
            key={cat.name}
            className="max-w-fit rounded-lg border border-solid border-green-400 px-3 py-1 text-[10px] xl:text-xs"
          >
            {cat.name}
          </p>
        ))}
        <Link href={`/articles/${nextThreePost.node.slug}`}>
          <p className="ease line-clamp-2 pt-3 text-xs font-semibold text-slate-700 decoration-green-600 transition-all duration-100 hover:text-green-600 hover:underline xl:text-lg">
            {nextThreePost.node.title}
          </p>
        </Link>
        <p className="ease line-clamp-3 text-[10px] font-normal text-slate-500 transition-all duration-[.4s] xl:text-sm">
          {nextThreePost?.node.excerption}
        </p>
        <div className="flex items-center space-x-3">
          <div className="ease h-8 w-8 overflow-hidden rounded-full transition-all duration-[.4s]">
            <img
              className="w-full"
              src={nextThreePost?.node.author.photo.url}
              alt=""
            />
          </div>
          <div className="text-xs font-medium text-slate-500">
            <p>{nextThreePost?.node.author.name}</p>
            <time>
              {moment(nextThreePost?.node.createdAt).format("MMM DD")}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
