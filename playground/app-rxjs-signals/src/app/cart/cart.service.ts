import { computed, effect, Injectable, signal } from '@angular/core';
import { CartItem } from './cart';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  cartCount = computed(() => {
    return this.cartItems().reduce((acc, curr) => acc + curr.quantity, 0);
  });

  // [0, 1] -> valor `reduce`
  // [[]] -> [] `reduce`
  subTotal = computed(() =>
    this.cartItems().reduce(
      (acc, curr) => acc + curr.product.price * curr.quantity,
      0
    )
  );

  deliveryFree = computed<number>(() => (this.subTotal() < 50 ? 5.99 : 0));

  tax = computed(() => Math.round(this.subTotal() * 10.75) / 100);

  totalPrice = computed(
    () => this.subTotal() + this.deliveryFree() + this.tax()
  );

  eLength = effect(() => {
    console.log('Cart array length: ', this.cartItems().length);
  });

  addToCart(product: Product) {
    this.cartItems.update((items) => [...items, { product, quantity: 1 }]);
  }

  updateQuantity(cartItem: CartItem, quantity: number): void {
    this.cartItems.update((items) =>
      items.map((i) =>
        i.product.id === cartItem.product.id ? { ...i, quantity } : i
      )
    );
  }
}
