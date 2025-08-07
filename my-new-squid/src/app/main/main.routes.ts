import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const MAIN_ROUTES: Routes = [
  {
    component: MainComponent,
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'game',
      },
      {
        path: 'game',
        loadChildren:
          () => import('./features/game-management/game-management.module').then(m => m.GameManagementModule)
      },
    ]
  }
];
