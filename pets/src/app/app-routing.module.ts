import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomeComponent } from './welcome.component';
import { PetsComponent } from './pets.component';
import { Routes, RouterModule } from '@angular/router';

// Root, Feature Modules, Shared Module, Core Module -> Localizaion, logger....

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'pets', component: PetsComponent },
  { path: '**', component: PageNotFoundComponent },
];

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
