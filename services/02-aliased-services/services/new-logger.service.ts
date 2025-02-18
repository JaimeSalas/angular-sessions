import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewLoggerService {
  private uuid!: string;

  constructor() {
    this.uuid = crypto.randomUUID();
  }

  // [...args]
  log(msg: string, extra?: string) {
    if (extra) {
      console.log('extra feed it');
    }
    console.log(`New logger: ${msg} ${this.uuid}`);
  }
}
