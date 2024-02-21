import { Injectable, inject } from '@angular/core';
import { LeaveItem } from './leave.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  private http = inject(HttpClient);

  getLeaveList() {
    return this.http.get<LeaveItem[]>('/leaves');
  }

  getLeaveById(id: LeaveItem['id']) {
    return this.http.get<LeaveItem>(`/leaves/${id}`);
  }

  removeLeaveById(id: LeaveItem['id']) {
    return this.http.delete(`/leaves/${id}`);
  }
}
