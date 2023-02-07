import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetsService } from './pets.service';

@Component({
  selector: 'app-pets',
  template: `
    <ul *ngFor="let pet of pets">
      <li>
        <a [routerLink]="['/pets', pet.name]">{{ pet.name }}</a>
        <button style="float: right;" (click)="editPet(pet.name)">
          Edit
        </button>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class PetsComponent implements OnInit {
  pets: any[] = [];

  constructor(private petsService: PetsService, private router: Router) { }

  editPet(petName: string) {
    this.router.navigate(['/pets', petName, 'edit']);
  }

  ngOnInit(): void {
    this.pets = this.petsService.fetchPets();
  }

}
