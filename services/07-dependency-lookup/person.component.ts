import { Component, Host, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from './people.service';
import { loggerFactory, LoggerService } from './services/logger.service';

@Component({
  selector: 'app-person',
  imports: [CommonModule],
  template: `
    <div style="border:1px;">
      <p *ngIf="logger === null">No logger</p>
      <button (click)="doLog()">write log</button>
    </div>
  `,
  styles: ``,
  // providers: [
  //   {
  //     provide: LoggerService,
  //     useFactory: loggerFactory('PersonComponent'),
  //   },
  // ],
})
export class PersonComponent {
  constructor(@Optional() public logger: LoggerService) {}

  doLog() {
    if (this.logger) {
      this.logger.log('Message from component');
    } else {
      console.log('no loger available');
    }
  }
}
