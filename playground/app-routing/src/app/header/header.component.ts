import { Component } from '@angular/core';
import { Category } from '../models/dish';
import { DishService } from '../services/dish.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
// import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    // RouterLink
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly Category = Category;
  constructor(
    private readonly dishService: DishService
  ){}

  changeCategory(category: Category){
    this.dishService.setSelectedCategory(category);
  }

}
