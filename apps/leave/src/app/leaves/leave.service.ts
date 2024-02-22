import { Injectable, inject } from '@angular/core';
import { LeaveForm, LeaveItem } from './leave.model';
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

  create(form: LeaveForm) {
    return this.http.post<LeaveItem>('/leaves', form);
  }

  update(id: string, form: LeaveForm) {
    return this.http.patch<LeaveItem>(`/leaves/${id}`, form);
  }

  removeLeaveById(id: LeaveItem['id']) {
    return this.http.delete(`/leaves/${id}`);
  }
}
