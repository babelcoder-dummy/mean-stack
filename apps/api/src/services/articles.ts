import { Article } from '../models/article';

export const findAll = () => {
  return Article.find();
};

export const findOne = (id: string) => {
  if (Number.isNaN(+id)) return Article.findBySlug(id);
  return Article.findById(+id);
};
