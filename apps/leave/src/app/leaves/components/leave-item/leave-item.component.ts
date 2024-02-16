import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveItem } from '../../leave.model';
import { RouterModule } from '@angular/router';
import { CardComponent } from '@absence-management/ui';

@Component({
  selector: 'absence-management-leave-item',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  templateUrl: './leave-item.component.html',
  styleUrl: './leave-item.component.css',
})
export class LeaveItemComponent {
  @Input({ required: true }) leave!: LeaveItem;
  @Output() remove = new EventEmitter<LeaveItem['id']>();

  removeItem(event: MouseEvent) {
    event.preventDefault();
    this.remove.emit(this.leave.id);
  }
}
