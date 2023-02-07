import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomeComponent } from './welcome.component';
import { PetsComponent } from './pets.component';
import { PetsModule } from './pets/pets.module';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    PetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Angular LOBA - medianas a grandes
// d3.js
