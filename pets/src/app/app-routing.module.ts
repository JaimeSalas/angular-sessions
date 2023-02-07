import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomeComponent } from './welcome.component';

import { Routes, RouterModule } from '@angular/router';
import { PetComponent } from './pets/pet.component';
import { PetsToysComponent } from './pets/pets-toys.component';
import { PetsComponent } from './pets/pets.component';

// Root, Feature Modules, Shared Module, Core Module -> Localizaion, logger....

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'pets', component: PetsComponent },
  { path: 'pets/:id', component: PetComponent },
  { path: 'pets/:id/toys', component: PetsToysComponent },
  { path: '**', component: PageNotFoundComponent },
];

// export const array1 = ['route1', 'route2'];
// export const array2 = ['route3', 'route4'];
// const total = [...array1, ...array2]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
