import { remark } from 'remark';
import html from 'remark-html';
import { rehype } from 'rehype';
import { rehypeSlug } from 'rehype-slug';

export async function addIdsToH1(content) {
  const processedContent = await remark().use(html).process(content);

  const idsAddedContent = await rehype().use(rehypeSlug).process(processedContent.toString());

  return idsAddedContent.toString();
}
