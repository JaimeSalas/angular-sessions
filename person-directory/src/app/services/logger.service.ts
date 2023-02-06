import { Injectable, Inject } from '@angular/core';
import { WriterService } from './writer.service';

@Injectable()
export class LoggerService {
  constructor(
    @Inject(Boolean) private isEnabled: boolean,
    private writer: WriterService
  ) {}

  log(msg: string) {
    if (this.isEnabled) {
      // console.log(`logger: ${msg}`);
      this.writer.write(msg);
    }
  }
}

// Angular 1 -> "vvvvvvvv"
// Angular 2 -> Class -> InjectionToken()

// // ts ->
// interface MyIterface {

// }
