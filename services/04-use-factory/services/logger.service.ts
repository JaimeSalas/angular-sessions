import { Injectable, Inject } from '@angular/core';
import { WriterService } from './writer.service';

@Injectable()
export class LoggerService {
  // Va a romper...
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
