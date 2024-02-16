import { Injectable } from '@angular/core';
import { LeaveItem } from './leave.model';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  items: LeaveItem[] = [
    {
      id: 1,
      reason: 'Reason#1',
      status: 'ACCEPTED',
    },
    {
      id: 2,
      reason: 'Reason#2',
      status: 'PENDING',
    },
    {
      id: 3,
      reason: 'Reason#3',
      status: 'REJECTED',
      rejectionReason: 'REJECTION REASON',
    },
  ];

  getLeaveById(id: LeaveItem['id']) {
    return this.items.find((item) => item.id === id);
  }

  removeLeaveById(id: LeaveItem['id']) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
