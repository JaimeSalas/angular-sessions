import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  pageTitle = 'Products';
  
  private productService = inject(ProductService);


  products = this.productService.products;
  errorMessage = this.productService.productsError;

  readonly selectedProductId = this.productService.selectedProductId; // Signal

  onSelected(productId: number): void {
    this.productService.productSelected(productId);
  }
}
