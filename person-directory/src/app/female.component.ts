import { Component, OnInit } from '@angular/core';
import { FemaleService } from './services/female.service';
import { PersonService } from './services/person.service';

// SPA - server statics - Angular
// Server API - local port "CORS"
// SPA + Server API - 'full qualified'

// InMemoryWebAPI - Mock / Configurar x Modulo
// Interceptors 

@Component({
  selector: 'app-female',
  template: `
    <h3>
      female
    </h3>
    <pre>{{ person | json }}</pre>

    <app-person></app-person>
  `,
  styles: [],
  providers: [
    { provide: PersonService, useClass: FemaleService }
  ]
})
export class FemaleComponent implements OnInit {
  person: any;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.person = this.personService.getPerson();
  }

}
