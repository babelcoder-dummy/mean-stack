import { RequestHandler } from 'express';
import * as service from '../services/articles';
import { ArticleResponseDto } from '../dto/articles/ArticleResponseDto';

export const findOne: RequestHandler = (req, res) => {
  const article = service.findOne(req.params.id);

  res.json(new ArticleResponseDto(article));
};

export const findAll: RequestHandler = (req, res) => {
  const articles = service.findAll();

  res.json(articles.map((a) => new ArticleResponseDto(a)));
};
