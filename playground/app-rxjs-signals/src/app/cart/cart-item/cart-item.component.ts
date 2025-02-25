import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe, FormsModule, NgFor, NgIf],
  templateUrl: './cart-item.component.html',
  styles: ``,
})
export class CartItemComponent {
  @Input({ required: true }) cartItem!: CartItem;

  private cartService = inject(CartService);

  // Quantity available (hard-coded to 8)
  // Mapped to an array from 1-8
  qtyArr = [...Array(8).keys()].map((x) => x + 1);

  // Calculate the extended price
  exPrice = this.cartItem?.quantity * this.cartItem?.product.price;

  onQuantitySelected(quantity: number): void {
    this.cartService.updateQuantity(this.cartItem, Number(quantity));
  }

  removeFromCart(): void {}
}
