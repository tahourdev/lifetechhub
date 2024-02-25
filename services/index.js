import { gql, GraphQLClient } from "graphql-request";

export const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const graphQLClient = new GraphQLClient(graphqlAPI);

// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// const client = new ApolloClient({
//   uri: graphqlAPI,
//   cache: new InMemoryCache(),
// });

//Get All Posts
export const getPosts = async () => {
  const query = gql`
    query getPosts {
      postsConnection(orderBy: publishedAt_DESC, first: 100) {
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
  const result = await graphQLClient.request(query);
  return result.postsConnection.edges;
};

//Get Hero Posts
export const getHeroPosts = async () => {
  const query = gql`
    query getHeroPosts {
      postsConnection(orderBy: publishedAt_DESC, first: 4) {
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
  const result = await graphQLClient.request(query);
  return result.postsConnection.edges;
};

//Get Latest Posts
export const getLatesPosts = async () => {
  const query = gql`
    query getLatesPosts {
      postsConnection(orderBy: publishedAt_DESC, first: 10) {
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
  const result = await graphQLClient.request(query);
  return result.postsConnection.edges;
};

//Get Categories Posts
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

  const result = await graphQLClient.request(query);
  return result.categories;
};

//Get Single Post
export const getSinglePostDetails = async (slug) => {
  const query = gql`
    query getSinglePostDetails($slug: String!) {
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
  const result = await graphQLClient.request(query, { slug });
  return result.post;
};

//Get Recommend Posts
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

  const result = await graphQLClient.request(query, { slug, categories }); // Provide the value for $slug
  return result.posts;
};

//Get Posts by each categories
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
            description
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
  const result = await graphQLClient.request(query, { slug, first, skip });
  return result.category;
};

// Get Post By Search
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
  const result = await graphQLClient.request(query, { title });

  return result.posts;
};

//Get Total Posts for each categories
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
  const result = await graphQLClient.request(query, { slug });
  return result.category;
};

// Get Pagination Posts
export const getPostsByPagination = async (slug, first, skip) => {
  const query = gql`
    query getPostsByPagination($slug: String!, $first: Int, $skip: Int) {
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
  const result = await graphQLClient.request(query, { slug, first, skip });
  return result.postsConnection;
};

// Get Pages
export const getPage = async (slug) => {
  const query = gql`
    query getPage($slug: String!) {
      page(where: { slug: $slug }) {
        title
        slug
        content {
          html
          raw
        }
      }
    }
  `;
  const result = await graphQLClient.request(query, { slug });
  return result.page;
};
