import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {
  name = 'Jai';

  getPerson() {
    return {
      name: this.name
    };
  }

  setPersonName(value: string) {
    this.name = value;
  }
}

// reveal pattern

// function my() {
//   let t = 't';

//   return {
    
//   };
// }


