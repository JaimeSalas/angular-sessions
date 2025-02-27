import { Component } from '@angular/core';
import { Category } from '../models/dish';
import { DishService } from '../services/dish.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTER_TOKENS } from '../app.routes';

@Component({
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly ROUTER_TOKENS = ROUTER_TOKENS
  readonly Category = Category;
  constructor(
    private readonly dishService: DishService
  ){}

  // 
  // changeCategory(category: Category){
  //   this.dishService.setSelectedCategory(category);
  // }

}
