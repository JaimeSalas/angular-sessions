import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { PersonService } from './services/person.service';

/*
<div>
  person works!
</div>
<button (click)="doLog()">Log to console</button>
*/

@Component({
  selector: 'app-person',
  template: `
    <pre>
      {{ person | json }}
    </pre>
  `,
  styles: [
  ]
})
export class PersonComponent implements OnInit {
  person: any;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.person = this.personService.getPerson();
  }

  // doLog() {
  //   this.logger.log('Message from component');
  // }

}
