import { getCategories, getPosts } from "../../services";

export default async function sitemap() {
  const baseUrl = "https://www.lifetechhubs.com";
  // get all posts from cms
  const posts = await getPosts();
  const postsUrls =
    posts?.map((post) => {
      return {
        url: `${baseUrl}/articles/${post.node.slug}`,
        lastModified: new Date(),
      };
    }) || [];

  //  get all categories from cms
  const categories = await getCategories();
  const categoriesUrls =
    categories?.map((category) => {
      return {
        url: `${baseUrl}/categories/${category.slug}`,
        lastModified: new Date(),
      };
    }) || [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postsUrls,
    ...categoriesUrls,
  ];
}
