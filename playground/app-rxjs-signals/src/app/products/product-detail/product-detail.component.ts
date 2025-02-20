import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import {
  Component,
  inject,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../product';
import { catchError, EMPTY, Subscription } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styles: ``,
})
export class ProductDetailComponent implements OnChanges, OnDestroy {
  // Just enough here for the template to compile
  @Input() productId: number = 0;
  errorMessage = '';
  sub!: Subscription;

  // Product to display
  product: Product | null = null;

  // Set the page title
  pageTitle = this.product
    ? `Product Detail for: ${this.product.productName}`
    : 'Product Detail';

  private productService = inject(ProductService);

  ngOnChanges(changes: SimpleChanges) {
    const id = changes['productId'].currentValue;
    if (id > 0) {
      this.sub = this.productService
        .getProduct(id)
        .pipe(
          catchError((err) => {
            this.errorMessage = err;
            return EMPTY;
          })
        )
        .subscribe((p) => (this.product = p));
    }
  }

  addToCart(product: Product) {}

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
