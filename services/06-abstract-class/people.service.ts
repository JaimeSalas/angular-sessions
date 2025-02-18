import { Injectable } from '@angular/core';

// -> 
// export interface PeopleService {
//   getPeople(): { name: string }[]; 
// }
export abstract class PeopleService {
  abstract getPeople(): { name: string }[];
}

// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class AwesomePeopleService implements PeopleService {
  name = 'Jai';

  people = [{ name: 'Foo' }, { name: 'Boo' }];

  getPerson() {
    return {
      name: this.name,
      age: 7,
    };
  }

  getPeople() {
    return this.people;
  }
}
