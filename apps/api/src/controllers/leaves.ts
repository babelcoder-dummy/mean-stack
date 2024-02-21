import { RequestHandler } from 'express';
import * as service from '../services/leaves';
import bodyValidator from '../middleware/body-validator';
import { CreateLeaveFormDto } from '../dto/leaves/CreateLeaveFormDto';
import { EditLeaveFormDto } from '../dto/leaves/EditLeaveFormDto';
import { LeaveResponseDto } from '../dto/leaves/LeaveResponseDto';

export const findOne: RequestHandler = (req, res) => {
  const leave = service.findOne(+req.params.id);

  res.json(new LeaveResponseDto(leave));
};

export const findAll: RequestHandler = (req, res) => {
  const leaves = service.findAll();

  res.json(leaves.map((l) => new LeaveResponseDto(l)));
};

export const create: RequestHandler[] = [
  bodyValidator(CreateLeaveFormDto),
  (req, res) => {
    const leave = service.create(req.body);

    res.status(201).json(new LeaveResponseDto(leave));
  },
];

export const update: RequestHandler[] = [
  bodyValidator(EditLeaveFormDto),
  (req, res) => {
    const leave = service.update(+req.params.id, req.body);

    res.json(new LeaveResponseDto(leave));
  },
];

export const destroy: RequestHandler = (req, res) => {
  service.destroy(+req.params.id);

  res.status(204).send();
};
