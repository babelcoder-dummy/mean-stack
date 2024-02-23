import { modelOptions, prop } from '@typegoose/typegoose';
import { BaseSchema } from './base';
import LeaveStatus from './leave-status';

@modelOptions({ schemaOptions: { collection: 'leaves' } })
export class LeaveSchema extends BaseSchema {
  @prop({
    enum: LeaveStatus,
    type: () => String,
    default: LeaveStatus.PENDING,
  })
  status: LeaveStatus;

  @prop({ required: true })
  reason: string;

  @prop({ required: true })
  leaveDate: Date;

  @prop()
  rejectionReason?: string;
}
