import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { LeaveForm, LeaveItem } from '../../leave.model';

@Component({
  selector: 'absence-management-leave-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  templateUrl: './leave-form.component.html',
  styleUrl: './leave-form.component.css',
})
export class LeaveFormComponent implements OnInit {
  @Input({ required: true }) kind!: 'create' | 'edit';
  @Input() leave: LeaveItem | null = null;
  @Output() leaveSubmitted = new EventEmitter<LeaveForm>();

  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    reason: ['', [Validators.required]],
    leaveDate: ['', Validators.required],
  });
  formTitle?: string;

  ngOnInit() {
    if (this.leave) this.form.patchValue(this.leave);
    this.formTitle = this.kind === 'create' ? 'New Leave' : 'Edit Leave';
  }

  submit() {
    const form = this.form.getRawValue();
    this.leaveSubmitted.emit(form);
  }
}
