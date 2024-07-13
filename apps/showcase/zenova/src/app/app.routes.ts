import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'test', loadComponent: () => import('./pages/test/test.component') },
  { path: '', loadComponent: () => import('./pages/home/home.component') },
];
