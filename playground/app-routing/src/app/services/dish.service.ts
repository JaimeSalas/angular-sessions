import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of, switchMap, tap } from 'rxjs';
import { Category, Dish } from '../models/dish';
import { DISHES } from '../models/dish-data.mock';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private readonly selectedCategory = new BehaviorSubject<Category>(Category.ALL);
  private readonly selectedDish = new BehaviorSubject<number | undefined>(4);

  readonly dishes$ = of(DISHES);
  readonly selectedCategory$ = this.selectedCategory.asObservable();

  readonly filteredDishes$ = this.selectedCategory.pipe(
    switchMap((category) => this.dishes$.pipe(
      map((dishes) => {
        if(category === Category.ALL) {
          return dishes;
        }

        return dishes.filter((dish: Dish) => dish.category === category);
      }),
      tap((dishes) => this.setSelectedDish(+dishes[0].id))
    ))
  )

  readonly selectedDish$ = this.selectedDish.pipe(switchMap((number) =>
    this.dishes$.pipe(
      map((dishes) => {
        if(number){
          return dishes.find((dish) => +dish.id === number);
        }

        return undefined;
      })
    )));

  setSelectedDish(id: number) {
    this.selectedDish.next(id);
  }

  setSelectedCategory(category: Category) {
    this.selectedCategory.next(category);
  }
}
