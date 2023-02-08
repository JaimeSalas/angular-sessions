import { Component, OnInit } from '@angular/core';
import { Observable, of, from, interval } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

// pipe(map(fn))
function myMap(fn: Function) {
  return (input: Observable<any>) =>
    new Observable((observer) => {
      // observer.next(input)
      return input.subscribe({
        next: value => observer.next(fn(value)),
        error: (err) => observer.error(err),
        complete: () => observer.complete()
      })
    })
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // of(1, 2, 3)
    //   .pipe(map((i) => i * 2))
    //   .subscribe(console.log);
    // of(2, 4, 6).pipe(take(2)).subscribe(console.log);
    // of(2, 4, 6)
    //   .pipe(
    //     tap(console.log),
    //     map(i => i * 2),
    //     take(2),
    //     tap(console.log),
    //     map(i => i - 3)
    //   )
    // Streams
    from([5, 5, 10, 5]).pipe(
      tap(console.log),
      myMap((i: number) => i * 2),
      map((i) => i as unknown as number - 10),
      map((i) => {
        if (i === 0) {
          throw new Error('zero detected');
        }
        return i;
      }),
      take(3)
    ).subscribe({
      next: i => console.log(`item ${i}`),
      error: err => console.log(`error occured ${err}`),
      complete: () => console.log('complete')
    });
  }
  title = 'rxjs-playground';
}
