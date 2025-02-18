import { Component } from '@angular/core';
import { PersonService } from './person.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-edit',
  imports: [CommonModule],
  template: `
    <pre>
      {{ personService.getPerson() | json }}
    </pre
    >
    <br />
    <input type="text" #personName />
    <button (click)="setPerson(personName.value)">save</button>
  `,
  styles: ``,
})
export class PersonEditComponent {
  constructor(public personService: PersonService) {}

  setPerson(value: string) {
    this.personService.setPeronName(value);
  }
}
