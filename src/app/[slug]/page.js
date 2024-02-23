import React from "react";
import { getPage } from "../../../services";
import AdsShow from "@/components/Ads/AdsShow";
// import PagePost from "@/components/post/PagePost";
import { getRawContentFragment } from "@/components/utils";

export default async function page({ params }) {
  const slug = params.slug;
  const page = await getPage(slug);
  const content = page.content.raw;
  console.log(page);

  return (
    <div className="ease max-w-screen-5xl px-4 transition-all duration-[.4s] md:px-14 5xl:mx-auto">
      <div className="grid grid-cols-12 xl:gap-14">
        <div className="col-span-12 3xl:col-span-8 4xl:col-span-9">
          <article className="prose prose-base mt-6 prose-a:text-[15px] prose-a:text-red-400">
            {content.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemIndex) => {
                return getRawContentFragment(itemIndex, item.text, item);
              });
              return getRawContentFragment(
                index,
                children,
                typeObj,
                typeObj.type,
              );
            })}
            {/* <PagePost data={content} /> */}
          </article>
        </div>
        <AdsShow />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const page = await getPage(slug);
  try {
    if (!page)
      return {
        title: "Note Found",
        description: "The page you are looking for does not exist.",
      };
    return {
      title: page.title,
      // description: post.excerption,
      alternates: {
        canonical: `articles/${page.slug}`,
      },
      twitter: {
        card: "",
        title: page.title,
        // description: post.excerption,
        sideId: "",
        creator: "@abandoned_hill",
        creatorId: "885297551137583105",
        // images: ["https://nextjs.org/og.png"],
      },
    };
  } catch (error) {
    return {
      title: "Note Found",
      description: "The page you are looking for does not exist.",
    };
  }
}
