import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveFormComponent } from '../leave-form/leave-form.component';
import { LeaveService } from '../../leave.service';
import { LeaveForm } from '../../leave.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'absence-management-create-leave',
  standalone: true,
  imports: [CommonModule, RouterModule, LeaveFormComponent],
  templateUrl: './create-leave.component.html',
  styleUrl: './create-leave.component.css',
})
export class CreateLeaveComponent {
  private router = inject(Router);
  private leaveService = inject(LeaveService);

  createLeave(leave: LeaveForm) {
    this.leaveService
      .create(leave)
      .subscribe(() => this.router.navigateByUrl('/leaves'));
  }
}
