import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeaveListComponent } from './leaves/components/leave-list/leave-list.component';

@Component({
  standalone: true,
  imports: [LeaveListComponent, RouterModule],
  selector: 'absence-management-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'leave';
}
