import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FejlecComponent } from './fejlec/fejlec.component';
import { LablecComponent } from './lablec/lablec.component';
import { LoginComponent } from './login/login.component';
import { NyitooldalComponent } from './nyitooldal/nyitooldal.component';
import { TermekComponent } from './termek/termek.component';
import { KategoriakComponent } from './kategoriak/kategoriak.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FejlecComponent,
    LablecComponent,
    LoginComponent,
    NyitooldalComponent,
    TermekComponent,
    KategoriakComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
