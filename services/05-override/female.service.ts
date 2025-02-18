import { Injectable } from '@angular/core';
import { PeopleService } from './people.service';

@Injectable({
  providedIn: 'root',
})
export class FemaleService extends PeopleService {
  override getPerson(): { name: string; age: number; } {
    const person = super.getPerson();
    person.name = "Lau";
    (person as any).gender = "F";
    // person.gender = "F";
    return person;
  }
}
