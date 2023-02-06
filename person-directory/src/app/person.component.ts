import { Component, OnInit, Optional, SkipSelf, Host } from '@angular/core';
import { loggerFactory, LoggerService } from './services/logger.service';
import { PersonService } from './services/person.service';

/*
<div>
  person works!
</div>
<button (click)="doLog()">Log to console</button>
*/

/*
<pre>
  {{ person | json }}
</pre>
*/

@Component({
  selector: 'app-person',
  template: `
  <div style="border:1px">
    <p *ngIf="logger === null">No logger</p>
    <button (click)="doLog()">write log</button>
  </div>
  `,
  styles: [
  ],
  providers: [
    // {
    //   provide: LoggerService,
    //   useFactory: loggerFactory('PersonComponent')
    // }
  ]
})
export class PersonComponent implements OnInit {
  person: any;

  // constructor(private personService: PersonService) { }
  constructor(@Host() @Optional() public logger: LoggerService) { }

  ngOnInit(): void {
    // this.person = this.personService.getPerson();
  }

  doLog() {
    if (this.logger) {
      this.logger.log('Message from person component');
    } else {
      console.log('no logger available');
    }
  }

}
