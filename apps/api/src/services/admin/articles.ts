import { slugify } from '../../helpers/slugify';
import { Article, ArticleItem } from '../../models/article';

export const create = (
  article: Pick<ArticleItem, 'title' | 'content' | 'image'>,
) => {
  return Article.create({
    ...article,
    slug: slugify(article.title),
  } as ArticleItem);
};

export const update = (
  id: number,
  article: Partial<Pick<ArticleItem, 'title' | 'content' | 'image'>>,
) => {
  return Article.findByIdAndUpdate(
    id,
    (article.title
      ? { ...article, slug: slugify(article.title) }
      : article) as ArticleItem,
  );
};

export const destroy = (id: number) => {
  return Article.deleteOne(id);
};
