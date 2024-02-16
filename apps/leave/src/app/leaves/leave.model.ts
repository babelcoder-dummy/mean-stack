export type LeaveItem = {
  id: number;
  reason: string;
} & (
  | { status: 'PENDING' | 'ACCEPTED'; rejectionReason?: never }
  | { status: 'REJECTED'; rejectionReason: string }
);
