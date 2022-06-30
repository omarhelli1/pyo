import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesPageComponent } from './pages/formations-page/themes-page/themes-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeFormationsComponent } from './pages/formations-page/liste-formations/liste-formations.component';
import { RouterModule } from '@angular/router';
import { DomainesComponent } from './pages/formations-page/domaines/domaines.component';
import { NavBarComponent } from './_commons/nav-bar/nav-bar.component';
import { FooterComponent } from './_commons/footer/footer.component';
import { DetailsFormationComponent } from './pages/formations-page/details-formation/details-formation.component';
import { SidenavComponent } from './pages/formations-page/sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';
import { FormationsPageComponent } from './pages/formations-page/formations-page.component';
import { HomeFormationsComponent } from './pages/formations-page/home-formations/home-formations.component';
// import { BreadcrumbComponent } from './pages/liste-formations/breadcrumb/breadcrumb.component'
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ThemesPageComponent,
    ListeFormationsComponent,
    DomainesComponent,
    DetailsFormationComponent,
    SidenavComponent,
    FormationsPageComponent,
    HomeFormationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,
    BreadcrumbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
