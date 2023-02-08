import { Component, OnInit } from '@angular/core';
import { Observable, of, from, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const beerStream = of(['Beer 1', 'Beer 2']).subscribe(console.log);
    // const beerStream = of('Beer 1', 'Beer 2').subscribe(console.log);
    // const beerStream = from(['Beer1', 'Beer2']).subscribe(console.log);
    // interval(1000).subscribe(console.log);
  }
  title = 'rxjs-playground';
}
