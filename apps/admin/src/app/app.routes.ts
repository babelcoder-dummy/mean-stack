import { Route } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ArticleListComponent } from './articles/components/article-list/article-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'articles',
        pathMatch: 'full',
      },
      {
        path: 'articles',
        component: ArticleListComponent,
      },
    ],
  },
];
