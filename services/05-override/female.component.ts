import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { CommonModule } from '@angular/common';
import { FemaleService } from './female.service';

@Component({
  selector: 'app-female',
  imports: [CommonModule],
  template: `
    <h3>Female</h3>
    <pre>
      {{ person | json }}
    </pre
    >
  `,
  styles: ``,
  providers: [{ provide: PeopleService, useClass: FemaleService }],
})
export class FemaleComponent implements OnInit {
  person: any;

  constructor(public peopleService: PeopleService) {}

  ngOnInit(): void {
    this.person = this.peopleService.getPerson();
  }
}
