import { Injectable, inject } from '@angular/core';
import { LeaveItem } from './leave.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  private http = inject(HttpClient);

  getLeaveList() {
    return this.http.get<LeaveItem[]>(
      `${import.meta.env.NG_APP_API_URL}/leaves`
    );
  }

  getLeaveById(id: LeaveItem['id']) {
    return this.http.get<LeaveItem>(
      `${import.meta.env.NG_APP_API_URL}/leaves/${id}`
    );
  }

  removeLeaveById(id: LeaveItem['id']) {
    return this.http.delete(`${import.meta.env.NG_APP_API_URL}/leaves/${id}`);
  }
}
