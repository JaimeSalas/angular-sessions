import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  name = 'Jai';

  getPerson() {
    return {
      name: this.name,
      age: 7,
    };
  }

  setPeronName(value: string) {
    this.name = value;
  }
}
