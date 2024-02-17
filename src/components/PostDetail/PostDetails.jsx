import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import readingTime from "reading-time";
import Socials from "../social";
import RawContent from "./RawContent";
// import HtmlContent from './HtmlContent';
import RecommededPosts from "./RecommededPosts";
import TableContent from "./TableContent";
// import Zoom from 'react-medium-image-zoom';
import "react-medium-image-zoom/dist/styles.css";
import { generateIdFromTitle } from "../utils";
import AdsShowOne from "../Ads/AdsShowOne";

export default async function PostDetails({ postDetails, slug }) {
  const rawContent = postDetails.content.raw.children;
  const categories = postDetails.categories.map((cat) => cat.name);
  const catSlug = postDetails.categories.map((cat) => cat.slug);
  const author = postDetails.author.name;
  const date = moment(postDetails.createdAt).format("MMM DD");
  const header = postDetails.title;
  const featuredImage = postDetails.featuredImage.url;
  const timeReading = readingTime(postDetails.content.html).text;

  // Inject IDs and anchor links into all h2 tags
  const modifiedContent = rawContent.map((child) => {
    if (child.type === "heading-two") {
      const title = child.children[0].text;
      const id = generateIdFromTitle(title);
      return {
        ...child,
        id, // Inject ID
        children: [
          {
            ...child.children[0],
            text: `${title}`, // Inject anchor link
          },
        ],
      };
    } else {
      return child;
    }
  });

  return (
    <div className="ease max-w-screen-5xl px-0 transition-all duration-[.4s] sm:px-4 md:px-14 5xl:mx-auto">
      <div className="grid grid-cols-12 gap-x-10 gap-y-12">
        <div className="hidden h-screen 2xl:sticky 2xl:top-24 2xl:col-span-4 2xl:block 3xl:col-span-4 4xl:col-span-3">
          <TableContent contents={modifiedContent} />
        </div>
        <div className="col-span-12 space-y-12 2xl:col-span-8 3xl:col-span-8 4xl:col-span-6">
          <div className="px-4 sm:px-0">
            <div className="mb-6 mt-10 flex flex-wrap items-center justify-between gap-x-4 gap-y-4">
              <div className="flex items-center gap-2 divide-x divide-slate-300">
                <Link
                  href={`/categories/${catSlug}`}
                  className="max-w-fit rounded-lg border border-solid border-green-400 px-3 py-1 pr-2 text-[10px] uppercase xl:text-xs"
                >
                  {categories}
                </Link>
                <p className="pl-2 text-xs uppercase text-slate-600 underline decoration-green-400 decoration-1 underline-offset-4">
                  {author}
                </p>
                <time className="px-2 text-xs uppercase text-slate-600">
                  {date}
                </time>
                <p className="px-2 text-xs uppercase text-slate-600">
                  {timeReading}
                </p>
              </div>
              <Socials />
            </div>
            <article className="prose prose-lg">
              {/* Header text */}
              <div>
                <h3 className="prose-2xl mb-4 text-center">{header}</h3>
                <div className="border-b-2" />
              </div>

              <Image
                width={900}
                height={400}
                quality={100}
                className="rounded-xl object-cover"
                src={featuredImage}
                alt={postDetails.title}
              />

              {/* body text */}
              {/* <HtmlContent postDetails={postDetails} /> */}
              <RawContent contents={modifiedContent} />
            </article>
            <Socials />
            <div className="my-8 border-b-2" />
          </div>
        </div>
        <div className=" top-20 z-10 hidden h-screen 3xl:sticky 4xl:col-span-3 4xl:block">
          <AdsShowOne />
        </div>
      </div>
      {/* Recommended Post */}
      <RecommededPosts slug={slug} categories={categories} />
    </div>
  );
}
