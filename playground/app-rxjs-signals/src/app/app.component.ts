import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { concatMap, delay, mergeMap, of, range, switchMap } from 'rxjs';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  pageTitle = 'Lemoncode Store';
  cartService = inject(CartService);
  cartCount = this.cartService.cartCount; // prop [Signal]

  ngOnInit(): void {
  }
}
