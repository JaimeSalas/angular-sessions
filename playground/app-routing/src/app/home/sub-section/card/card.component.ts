import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Dish } from '../../../models/dish';
import { DishService } from '../../../services/dish.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTER_TOKENS } from '../../../app.routes';

@Component({
  standalone: true,
  imports: [MatButtonModule],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() dish!: Dish;

  readonly router = inject(Router);
  readonly activateRoute = inject(ActivatedRoute);
  readonly dishService = inject(DishService);

  selectDish(dish: Dish) {
    // console.log(dish);
    this.dishService.setSelectedDish(dish.id);

    this.router.navigate([`../${ROUTER_TOKENS.SHOP}`, dish.category], {
      relativeTo: this.activateRoute,
    });
  }
}

/*
 /home
 ../shop
*/
