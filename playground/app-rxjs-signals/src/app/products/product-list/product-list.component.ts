import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../product.service';
import { catchError, EMPTY, tap } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, ProductDetailComponent, AsyncPipe],
  templateUrl: './product-list.component.html',
  styles: ``,
})
export class ProductListComponent {
  pageTitle = 'Products';
  errorMessage = '';

  private productService = inject(ProductService);
  readonly products$ = this.productService.products$.pipe(
    tap(() => console.log('In component')),
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  // selectedProductId: number = 0;
  readonly selectedProductId$ = this.productService.productSelected$;

  onSelected(productId: number): void {
    // this.selectedProductId = productId;
    this.productService.productSelected(productId);
  }
}
