import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { PersonEditComponent } from './person-edit.component';
import { PersonService } from './services/person.service';
// import { PersonService as Foo } from './services/person.service';
import { PersonComponent } from './person.component';
import { LoggerService } from './services/logger.service';
import { NewLoggerService } from './services/new-logger.service';
import { WriterService } from './services/writer.service';
import { FemaleComponent } from './female.component';

// const simpleLogger = {
//   log(msg: string) {
//     console.log(`I am a simple logger: ${msg}`);
//   }
// };
// const loggerFactory = () => {
//   // IoC
//   return new LoggerService(true, new WriterService());
// };
const loggerFactory = (writer: WriterService) => {
  // IoC
  return new LoggerService(true, writer);
};

// forRoot, forChild

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PersonEditComponent,
    PersonComponent,
    FemaleComponent,
  ],
  imports: [BrowserModule],
  providers: [
    PersonService,
    // { provide: LoggerService, useExisting: NewLoggerService },
    // NewLoggerService,
    // { provide: LoggerService, useValue: simpleLogger }
    // LoggerService
    WriterService,
    { provide: LoggerService, useFactory: loggerFactory, deps: [WriterService] },
  ], // new PersonService()
  bootstrap: [AppComponent],
})
export class AppModule {}
