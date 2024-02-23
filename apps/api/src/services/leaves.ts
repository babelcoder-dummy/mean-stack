import { FilterOutFunctionKeys } from '@typegoose/typegoose/lib/types';
import { Leave } from '../models';
import { LeaveSchema } from '../models/leave';

export const findOne = (id: string) => {
  return Leave.findById(id);
};

export const findAll = () => {
  return Leave.find();
};

export const create = (
  leave: Pick<FilterOutFunctionKeys<LeaveSchema>, 'reason' | 'leaveDate'>,
) => {
  return Leave.create(leave);
};

export const update = async (
  id: string,
  form: Partial<
    Pick<FilterOutFunctionKeys<LeaveSchema>, 'reason' | 'leaveDate'>
  >,
) => {
  const leave = await Leave.findByIdAndUpdate(id, form, { new: true });

  return leave;
};

export const destroy = (id: string) => {
  return Leave.deleteOne({ _id: id });
};
