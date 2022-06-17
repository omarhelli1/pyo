import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesPageComponent } from './pages/themes-page/themes-page.component';
import { ThemeCardComponent } from './pages/themes-page/theme-card/theme-card.component';

@NgModule({
  declarations: [  
    AppComponent,
    ThemesPageComponent,
    ThemeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
