import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-list-alt/product-detail.component';
import { ProductListAltComponent } from './product-list-alt/product-list-alt.component';
import { ProductShellComponent } from './product-list-alt/product-shell.component';
import { ProductListComponent } from './product-list.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductShellComponent,
    ProductListAltComponent,
    ProductDetailComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: ':altarnate',
        component: ProductShellComponent
      }
    ])
  ]
})
export class ProductModule { }
