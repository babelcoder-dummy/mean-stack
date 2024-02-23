import { RequestHandler } from 'express';
import * as service from '../services/leaves';
import bodyValidator from '../middleware/body-validator';
import { CreateLeaveFormDto } from '../dto/leaves/CreateLeaveFormDto';
import { EditLeaveFormDto } from '../dto/leaves/EditLeaveFormDto';
import { LeaveResponseDto } from '../dto/leaves/LeaveResponseDto';

export const findOne: RequestHandler = async (req, res) => {
  const leave = await service.findOne(req.params.id);

  res.json(new LeaveResponseDto(leave));
};

export const findAll: RequestHandler = async (req, res) => {
  const leaves = await service.findAll();

  res.json(leaves.map((l) => new LeaveResponseDto(l)));
};

export const create: RequestHandler[] = [
  bodyValidator(CreateLeaveFormDto),
  async (req, res) => {
    const leave = await service.create(req.body);

    res.status(201).json(new LeaveResponseDto(leave));
  },
];

export const update: RequestHandler[] = [
  bodyValidator(EditLeaveFormDto),
  async (req, res) => {
    const leave = await service.update(req.params.id, req.body);

    res.json(new LeaveResponseDto(leave));
  },
];

export const destroy: RequestHandler = async (req, res) => {
  await service.destroy(req.params.id);

  res.status(204).send();
};
