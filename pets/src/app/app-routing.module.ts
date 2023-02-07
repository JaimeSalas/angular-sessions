import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomeComponent } from './welcome.component';

import { Routes, RouterModule } from '@angular/router';
import { PetComponent } from './pets/pet.component';
import { PetsToysComponent } from './pets/pets-toys.component';
import { PetsComponent } from './pets/pets.component';
import { PetEditComponent } from './pets/pet-edit.component';
import { PetInfoComponent } from './pets/pet-info.component';
import { PetInfoToysComponent } from './pets/pet-info-toys.component';

// Root, Feature Modules, Shared Module, Core Module -> Localizaion, logger....

// const routes: Routes = [
//   { path: 'welcome', component: WelcomeComponent },
//   { path: '', redirectTo: 'welcome', pathMatch: 'full' },
//   { path: 'pets', component: PetsComponent },
//   { path: 'pets/:id', component: PetComponent },
//   { path: 'pets/:id/toys', component: PetsToysComponent },
//   {
//     path: 'pets/:id/edit',
//     component: PetEditComponent,
//     children: [
//       { path: '', redirectTo: 'info', pathMatch: 'full' },
//       { path: 'info', component: PetInfoComponent },
//       { path: 'toys', component: PetInfoToysComponent },
//     ],
//   },
//   { path: '**', component: PageNotFoundComponent },
// ];
const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'pets',
    children: [
      { path: '', component: PetsComponent },
      { path: ':id', component: PetComponent },
      { path: ':id/toys', component: PetsToysComponent },
      {
        path: ':id/edit',
        component: PetEditComponent,
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: PetInfoComponent },
          { path: 'toys', component: PetInfoToysComponent },
        ],
      },
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];

// export const array1 = ['route1', 'route2'];
// export const array2 = ['route3', 'route4'];
// const total = [...array1, ...array2]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
