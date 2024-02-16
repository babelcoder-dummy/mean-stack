import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveItem, LeaveStatus } from '../../leave.model';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'absence-management-leave-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './leave-item.component.html',
  styleUrl: './leave-item.component.css',
})
export class LeaveItemComponent {
  @Input({ required: true }) leave!: LeaveItem;
  @Output() remove = new EventEmitter<LeaveItem['id']>();

  getStatusClasses() {
    const baseClasses = 'rounded-full text-white bg-blue-300 py-1 px-2';

    switch (this.leave.status) {
      case LeaveStatus.APPROVED:
        return `${baseClasses} bg-green-500`;
      case LeaveStatus.PENDING:
        return `${baseClasses} bg-blue-500`;
      case LeaveStatus.REJECTED:
        return `${baseClasses} bg-red-500`;
    }
  }

  isPending() {
    return this.leave.status === LeaveStatus.PENDING;
  }

  isRejected() {
    return this.leave.status === LeaveStatus.REJECTED;
  }

  removeItem(event: MouseEvent) {
    event.preventDefault();
    this.remove.emit(this.leave.id);
  }
}
