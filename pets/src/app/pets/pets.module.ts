import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';
import { PetComponent } from './pet.component';
import { PetToysComponent } from './pet-toys.component';
import { PetsToysComponent } from './pets-toys.component';
import { RouterModule } from '@angular/router';
import { PetEditComponent } from './pet-edit.component';
import { PetInfoToysComponent } from './pet-info-toys.component';
import { PetInfoComponent } from './pet-info.component';

@NgModule({
  declarations: [
    PetsComponent,
    PetComponent,
    PetToysComponent,
    PetsToysComponent,
    PetEditComponent,
    PetInfoToysComponent,
    PetInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: []
})
export class PetsModule { }
