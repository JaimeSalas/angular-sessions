import { Component } from '@angular/core';
import { PeopleListComponent } from './people-list.component';
// import { PersonComponent } from './person.component';
// import { FemaleComponent } from './female.component';

@Component({
  selector: 'app-root',
  imports: [PeopleListComponent],
  template: `
    <h1>Services</h1>

    <app-people-list />
  `,
})
export class AppComponent {}
