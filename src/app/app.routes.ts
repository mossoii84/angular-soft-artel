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
          import('../app/left-block/left-block.component').then((c) => c.LeftBlockComponent),
      },
    ],
  },


  // {path:'', component:HomePageComponent},

  // {
  //   path: 'home',
  //   loadChildren: () => import('./left-block-menu/left-block-menu.routes').then((r) => r.left_block_menu),
  // },


];
