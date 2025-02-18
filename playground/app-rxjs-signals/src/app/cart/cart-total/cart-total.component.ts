import { CurrencyPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-total',
  standalone: true,
  imports: [NgIf, CurrencyPipe],
  templateUrl: './cart-total.component.html',
  styles: ``,
})
export class CartTotalComponent {
  cartItems = [];

  subTotal = 100;
  deliveryFee = 20;
  tax = 10;
  totalPrice = this.subTotal + this.deliveryFee + this.tax;
}
