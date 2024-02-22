import { Route } from '@angular/router';
import { LeaveListComponent } from './leaves/components/leave-list/leave-list.component';
import { LeaveDetailsComponent } from './leaves/components/leave-details/leave-details.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { EditLeaveComponent } from './leaves/components/edit-leave/edit-leave.component';
import { CreateLeaveComponent } from './leaves/components/create-leave/create-leave.component';

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
            path: 'new',
            component: CreateLeaveComponent,
          },
          {
            path: ':id',
            component: LeaveDetailsComponent,
          },
          {
            path: ':id/edit',
            component: EditLeaveComponent,
          },
        ],
      },
    ],
  },
];
