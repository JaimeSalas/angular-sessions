import { CommonModule, NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from './product';
import { NormalComponent } from './normal.component';
import { delay, of, tap } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgFor, NormalComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signals-lab';

  quantity = signal(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);
  selectedProduct = signal<Product>({ id: 1, name: 'Foo', price: 12 });
  exPrice = computed(() => this.selectedProduct().price * this.quantity());
  color = computed(() => (this.exPrice() > 50 ? 'green' : 'blue'));
  name = signal('');

  e = effect(() => console.log('In effect, price: ', this.exPrice()));

  values = signal(8);
  values$ = toObservable(this.values).pipe(tap((x) => console.log('value', x))).subscribe();

  constructor() {
    // const o$ = of(1, 2, 3, 4).pipe(delay(this.randomDelay()));
    // // o$.subscribe(console.log);
    // const s = toSignal(o$, { initialValue: 0 });
    // effect(() => console.log(s()));
    // const count = signal(3);
    // computed(() => {
    //   if (count() === 3) {
    //     throw 'Validation error';
    //   }
    // });
    this.values.set(30);
    this.values.set(12);
    this.values.set(67);
  }

  private randomDelay() {
    return Math.floor(Math.random() * 1000) + 500;
  }

  onQuantitySelected($event: number) {
    this.quantity.set($event);
    // this.quantity.set(67);
    // this.quantity.set(42);
  }

  changeName($event: Event) {
    const value = ($event.target as HTMLInputElement).value;
    // this.name.set(value);
    this.name.update(() => value.toLocaleUpperCase());
  }
}
