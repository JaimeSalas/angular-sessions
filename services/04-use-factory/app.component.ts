import { Component } from '@angular/core';
import { PersonComponent } from './person.component';
import { NewLoggerService } from './services/new-logger.service';
// import { ChildComponent } from './child.component';
// import { PersonEditComponent } from './person-edit.component';
// import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [PersonComponent],
  template: `
    <h1>
      Services
      <h1>
        <app-person />
      </h1>
    </h1>
  `,
})
export class AppComponent {
  constructor(private service: NewLoggerService) {
    service.log('hola');
  }
}
