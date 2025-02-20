import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './product';
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

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';

  private http = inject(HttpClient);
  private errorService = inject(HttpErrorService);
  private reviewService = inject(ReviewService);

  private productSelectedSubject = new BehaviorSubject<number | undefined>(
    undefined
  );

  readonly productSelected$ = this.productSelectedSubject.asObservable();

  readonly products$ = this.http.get<Product[]>(this.productsUrl).pipe(
    tap((p) => console.log(JSON.stringify(p))),
    shareReplay(1),
    catchError((err) => this.handleError(err))
  );

  product$ = combineLatest([this.productSelected$, this.products$]).pipe(
    map(([selectedId, products]) => products.find((p) => p.id === selectedId)),
    filter(Boolean),
    switchMap((p) => this.getProductWithReviews(p)),
    catchError((err) => this.handleError(err))
  );

  readonly product1$ = this.productSelected$.pipe(
    tap((t) => console.log(t)),
    filter(Boolean), // null, undefined, 0 +
    switchMap((id) => {
      const productUrl = `${this.productsUrl}/${id}`;

      return this.http.get<Product>(productUrl).pipe(
        switchMap((p) => this.getProductWithReviews(p)),
        tap((x) => x),
        catchError((err) => this.handleError(err))
      );
    }),
    tap((t) => t)
  );

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
    this.productSelectedSubject.next(selectedProductId);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    const formatted = this.errorService.formatError(err);
    return throwError(() => formatted);
  }
}
