import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveService } from '../../leave.service';
import { LeaveItem } from '../../leave.model';

@Component({
  selector: 'absence-management-leave-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-details.component.html',
  styleUrl: './leave-details.component.css',
})
export class LeaveDetailsComponent {
  leaveService = inject(LeaveService);
  leave?: LeaveItem;

  @Input() set id(value: string) {
    this.leave = this.leaveService.getLeaveById(+value);
  }
}
