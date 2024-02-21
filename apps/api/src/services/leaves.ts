export type LeaveItem = {
  id: number;
  reason: string;
} & (
  | { status: 'Pending' | 'Approved'; rejectionReason?: never }
  | { status: 'Rejected'; rejectionReason: string }
);

let leaveList: LeaveItem[] = [
  { id: 1, reason: 'Reason#1', status: 'Pending' },
  { id: 2, reason: 'Reason#2', status: 'Approved' },
  {
    id: 3,
    reason: 'Reason#3',
    status: 'Rejected',
    rejectionReason: 'Reason#3',
  },
  { id: 4, reason: 'Reason#4', status: 'Pending' },
  { id: 5, reason: 'Reason#5', status: 'Pending' },
];

export const findOne = (id: LeaveItem['id']) => {
  return leaveList.find((item) => item.id === id);
};

export const findAll = () => {
  return leaveList;
};

export const destroy = (id: LeaveItem['id']) => {
  leaveList = leaveList.filter((item) => item.id !== id);
};
