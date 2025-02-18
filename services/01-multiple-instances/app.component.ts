import { Component } from '@angular/core';
import { ChildComponent } from './child.component';
import { PersonEditComponent } from './person-edit.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ChildComponent, PersonEditComponent, NgIf],
  template: `
    <h1>Services<h1>
    <h3>App component</h3>
    
    <app-person-edit />

    <button (click)="childVisible = !childVisible">Toggle</button>

    <app-child *ngIf="childVisible" />
  `,
})
export class AppComponent {
  childVisible = true
}
