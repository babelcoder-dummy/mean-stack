import { Route } from '@angular/router';
import { LeaveListComponent } from './leaves/components/leave-list/leave-list.component';
import { LeaveDetailsComponent } from './leaves/components/leave-details/leave-details.component';

export const appRoutes: Route[] = [
  {
    path: 'leaves',
    children: [
      {
        path: '',
        component: LeaveListComponent,
      },
      {
        path: ':id',
        component: LeaveDetailsComponent,
      },
    ],
  },
];
