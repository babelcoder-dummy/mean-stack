import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LeaveItemComponent } from '../leave-item/leave-item.component';
import { LeaveService } from '../../leave.service';
import { RouterModule } from '@angular/router';
import { LeaveItem } from '../../leave.model';

@Component({
  selector: 'absence-management-leave-list',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    LeaveItemComponent,
  ],
  templateUrl: './leave-list.component.html',
  styleUrl: './leave-list.component.css',
})
export class LeaveListComponent {
  leaveService = inject(LeaveService);
  leaveList$ = this.leaveService.getLeaveList();

  removeLeave(id: LeaveItem['id']) {
    this.leaveService.removeLeaveById(id).subscribe(() => {
      this.leaveList$ = this.leaveService.getLeaveList();
    });
  }
}
