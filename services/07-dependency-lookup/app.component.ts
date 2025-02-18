import { Component } from '@angular/core';
import { PersonComponent } from './person.component';
import { loggerFactory, LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  imports: [PersonComponent],
  template: `
    <h1>Services</h1>

    <app-person />
  `,
  // providers: [
  //   {
  //     provide: LoggerService,
  //     useFactory: loggerFactory('AppComponent'),
  //   },
  // ],
})
export class AppComponent {}
