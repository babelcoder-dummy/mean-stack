export enum LeaveStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

export type LeaveItem = {
  id: number;
  reason: string;
  leaveDate: string;
} & (
  | {
      status: LeaveStatus.PENDING | LeaveStatus.APPROVED;
      rejectionReason?: never;
    }
  | { status: LeaveStatus.REJECTED; rejectionReason: string }
);
