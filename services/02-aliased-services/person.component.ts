import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-person',
  imports: [],
  template: `
    <p>person works!</p>
    <button (click)="doLog()">Log to console</button>
  `,
  styles: ``,
})
export class PersonComponent {
  constructor(private logger: LoggerService) {}

  doLog() {
    this.logger.log('Message from compoenent');
  }
}
