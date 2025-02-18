import { Injectable, Inject } from '@angular/core';

// Curry
export const loggerFactory = (prefix: string) => () =>
  new LoggerService(prefix);

// const doLogger = loggerFactory('Pepe'); // 

@Injectable()
export class LoggerService {
  constructor(@Inject(String) private prefix: string) {}

  log(msg: string) {
    console.log(`Logger (${this.prefix}): ${msg}`);
  }
}
