import React, { Suspense } from "react";
import Post from "@/components/post/Post";
import { getPostsByCat, getPostsByPagination } from "../../../../services";
import Link from "next/link";
import Layout from "../layout";
import Loading from "../loading";

export default async function CategoryPage({ params, searchParams }) {
  const paramId = params.id;
  const perPage = 6;
  const postByCat = await getPostsByPagination(paramId, perPage);
  const totalPages = Math.ceil(postByCat.aggregate.count / perPage);
  let page = parseInt(searchParams.page);

  page = !page || page < 1 ? 1 : page;

  const categoryPosts = await getPostsByPagination(
    paramId,
    perPage,
    perPage * (page - 1),
  );

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

  const pagesNumber = [];
  const offsetNumber = 3;

  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pagesNumber.push(i);
    }
  }

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <div
          className="flex max-h-[30%] w-full items-center justify-center
      bg-slate-900 py-12 text-3xl font-bold capitalize text-slate-50 underline decoration-green-400 decoration-2 underline-offset-4"
        >
          {paramId}
        </div>

        <div className="ease mt-10 max-w-screen-5xl px-0 transition-all duration-[.4s] sm:px-4 md:px-14 5xl:mx-auto">
          <div className="ease grid gap-8 transition-all duration-[.4s] md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-2 4xl:grid-cols-3 ">
            {categoryPosts?.edges.map((post, index) => (
              <div key={index}>
                <Post
                  key={post.node.title}
                  cover={post.node.featuredImage.url}
                  cat={post.node.categories.map((cat) => cat.name)}
                  title={post.node.title}
                  desc={post.node.excerption}
                  author={post.node.author}
                  createdAt={post.node.createdAt}
                  slug={post.node.slug}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex w-full justify-center">
          <div className="flex gap-4 rounded-[10px] border-[1px] border-secondary px-3 py-2">
            {page === 1 ? (
              <div className="opacity-60" aria-disabled="true">
                Previous
              </div>
            ) : (
              <Link href={`?page=${prevPage}`} aria-label="Previous Page">
                Previous
              </Link>
            )}

            {pagesNumber.map((pageNumber, index) => (
              <div key={index}>
                <Link
                  href={`?page=${pageNumber}`}
                  className={`${page === pageNumber ? "rounded-md bg-secondary px-2 text-slate-100" : ""}`}
                >
                  {pageNumber}
                </Link>
              </div>
            ))}

            {page === totalPages ? (
              <div className="opacity-60" aria-disabled="true">
                Next
              </div>
            ) : (
              <Link href={`?page=${nextPage}`} aria-label="Next Page">
                Next
              </Link>
            )}
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export async function generateMetadata({ params }) {
  const catId = params.id;
  const catPosts = await getPostsByCat(catId);
  const catName = catPosts.name;
  const catDesc = catPosts.posts.map((cat) =>
    cat.categories.map((post) => post.description),
  );

  try {
    if (!catPosts)
      return {
        title: "Not Found",
        description: "This page you are looking for does not exist.",
      };
    return {
      title: catName,
      description: catDesc,
      alternates: {
        canonical: `/categories/${catId}`,
      },
      robots: {
        index: false,
        follow: true,
        nocache: true,
      },
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "This page you are looking for does not exist.",
    };
  }
}
