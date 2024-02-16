import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveItemComponent } from '../leave-item/leave-item.component';
import { LeaveService } from '../../leave.service';

@Component({
  selector: 'absence-management-leave-list',
  standalone: true,
  imports: [CommonModule, LeaveItemComponent],
  templateUrl: './leave-list.component.html',
  styleUrl: './leave-list.component.css',
})
export class LeaveListComponent {
  leaveService = inject(LeaveService);
}
