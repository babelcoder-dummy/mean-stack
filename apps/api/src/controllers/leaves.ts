import { RequestHandler } from 'express';
import * as service from '../services/leaves';

export const findOne: RequestHandler = (req, res) => {
  res.json(service.findOne(+req.params.id));
};

export const findAll: RequestHandler = (req, res) => {
  res.json(service.findAll());
};

export const destroy: RequestHandler = (req, res) => {
  service.destroy(+req.params.id);

  res.status(204).send();
};
