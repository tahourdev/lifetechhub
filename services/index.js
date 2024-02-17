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
            content {
              html
              raw
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
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, categories }); // Provide the value for $slug
  return result.posts;
};

export const getPostsByCat = async (slug, first, skip) => {
  const query = gql`
    query getPostsByCat($slug: String, $first: Int, $skip: Int) {
      category(where: { slug: $slug }) {
        name
        posts(orderBy: publishedAt_DESC, first: $first, skip: $skip) {
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
  const result = await request(graphqlAPI, query, { slug, first, skip });
  return result.category;
};

export const getPostBySearch = async (title) => {
  const query = gql`
    query getPostBySearch($title: String) {
      posts(where: { _search: $title }, first: 6, orderBy: publishedAt_DESC) {
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

export const getCategoryTotalPosts = async (slug) => {
  const query = gql`
    query getCategoryTotalPosts($slug: String) {
      category(where: { slug: $slug }) {
        name
        posts {
          title
          slug
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.category;
};

export const getPostsByPagination = async (slug, first, skip) => {
  const query = gql`
    query getPostsByPagination($slug: String!, $first: Int!, $skip: Int) {
      postsConnection(
        first: $first
        where: { categories_some: { slug: $slug } }
        orderBy: publishedAt_DESC
        skip: $skip
      ) {
        edges {
          cursor
          node {
            categories {
              name
            }
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
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          pageSize
          startCursor
        }
        aggregate {
          count
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, first, skip });
  return result.postsConnection;
};
