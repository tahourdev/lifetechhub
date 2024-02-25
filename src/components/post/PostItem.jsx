import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostItem = ({ post }) => {
  return (
    <article className="grid grid-cols-12 space-x-4 md:space-x-8">
      <Link
        href={`/articles/${post.slug}`}
        className="col-span-5 place-self-start overflow-hidden transition-all duration-300 ease-in-out sm:rounded-lg md:col-span-6 4xl:col-span-4"
      >
        <Image
          width={300}
          height={200}
          quality={40}
          priority
          className="aspect-[3/2] h-auto w-auto cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:hue-rotate-30 sm:rounded-lg"
          src={post.featuredImage.url}
          alt=""
        />
      </Link>
      <div className="col-span-7 flex flex-col justify-start gap-2 transition-all duration-300 ease-in-out md:col-span-6 lg:gap-4 3xl:justify-center 4xl:col-span-8">
        {/* <p className='md:text-xs text-[10px] max-w-fit border border-solid cursor-pointer border-green-400 rounded-lg px-3 py-1'>
          {post.cat}
        </p> */}
        <Link
          href={`/articles/${post.slug}`}
          className="ease line-clamp-2 cursor-pointer text-base font-semibold text-slate-700 decoration-green-600 transition-all duration-100 hover:text-green-600 hover:underline lg:line-clamp-none 3xl:text-xl"
        >
          {post.title}
        </Link>
        <div>
          <p className="text-xs text-slate-600 lg:text-sm">
            {moment(post.createdAt).format("MMM DD")} by{" "}
            <span>{post.author.name}</span>
          </p>
        </div>
        <p className="line-clamp-3 text-sm text-slate-600 3xl:text-base">
          {post.excerption}
        </p>
      </div>
    </article>
  );
};

export default PostItem;
