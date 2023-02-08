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
import { GameModel } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit, AfterViewInit {
  listFilter!: string;
  // private _listFilter!: string;

  // get listFilter(): string {
  //   return this._listFilter;
  // }

  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   this.performFilter(value);
  // }

  showImage!: boolean;

  imageWidth = 50;
  imageMargin = 2;

  @ViewChild('filterElement', { static: false })
  filterElementRef!: ElementRef<HTMLInputElement>;
  // @ViewChildren('filterElement, nameElement')
  // inputElementRefs!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChild(NgModel)
  filterInput!: NgModel;

  filteredGames!: GameModel[];
  games!: GameModel[];

  // get / set

  constructor(private gameService: GameService) {
     // function() {} -> void 0 -> undefined
    // console.log();
  }

  ngAfterViewInit(): void {
    // console.log(this.filterElementRef);
    // this.filterElementRef.nativeElement
    this.filterElementRef.nativeElement.focus();
    this.filterInput.valueChanges?.subscribe((val) => {
      // console.log(val);
      this.performFilter(val);
    })
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games: GameModel[]) => {
      this.games = games;
      this.performFilter(this.listFilter);
    });
  }

  // onFilterChange(filter: string) {
  //   this.listFilter = filter;
  //   this.performFilter(this.listFilter);
  // }

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
}
