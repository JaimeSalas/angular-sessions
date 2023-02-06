import { Injectable, Inject } from '@angular/core';
// import { WriterService } from './writer.service';

// @Injectable()
// export class LoggerService {
//   constructor(
//     @Inject(Boolean) private isEnabled: boolean,
//     private writer: WriterService
//   ) {}

//   log(msg: string) {
//     if (this.isEnabled) {
//       // console.log(`logger: ${msg}`);
//       this.writer.write(msg);
//     }
//   }
// }

// Angular 1 -> "vvvvvvvv"
// Angular 2 -> Class -> InjectionToken()

// ramda / lodash
// f(a, b, c) -> f(a, b)(c) -> f(a)(b, c) -> f(a)(b)(c)
// f(a)(b)
export const loggerFactory = (prefix: string) => () =>
  new LoggerService(prefix);

@Injectable()
export class LoggerService {
  constructor(@Inject(String) private prefix: string) {}

  log(msg: string) {
    console.log(`Logger (${this.prefix}): ${msg}`);
  }
}
