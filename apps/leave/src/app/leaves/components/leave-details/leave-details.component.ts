import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveService } from '../../leave.service';
import { LeaveItem } from '../../leave.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'absence-management-leave-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-details.component.html',
  styleUrl: './leave-details.component.css',
})
export class LeaveDetailsComponent {
  leaveService = inject(LeaveService);
  leave$?: Observable<LeaveItem>;

  @Input() set id(value: string) {
    this.leave$ = this.leaveService.getLeaveById(+value);
  }
}
