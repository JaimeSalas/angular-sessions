import { Component, inject } from '@angular/core';
import { DishService } from '../../services/dish.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  private readonly dishService = inject(DishService);
  selectedCategory$ = this.dishService.selectedCategory$;
  selectedDish$ = this.dishService.selectedDish$;
}
