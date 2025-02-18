import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { AwesomePeopleService, PeopleService } from './people.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    { provide: PeopleService, useClass: AwesomePeopleService  }
  ],
};
