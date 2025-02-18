import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  name = 'Jai';

  getPerson() {
    return {
      name: this.name,
      age: 7,
    };
  }
}
