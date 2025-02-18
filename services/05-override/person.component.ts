import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-person',
  imports: [CommonModule],
  template: `
    <pre>
      {{ person | json }}
    </pre>
    
  `,
  styles: ``,
})
export class PersonComponent implements OnInit {
  person: any;

  constructor(public peopleService: PeopleService) {}

  ngOnInit(): void {
    this.person = this.peopleService.getPerson();
  }
}
