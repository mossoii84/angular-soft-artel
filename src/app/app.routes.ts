import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


export const routes: Routes = [
  {
    path: '',  // Корневой маршрут
    component: HomePageComponent,
    children: [
      {
        path: 'work',
        loadComponent: () =>
          import('../app/tasks-block/task.component').then((c) => c.TaskComponent),
      },
      {
        path: 'page-empty',
        loadComponent: () =>
          import('../app/headers/header-mobile/header-mobile.component').then((c) => c.HeaderMobileComponent),
      },
    ],
  },

];
