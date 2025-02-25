import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  errorMessage = this.productService.productError;
  pageTitle = computed(() =>
    this.product()
      ? `Product Detail for: ${this.product()?.productName}`
      : 'Product Detail'
  );

  // product$ = this.productService.product$.pipe(
  //   catchError((err) => {
  //     this.errorMessage = err;
  //     return EMPTY;
  //   })
  // );
  product = this.productService.product;

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
