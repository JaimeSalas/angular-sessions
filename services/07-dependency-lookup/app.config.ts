import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { AwesomePeopleService, PeopleService } from './people.service';
import { loggerFactory, LoggerService } from './services/logger.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // { provide: LoggerService, useFactory: loggerFactory('AppModule') },
    // { provide: PeopleService, useClass: AwesomePeopleService  }
  ],
};

// pipe(
//   
// )
