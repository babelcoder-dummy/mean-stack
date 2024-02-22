import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LeaveFormComponent } from '../leave-form/leave-form.component';
import { LeaveService } from '../../leave.service';
import { Observable } from 'rxjs';
import { LeaveForm, LeaveItem } from '../../leave.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'absence-management-edit-leave',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    LeaveFormComponent,
  ],
  templateUrl: './edit-leave.component.html',
  styleUrl: './edit-leave.component.css',
})
export class EditLeaveComponent {
  private router = inject(Router);
  private leaveService = inject(LeaveService);
  private _id: string | null = null;
  leave$: Observable<LeaveItem> | null = null;

  @Input() set id(value: string) {
    this._id = value;
    this.leave$ = this.leaveService.getLeaveById(+value);
  }

  editLeave(leave: LeaveForm) {
    if (!this._id) return;

    this.leaveService
      .update(this._id, leave)
      .subscribe(() => this.router.navigateByUrl('/leaves'));
  }
}
