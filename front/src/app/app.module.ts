import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import  Formation from './models/formation.model';

import { FooterComponentComponent } from './_commons/footer/footer-component/footer-component.component';
import { FooterColComponentComponent } from './_commons/footer/footer-col-component/footer-col-component.component';

@NgModule({
  declarations: [
    AppComponent,
// FormationModel,
    FooterComponentComponent,
    FooterColComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
