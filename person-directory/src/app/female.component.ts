import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-female',
  template: `
    <h3>
      female
    </h3>
    <pre>{{  }}</pre>
  `,
  styles: [
  ]
})
export class FemaleComponent implements OnInit {
  person: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
