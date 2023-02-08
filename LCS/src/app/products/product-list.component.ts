import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';

import {
  Subscription,
  Observable,
  catchError,
  of,
  EMPTY,
  map,
  Subject,
  combineLatest,
  BehaviorSubject,
} from 'rxjs';
import { ProductCategoryService } from '../product-categories/product-category.service';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';
  // categories: any;
  // selectedCategoryId = 1;

  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  // products$ = this.productService.productsWithCategory$.pipe(
  //   catchError((err) => {
  //     this.errorMessage = err;
  //     return EMPTY;
  //   })
  // );
  products$ = combineLatest([
    this.productService.productsWithCategory$,
    this.categorySelectedAction$,
  ]).pipe(
    map(([products, selectedCategoryId]) =>
      products.filter((p) =>
        selectedCategoryId ? selectedCategoryId === p.categoryId : true
      )
    ),
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  categories$ = this.productCategoryService.productCategories$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  // productsSimpleFilter$ = this.productService.productsWithCategory$.pipe(
  //   map((products) =>
  //     products.filter((p) =>
  //       this.selectedCategoryId
  //         ? this.selectedCategoryId === p.categoryId
  //         : true
  //     )
  //   )
  // );

  constructor(
    private productService: ProductService,
    private productCategoryService: ProductCategoryService
  ) {}

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    // this.selectedCategoryId = +categoryId;
    this.categorySelectedSubject.next(+categoryId);
  }
}
