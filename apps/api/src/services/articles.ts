import { isValidObjectId } from 'mongoose';
import { Article } from '../models';

export const findAll = () => {
  return Article.find();
};

export const findOne = (id: string) => {
  if (isValidObjectId(id)) return Article.findById(id);
  return Article.findOne({ slug: id });
};
