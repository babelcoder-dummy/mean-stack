import { Injectable } from '@angular/core';
import { LeaveItem, LeaveStatus } from './leave.model';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  items: LeaveItem[] = [
    {
      id: 1,
      reason: 'Reason#1',
      status: LeaveStatus.APPROVED,
      leaveDate: '2024-02-20T04:11:14+0000',
    },
    {
      id: 2,
      reason: 'Reason#2',
      status: LeaveStatus.PENDING,
      leaveDate: '2024-02-21T04:11:14+0000',
    },
    {
      id: 3,
      reason: 'Reason#3',
      status: LeaveStatus.REJECTED,
      rejectionReason: 'REJECTION REASON',
      leaveDate: '2024-02-22T04:11:14+0000',
    },
  ];

  getLeaveById(id: LeaveItem['id']) {
    return this.items.find((item) => item.id === id);
  }

  removeLeaveById(id: LeaveItem['id']) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
