import { RequestHandler } from 'express';
import * as service from '../services/leaves';
import bodyValidator from '../middleware/body-validator';
import { CreateLeaveFormDto } from '../dto/leaves/CreateLeaveFormDto';
import { EditLeaveFormDto } from '../dto/leaves/EditLeaveFormDto';

export const findOne: RequestHandler = (req, res) => {
  res.json(service.findOne(+req.params.id));
};

export const findAll: RequestHandler = (req, res) => {
  res.json(service.findAll());
};

export const create: RequestHandler[] = [
  bodyValidator(CreateLeaveFormDto),
  (req, res) => {
    res.status(201).json(service.create(req.body));
  },
];

export const update: RequestHandler[] = [
  bodyValidator(EditLeaveFormDto),
  (req, res) => {
    const leave = service.update(+req.params.id, req.body);
    res.json(leave);
  },
];

export const destroy: RequestHandler = (req, res) => {
  service.destroy(+req.params.id);

  res.status(204).send();
};
