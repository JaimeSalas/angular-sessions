import { Component, inject, Input } from '@angular/core';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';
import { DishService } from '../services/dish.service';
import { Category } from '../models/dish';

@Component({
  standalone: true,
  imports: [DetailViewComponent, SideMenuComponent, BreadcrumbsComponent],
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css'],
})
export class ProductsViewComponent {
  private readonly dishService = inject(DishService);

  @Input() set categoryId(val: string) {
    this.dishService.setSelectedCategory(val as Category);
  }
}
