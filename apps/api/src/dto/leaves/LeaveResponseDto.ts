import { Expose, Transform } from 'class-transformer';
import { LeaveItem } from '../../services/leaves';

export class LeaveResponseDto {
  @Expose()
  @Transform(({ value }) => value.toString())
  id: number;

  @Expose()
  status: string;

  @Expose()
  reason: string;

  @Expose()
  leaveDate: string;

  constructor(leave: LeaveItem) {
    Object.assign(this, leave);
  }
}
