import { DocumentType } from '@typegoose/typegoose';
import { Expose, Transform } from 'class-transformer';
import { LeaveSchema } from '../../models/leave';

export class LeaveResponseDto {
  @Expose()
  @Transform(({ obj }) => obj._id.toString())
  id: number;

  @Expose()
  status: string;

  @Expose()
  reason: string;

  @Expose()
  leaveDate: string;

  constructor(leave: DocumentType<LeaveSchema>) {
    Object.assign(this, leave.toJSON());
  }
}
