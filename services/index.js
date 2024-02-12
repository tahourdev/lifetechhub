import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query getPosts {
      postsConnection(orderBy: publishedAt_DESC) {
        edges {
          node {
            title
            slug
            excerption
            createdAt
            featuredImage {
              url
            }
            author {
              name
              photo {
                url
              }
            }
            categories {
              name
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        name
        slug
        posts(orderBy: publishedAt_DESC, first: 6) {
          slug
          title
          createdAt
          excerption
          featuredImage {
            url
          }
          author {
            name
            photo {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.categories;
};

export const getSinglePostDetails = async (slug) => {
  const query = gql`
    query getSinglePostDetails($slug: String) {
      post(where: { slug: $slug }) {
        title
        slug
        excerption
        createdAt
        featuredImage {
          url
        }
        author {
          name
          photo {
            url
          }
        }
        categories {
          name
          slug
        }
        content {
          html
          raw
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};

export const getRecommendedPosts = async (slug, categories) => {
  const query = gql`
    query getRecommendedPosts($slug: String!, $categories: [String]) {
      posts(
        where: {
          slug_not: $slug
          OR: { categories_some: { name_in: $categories } }
        }
        last: 3
      ) {
        title
        slug
        excerption
        createdAt
        featuredImage {
          url
        }
        author {
          name
          photo {
            url
          }
        }
        categories {
          name
        }
        content {
          html
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, categories }); // Provide the value for $slug
  return result.posts;
};

export const getPostsByCat = async (slug) => {
  const query = gql`
    query getPostsByCat($slug: String) {
      category(where: { slug: $slug }) {
        name
        posts(orderBy: publishedAt_DESC) {
          title
          slug
          featuredImage {
            url
          }
          excerption
          createdAt
          categories {
            name
          }
          author {
            name
            photo {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.category;
};

export const getPostBySearch = async (title) => {
  const query = gql`
    query getPostBySearch($title: String) {
      posts(where: { _search: $title }) {
        title
        createdAt
        slug
        featuredImage {
          url
        }
        categories {
          name
        }
        author {
          name
          photo {
            url
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { title });
  return result.posts;
};
