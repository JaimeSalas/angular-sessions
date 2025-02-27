import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// + Generico -> + detalle
// / ''
// //
// ./
export enum ROUTER_TOKENS {
  HOME = 'home',
  SHOP = 'shop',
  CONCAT = 'concat',
  ABOUT = 'about',
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTER_TOKENS.HOME,
    pathMatch: 'full',
  },
  {
    path: ROUTER_TOKENS.HOME,
    component: HomeComponent,
  },
  {
    path: `${ROUTER_TOKENS.SHOP}/:categoryId`,
    component: ProductsViewComponent,
  },
  {
    path: ROUTER_TOKENS.CONCAT,
    component: ContactComponent
  },
  {
    path: ROUTER_TOKENS.ABOUT,
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
