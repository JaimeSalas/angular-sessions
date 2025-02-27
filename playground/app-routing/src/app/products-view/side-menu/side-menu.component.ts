import { Component, inject } from '@angular/core';
import { DishService } from '../../services/dish.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
  ],
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  private readonly dishService = inject(DishService);
  dishes$ = this.dishService.filteredDishes$;
  selectedDish$ = this.dishService.selectedDish$;

  selectDish(id: string){
    this.dishService.setSelectedDish(id);
  }
}
