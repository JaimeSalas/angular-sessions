import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { CriteriaComponent } from 'src/app/shared/criteria/criteria.component';
import { GameModel } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  showImage!: boolean;

  imageWidth = 50;
  imageMargin = 2;

  @ViewChild(CriteriaComponent) filterComponent!: CriteriaComponent;
  parentListFilter = '';

  filteredGames!: GameModel[];
  games!: GameModel[];
  includeDetail = true;

  constructor(private gameService: GameService) {
     
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games: GameModel[]) => {
      this.games = games;
      this.performFilter(this.parentListFilter);
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy?: string): void {
    if (filterBy) {
      this.filteredGames = this.games.filter(
        (g: GameModel) =>
          g.name.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !==
          -1
      );
    } else {
      this.filteredGames = this.games;
    }
  }

  onValueChange(value: string): void {
    this.performFilter(value);
  }
}
