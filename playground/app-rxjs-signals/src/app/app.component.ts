import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { concatMap, delay, mergeMap, of, range, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  pageTitle = 'Lemoncode Store';
  cartCount = 0;

  ngOnInit(): void {
    // const x = { name: 'foo' };
    // const y = 8
    // const collection = [x, y];
    // const [j, f] = collection;
    

    // range(1, 5)
    //   .pipe(concatMap((i) => of(i)))
    //   .pipe(delay(this.randomDelay()))
    //   .subscribe((item) => console.log('concatMap', item));

    // range(11, 5)
    //   .pipe(mergeMap((i) => of(i)))
    //   .pipe(delay(this.randomDelay()))
    //   .subscribe((item) => console.log('mergeMap', item));

    // range(21, 5)
    //   .pipe(switchMap((i) => of(i)))
    //   .pipe(delay(this.randomDelay()))
    //   .subscribe((item) => console.log('switchMap', item));
  }

  // private randomDelay() {
  //   return Math.floor(Math.random() * 1000) + 500;
  // }
}
