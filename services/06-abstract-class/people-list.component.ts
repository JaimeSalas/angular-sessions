import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people-list',
  imports: [NgFor],
  template: `
    <h3>People</h3>
    <ul>
      <li *ngFor="let person of people">
        {{ person.name }}
      </li>
    </ul>
  `,
  styles: ``,
})
export class PeopleListComponent implements OnInit {
  people: any;

  constructor(public peopleService: PeopleService) {}

  ngOnInit(): void {
    this.people = this.peopleService.getPeople();
  }
}

// type -> Omit, Pick
// interface vs type
