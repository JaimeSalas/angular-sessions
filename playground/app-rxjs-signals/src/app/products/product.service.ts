import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Product, Result } from './product';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  switchMap,
  tap,
  throwError,
  shareReplay,
  Subject,
  filter,
  combineLatest,
} from 'rxjs';
import { HttpErrorService } from '../utilities/http-error.service';
import { ReviewService } from '../reviews/review.service';
import { Review } from '../reviews/review';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';

  private http = inject(HttpClient);
  private errorService = inject(HttpErrorService);
  private reviewService = inject(ReviewService);

  // private productSelectedSubject = new BehaviorSubject<number | undefined>(
  //   undefined
  // );

  // readonly productSelected$ = this.productSelectedSubject.asObservable();
  selectedProductId = signal<number | undefined>(undefined);

  readonly productsResult$ = this.http.get<Product[]>(this.productsUrl).pipe(
    map((p) => ({ data: p } as Result<Product[]>)),
    tap((p) => console.log(JSON.stringify(p))),
    shareReplay(1),
    // catchError((err) => this.handleError(err))
    catchError((err) =>
      of({
        data: [],
        error: this.errorService.formatError(err),
      } as Result<Product[]>)
    )
  );

  productsResult = toSignal(this.productsResult$, {
    initialValue: { data: [] } as Result<Product[]>,
  });

  products = computed(() => this.productsResult().data);

  productsError = computed(() => this.productsResult().error);

  // readonly product$ = this.productSelected$.pipe(
  // readonly product$ = toObservable(this.selectedProductId).pipe(
  readonly productResult$ = toObservable(this.selectedProductId).pipe(
    tap((t) => console.log(t)),
    filter(Boolean), // null, undefined, 0 +
    switchMap((id) => {
      const productUrl = `${this.productsUrl}/${id}`;

      return this.http.get<Product>(productUrl).pipe(
        switchMap((p) => this.getProductWithReviews(p)),
        map((p) => ({ data: p } as Result<Product>)),
        tap((x) => x),
        // catchError((err) => this.handleError(err))
        catchError((err) =>
          of({
            data: undefined,
            error: this.errorService.formatError(err),
          } as Result<Product>)
        )
      );
    }),
    tap((t) => t)
  );

  private productResult = toSignal(this.productResult$);

  product = computed(() => this.productResult()?.data);

  productError = computed(() => this.productResult()?.error);

  private getProductWithReviews(product: Product): Observable<Product> {
    if (product.hasReviews) {
      return this.http
        .get<Review[]>(this.reviewService.getReviewUrl(product.id))
        .pipe(
          map(
            (reviews) =>
              ({
                ...product,
                reviews,
              } as Product)
          )
        );
    }

    return of(product);
  }

  productSelected(selectedProductId: number): void {
    // this.productSelectedSubject.next(selectedProductId);
    this.selectedProductId.set(selectedProductId);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    const formatted = this.errorService.formatError(err);
    return throwError(() => formatted);
  }
}
