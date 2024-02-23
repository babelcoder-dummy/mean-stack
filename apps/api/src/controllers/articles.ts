import { RequestHandler } from 'express';
import * as service from '../services/articles';
import { ArticleResponseDto } from '../dto/articles/ArticleResponseDto';

export const findOne: RequestHandler = async (req, res) => {
  const article = await service.findOne(req.params.id);

  res.json(new ArticleResponseDto(article));
};

export const findAll: RequestHandler = async (req, res) => {
  const articles = await service.findAll();

  res.json(articles.map((a) => new ArticleResponseDto(a)));
};
