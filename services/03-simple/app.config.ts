import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { NewLoggerService } from './services/new-logger.service';

const simpleLogger = {
  // log: () => {}
  // log: function() {
  //   const self = this;
  // }
  log(msg: string) {
    console.log(`I'm a simple logger ${msg}`);
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // LoggerService
    // { provide: LoggerService, useClass: NewLoggerService }
    // { provide: LoggerService, useExisting: NewLoggerService },
    { provide: LoggerService, useValue: simpleLogger },
  ],
};
