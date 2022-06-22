import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ThemesPageComponent } from './pages/liste-formations/themes-page/themes-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeFormationsComponent } from './pages/liste-formations/liste-formations/liste-formations.component';
import { RouterModule } from '@angular/router';
import { DomainesComponent } from './pages/liste-formations/domaines/domaines.component';
=======

import { NavBarComponent } from './_commons/nav-bar/nav-bar.component';
import { FooterComponent } from './_commons/footer/footer.component';
import { ThemesPageComponent } from './pages/themes-page/themes-page.component';
import { DetailsFormationComponent } from './pages/themes-page/details-formation/details-formation.component';

>>>>>>> b1ed5b8036869a1de3f9e36d422fb3cab6f400ae
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ThemesPageComponent,
<<<<<<< HEAD
    ListeFormationsComponent,
    DomainesComponent
=======
    DetailsFormationComponent
>>>>>>> b1ed5b8036869a1de3f9e36d422fb3cab6f400ae
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    RouterModule
=======
>>>>>>> b1ed5b8036869a1de3f9e36d422fb3cab6f400ae
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
