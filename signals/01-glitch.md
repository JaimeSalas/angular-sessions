

```ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, map, tap } from 'rxjs';

@Component({
  selector: 'app-normal',
  imports: [CommonModule],
  template: `
    <p>Hello from {{ fullName$ | async }}</p>
    <p>
      {{ fullNameCounter }}
    </p>
    <button (click)="changeName()">Change Name</button>
  `,
  styles: ``,
})
export class NormalComponent {
  firstName = new BehaviorSubject('Bart');
  lastName = new BehaviorSubject('Simpson');

  fullNameCounter = 0;

  fullName$ = combineLatest([this.firstName, this.lastName]).pipe(
    debounceTime(0), // Sync -> Async
    tap(() => {
      this.fullNameCounter++;
    }),
    map(([first, last]) => `${first} ${last}`)
  );

  changeName() {
    this.firstName.next('El');
    this.lastName.next('Barto');

    // setTimeout(() => {}, 0)
  }
}

```