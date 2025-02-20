import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import {
  Component,
  inject,
} from '@angular/core';
import { Product } from '../product';
import { catchError, EMPTY } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe, AsyncPipe],
  templateUrl: './product-detail.component.html',
  styles: ``,
})
export class ProductDetailComponent {
  errorMessage = '';
  pageTitle = 'Product Detail';

  private productService = inject(ProductService);
  product$ = this.productService.product$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  addToCart(product: Product) {}
}
