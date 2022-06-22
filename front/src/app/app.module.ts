import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesPageComponent } from './pages/liste-formations/themes-page/themes-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeFormationsComponent } from './pages/liste-formations/liste-formations/liste-formations.component';
import { RouterModule } from '@angular/router';
import { DomainesComponent } from './pages/liste-formations/domaines/domaines.component';
@NgModule({
  declarations: [  
    AppComponent,
    ThemesPageComponent,
    ListeFormationsComponent,
    DomainesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
