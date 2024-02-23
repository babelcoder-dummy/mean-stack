import { FilterOutFunctionKeys } from '@typegoose/typegoose/lib/types';
import { slugify } from '../../helpers/slugify';
import { ArticleSchema } from '../../models/article';
import { Article } from '../../models';

export const create = (
  article: Pick<
    FilterOutFunctionKeys<ArticleSchema>,
    'title' | 'content' | 'image'
  >,
) => {
  return Article.create({
    ...article,
    slug: slugify(article.title),
  });
};

export const update = (
  id: string,
  article: Partial<
    Pick<FilterOutFunctionKeys<ArticleSchema>, 'title' | 'content' | 'image'>
  >,
) => {
  return Article.findByIdAndUpdate(
    id,
    article.title ? { ...article, slug: slugify(article.title) } : article,
    { new: true },
  );
};

export const destroy = (id: string) => {
  return Article.deleteOne({ _id: id });
};
