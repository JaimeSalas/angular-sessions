import { Component } from '@angular/core';
import { CartListComponent } from '../cart-list/cart-list.component';
import { CartTotalComponent } from '../cart-total/cart-total.component';

@Component({
  selector: 'app-cart-shell',
  standalone: true,
  imports: [CartListComponent, CartTotalComponent],
  template: `
    <div class="row">
      <app-cart-list />
    </div>
    <div class="row">
      <div class="offset-md-6 col-md-6">
        <app-cart-total />
      </div>
    </div>
  `,
  styles: ``,
})
export class CartShellComponent {}
