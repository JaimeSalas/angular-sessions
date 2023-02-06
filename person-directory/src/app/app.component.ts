import { Component } from '@angular/core';
import { loggerFactory, LoggerService } from './services/logger.service';

/*
<app-person></app-person>    

<app-female></app-female>
*/

/*
<app-people></app-people>
*/

@Component({
  selector: 'app-root',
  template: `
    <h2>App Component</h2>
    
    <app-person></app-person>
  `,
  styles: [``],
  // providers: [
  //   { provide: LoggerService, useFactory: loggerFactory('AppComponent') }
  // ]
})
export class AppComponent {
  childVisible = true;
} 
// Function - Prototype Pattern -> HTML - testing library

// Angular 1 (módulos, inyeccion dependencias, directivas, MVC - controller) -> Angular 2
// <input ngModel /> -> Formularios // Validaciones -> Errores / Touched / Pristine  -> 'Upper Case' / Required
// Directiva es un componente sin template
// Button -> Exponga API HTML / Document - Directive / Material UI - Angular - muiButton 

/*
<h1>Services<h1>
<h3>App component</h3>
<app-person-edit></app-person-edit>

<button (click)="childVisible = !childVisible">Toggle</button>
<app-child *ngIf="childVisible"></app-child>
*/
