import { Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { GameTypeComponent } from './pages/game-type/game-type.component';
import { GamesComponent } from './pages/games/games.component';
import { GameManagementComponent } from './game-management.component';
export const GAME_MANAGEMENT: Routes = [
  {
    path: '', component: GameManagementComponent,
    children: [
      {
        path: '', redirectTo: 'types', pathMatch: 'full'
      },
      {
        path: 'types', component: GameTypeComponent,
      },
      {
        path: 'games', component: GamesComponent,
      },
      {
        path: ':gameId', component: GameComponent,
      }
    ]
  }
];
