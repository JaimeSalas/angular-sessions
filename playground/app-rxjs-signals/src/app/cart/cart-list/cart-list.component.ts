import { Component, inject } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { NgFor, NgIf } from '@angular/common';
import { CartItem } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CartItemComponent, NgFor, NgIf],
  templateUrl: './cart-list.component.html',
  styles: ``,
})
export class CartListComponent {
  // Just enough here for the template to compile
  pageTitle = 'Cart';

  private cartService = inject(CartService);

  cartItems = this.cartService.cartItems;
}
