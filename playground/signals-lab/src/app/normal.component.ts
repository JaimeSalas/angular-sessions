import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, map, tap } from 'rxjs';

@Component({
  selector: 'app-normal',
  imports: [CommonModule],
  template: `
    <p>Hello from {{ fullName() }}</p>
    <p>
      {{ fullNameCounter }}
    </p>
    <button (click)="changeName()">Change Name</button>
  `,
  styles: ``,
})
export class NormalComponent {
  // firstName = new BehaviorSubject('Bart');
  firstName = signal('Bart');
  lastName = signal('Simpson');

  fullNameCounter = 0;

  fullName = computed(() => {
    this.fullNameCounter++;
    return `${this.firstName()} ${this.lastName()}`
  }) 

  changeName() {
    this.firstName.set('El');
    this.lastName.set('Barto');

    // setTimeout(() => {}, 0)
  }
}
