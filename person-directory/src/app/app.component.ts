import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-person></app-person>    
  `,
  styles: [``]
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
