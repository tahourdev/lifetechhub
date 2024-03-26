import React from "react";
import PostDetails from "@/components/PostDetail/PostDetails";
import { getSinglePostDetails } from "../../../../services";

export default async function page({ params }) {
  const slug = params.id;
  const postDetails = await getSinglePostDetails(slug);
  // console.log(postDetails);

  return (
    <div className="w-full">
      <PostDetails postDetails={postDetails} slug={slug} />
    </div>
  );
}

export async function generateMetadata({ params }) {
  const slug = params.id;
  try {
    const post = await getSinglePostDetails(slug);

    if (!post)
      return {
        title: "Note Found",
        description: "The page you are looking for does not exist.",
      };
    return {
      title: post.title,
      description: post.excerption,
      alternates: {
        canonical: `articles/${post.slug}`,
        languages: {
          "en-US": `/en-US/${post.slug}`,
          "de-DE": `/de-DE/${post.slug}`,
          "km-KH": `/km-KH/${post.slug}`,
        },
      },

      twitter: {
        card: "",
        title: post.title,
        description: post.excerption,
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
