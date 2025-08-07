import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';
import { GAME_MANAGEMENT } from './game-management.routes';
import { GameComponent } from './pages/game/game.component';
import { GameTypeComponent } from './pages/game-type/game-type.component';
import { GamesComponent } from './pages/games/games.component';


@NgModule({
  declarations: [],
  imports: [
    GameComponent, GameTypeComponent, GamesComponent,
    CommonModule
  ],
  providers: [provideRouter(GAME_MANAGEMENT)]
})
export class GameManagementModule { }
