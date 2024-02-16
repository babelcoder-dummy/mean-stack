import { Route } from '@angular/router';
import { LeaveListComponent } from './leaves/components/leave-list/leave-list.component';
import { LeaveDetailsComponent } from './leaves/components/leave-details/leave-details.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
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
    ],
  },
];
