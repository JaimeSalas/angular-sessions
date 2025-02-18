import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { NewLoggerService } from './services/new-logger.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // LoggerService
    // { provide: LoggerService, useClass: NewLoggerService }
    { provide: LoggerService, useExisting: NewLoggerService }
  ],
};
