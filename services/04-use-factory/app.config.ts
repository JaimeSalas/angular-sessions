import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { WriterService } from './services/writer.service';
// import { NewLoggerService } from './services/new-logger.service';

const loggerFactory = (writer: WriterService) => {
  return new LoggerService(true, writer);
};

// function myFunction() {}

// myFunction() // -> undefined

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    WriterService,
    {
      provide: LoggerService,
      useFactory: loggerFactory,
      deps: [WriterService],
    },
    // { provide: LoggerService, useClass: NewLoggerService }
    // { provide: LoggerService, useExisting: NewLoggerService },
    // { provide: LoggerService, useClass: LoggerService },
  ],
};
