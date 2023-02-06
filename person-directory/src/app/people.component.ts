import { Component, OnInit } from '@angular/core';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-people',
  template: `
    <h3>People</h3>
    <ul>
      <li *ngFor="let person of people">
       {{ person.name }}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class PeopleComponent implements OnInit {
  people: any;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.people = this.peopleService.getPeople();
  }

}
