import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './product';
import {
  catchError,
  map,
  Observable,
  of,
  switchMap,
  tap,
  throwError,
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

  readonly products$ = this.http.get<Product[]>(this.productsUrl).pipe(
    tap(() => console.log('In http.get pipeline')),
    catchError((err) => this.handleError(err)),
  );

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.productsUrl).pipe(
  //     tap(() => console.log('In http.get pipeline')),
  //     catchError((err) => this.handleError(err))
  //   );
  // }

  getProductWithReviews(product: Product): Observable<Product> {
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

  // [[], []] -> flatMap -> []
  // marble diagrams
  getProduct(id: number): Observable<Product> {
    const productUrl = `${this.productsUrl}/${id}`;

    return this.http.get<Product>(productUrl).pipe(
      tap(() => console.log('In http.get pipeline')),
      switchMap((p) => this.getProductWithReviews(p)),
      tap((x) => x),
      catchError((err) => this.handleError(err))
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    const formatted = this.errorService.formatError(err);
    return throwError(() => formatted);
  }
}
