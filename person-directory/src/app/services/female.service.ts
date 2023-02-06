import { Injectable } from '@angular/core';
import { PersonService } from './person.service';

@Injectable()
export class FemaleService extends PersonService {

  constructor() { 
    super();
  }

  override getPerson(): { name: string; age: number; } {
    const person = super.getPerson();
    person.name = 'lau';
    person.age = 10;
    (person as any).gender = 'F';
    return person;
  }
}
