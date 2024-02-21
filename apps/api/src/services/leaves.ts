export type LeaveItem = {
  id: number;
  reason: string;
  leaveDate: Date;
} & (
  | { status: 'Pending' | 'Approved'; rejectionReason?: never }
  | { status: 'Rejected'; rejectionReason: string }
);

let leaveList: LeaveItem[] = [
  { id: 1, reason: 'Reason#1', status: 'Pending', leaveDate: new Date() },
  { id: 2, reason: 'Reason#2', status: 'Approved', leaveDate: new Date() },
  {
    id: 3,
    reason: 'Reason#3',
    status: 'Rejected',
    rejectionReason: 'Reason#3',
    leaveDate: new Date(),
  },
  { id: 4, reason: 'Reason#4', status: 'Pending', leaveDate: new Date() },
  { id: 5, reason: 'Reason#5', status: 'Pending', leaveDate: new Date() },
];

export const findOne = (id: LeaveItem['id']) => {
  return leaveList.find((item) => item.id === id);
};

export const findAll = () => {
  return leaveList;
};

export const create = (leave: Omit<LeaveItem, 'id' | 'status'>) => {
  const newLeaveItem = {
    id: leaveList.length + 1,
    status: 'Pending',
    ...leave,
  } as LeaveItem;

  leaveList.push(newLeaveItem);

  return newLeaveItem;
};

export const update = (
  id: LeaveItem['id'],
  leave: Partial<Omit<LeaveItem, 'id' | 'status'>>
) => {
  const index = leaveList.findIndex((l) => l.id === id);

  leaveList[index] = { ...leaveList[index], ...leave } as LeaveItem;

  return leaveList[index];
};

export const destroy = (id: LeaveItem['id']) => {
  leaveList = leaveList.filter((item) => item.id !== id);
};
