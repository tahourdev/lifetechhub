export const sortArticles = (articles) => {
  return articles
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)),
    );
};
