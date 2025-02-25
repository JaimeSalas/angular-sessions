import { Component, inject } from '@angular/core';
import { DishService } from '../../services/dish.service';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    MatButtonModule,
  ],
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
  private readonly dishService = inject(DishService);
  selectedDish$ = this.dishService.selectedDish$;
}
