import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, of, switchMap, tap } from 'rxjs';
import { Category, Dish } from '../models/dish';
import { DISHES } from '../models/dish-data.mock';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  readonly dishes$ = of(DISHES);
  private readonly selectedCategory = new BehaviorSubject<Category>(
    Category.ALL
  );
  readonly dishesSignal = toSignal(this.dishes$, { initialValue: [] });


  readonly selectedCategory$ = this.selectedCategory.asObservable();

  private readonly selectedDish = new BehaviorSubject<string | undefined>(undefined);

  // private readonly activatedRoute = inject(ActivatedRoute);

  // private readonly selectedDish = this.activatedRoute.queryParamMap.pipe(
  //   map((params) => params.get('productId'))
  // );

  t = this.selectedCategory.subscribe(console.log);

  readonly filteredDishes$ = this.selectedCategory.pipe(
    switchMap((category) =>
      this.dishes$.pipe(
        map((dishes) => {
          if (category === Category.ALL) {
            return dishes;
          }
          return dishes.filter((dish: Dish) => dish.category === category);
        })
      )
    )
  );

  readonly feauredDishes$ = this.dishes$.pipe(
    map((dishes) => [dishes[3], dishes[6], dishes[17]])
  );

  readonly featuredDishesSignal = toSignal(this.feauredDishes$, {
    initialValue: [],
  });

  readonly selectedDish$ = this.selectedDish.pipe(
    switchMap((number) =>
      this.dishes$.pipe(
        map((dishes) => {
          if (number) {
            return dishes.find((dish) => dish.id === number);
          }

          return undefined;
        })
      )
    )
  );

  setSelectedDish(id: string) {
    this.selectedDish.next(id);
  }

  setSelectedCategory(category: Category) {
    this.selectedCategory.next(category);
  }
}
