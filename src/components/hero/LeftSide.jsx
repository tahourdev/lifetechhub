import React from "react";
import { products } from "@/constant/data";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import readingTime from "reading-time";

const LeftSide = ({ firstPost }) => {
  const timeReading = readingTime(firstPost.content.html).text;
  // console.log(firstPost.content);
  return (
    <div className="ease col-span-full transition-all duration-[.4s] lg:col-span-6">
      <Link href={`/articles/${firstPost?.slug}`}>
        <div className="ease w-full overflow-hidden transition-all duration-[.4s] hover:hue-rotate-30 sm:rounded-xl">
          <img
            className="ease aspect-[16/9] bg-contain bg-center object-cover transition-all duration-300 hover:scale-105"
            src={firstPost?.featuredImage.url}
            alt=""
          />
        </div>
        <div className="space-y-4 p-4">
          {firstPost?.categories.map((cat) => (
            <div
              key={cat.name}
              className="flex w-full cursor-pointer items-center justify-between"
            >
              <p className="rounded-lg border border-solid border-green-400 px-3 py-1 text-xs font-medium text-slate-600 md:text-sm">
                {cat.name}
              </p>
              <p className="text-sm font-medium text-slate-500">
                {timeReading}
              </p>
            </div>
          ))}
          <p className="ease text-base font-semibold text-slate-700 decoration-green-600 transition-all duration-100 hover:text-green-600 hover:underline lg:text-2xl">
            {firstPost?.title}
          </p>
          <p className="ease line-clamp-3 text-xs font-normal text-slate-500 transition-all duration-[.4s] xl:text-sm 2xl:text-base">
            {firstPost?.excerption}
          </p>
          {firstPost && (
            <div className="flex items-center space-x-3">
              <div className="ease h-8 w-8 overflow-hidden rounded-full transition-all duration-[.4s]">
                <Image
                  width={582}
                  height={325}
                  className="w-full object-cover"
                  src={firstPost?.author.photo.url}
                  alt=""
                />
              </div>
              <div className="text-xs font-medium text-slate-500">
                <p>{firstPost?.author.name}</p>
                <time>{moment(firstPost.createdAt).format("MMM DD")}</time>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default LeftSide;
