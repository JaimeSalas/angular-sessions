import { computed, inject, Injectable, signal } from '@angular/core';
import { DishService } from './dish.service';
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly cartItems = signal<{ [key: string]: { quantity: number } }>({
    '3': { quantity: 1 },
    '10': { quantity: 1 },
  });
  readonly dishService = inject(DishService);

  readonly cartItemsPlusQuantity = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const dish = this.dishService
        .dishesSignal()
        .find((dish) => dish.id === key);
      if (dish) {
        acc.push({
          ...dish,
          quantity: this.cartItems()[key].quantity,
        });
      }
      return acc;
    }, [] as Dish[]);
  });

  readonly featuredDishesPlusQuantity = computed(() => {
    return this.dishService.featuredDishesSignal().map((dish) => ({
      ...dish,
      quantity: this.cartItems()[dish.id]?.quantity || 0,
    }));
  });

  readonly subtotal = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const dish = this.dishService
        .dishesSignal()
        .find((dish) => dish.id === key);

      if (dish) {
        return acc + (this.cartItems()[key].quantity || 0) * dish.price;
      }
      return acc;
    }, 0);
  });

  readonly salesTax = computed(() => this.subtotal() * 0.0625);

  readonly total = computed(() => this.subtotal() + this.salesTax() + 10);

  readonly totalItems = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const dish = this.dishService
        .dishesSignal()
        .find((dish) => dish.id === key);

      if (dish) {
        return acc + this.cartItems()[key].quantity || 0;
      }

      return acc;
    }, 0);
  });

  addCartItem(dish?: Dish) {
    if (dish) {
      this.cartItems.set({
        ...this.cartItems(),
        [dish.id]: {
          quantity: this.cartItems()[dish.id]
            ? this.cartItems()[dish.id].quantity + 1
            : 1,
        },
      });
    }
  }

  decrementCartItem(dish?: Dish) {
    if (dish) {
      const updatedCartItems = {
        ...this.cartItems(),
        [dish.id]: {
          quantity: this.cartItems()[dish.id]
            ? this.cartItems()[dish.id].quantity - 1
            : 0,
        },
      };

      if (updatedCartItems[dish.id].quantity <= 0) {
        delete updatedCartItems[dish.id];
      }

      this.cartItems.set(updatedCartItems);
    }
  }
}
