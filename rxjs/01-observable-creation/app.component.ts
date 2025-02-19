import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { of, from, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  pageTitle = 'Lemoncode Store';
  cartCount = 0;

  sub!: Subscription;
  subArray!: Subscription;
  subFrom!: Subscription;
  subEvent!: Subscription;
  subKey!: Subscription;

  ngOnInit(): void {
    //
    // What ever...
    // Obserable -> subscribe({ next: () => {}, error: () => {}, complete: () => {} })
    // Observer -> { next: () => { .... return }  }

    // of(2, 4, 6, 8).subscribe(console.log); // Free point style p.
    this.sub = of(2, 4, 6, 8).subscribe((item) =>
      console.log(`Value from of: ${item}`)
    );

    this.subArray = of([2, 4, 6, 8]).subscribe((item) =>
      console.log(`Value from of array: ${item}`)
    );

    this.subFrom = from([20, 15, 10, 5]).subscribe({
      next(value) {
        console.log(`Value from "from": ${value}`, this);
      },
      complete() {
        console.log('completed!!');
      },
      error(err) {},
    });

    this.subEvent = fromEvent(document, 'click').subscribe({
      next: (ev) => console.log('Click ev', ev.target, this),
      error: (err) => console.log('Error', err),
      complete: () => console.log('NO more events'),
    });

    const keys: string[] = [];
    this.subKey = fromEvent(document, 'keydown').subscribe((ev) => {
      const key = (ev as KeyboardEvent).key;
      keys.push(key);
      console.log(`Keys ${keys}`);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subArray.unsubscribe();
    this.subFrom.unsubscribe();
    this.subEvent.unsubscribe();
    this.subKey.unsubscribe();
  }
}
