import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heros/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { PersonasModule } from './personas/personas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    PersonasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
