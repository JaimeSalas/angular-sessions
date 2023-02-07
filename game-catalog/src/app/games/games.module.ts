import { NgModule } from '@angular/core';
import { GameService } from './game.service';
import { SharedModule } from '../shared/shared.module';
import { GameListComponent } from './game-list/game-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GameListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: GameListComponent }]),
  ],
  providers: [GameService],
})
export class GamesModule {}
