import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeFormationsComponent } from './pages/formations-page/liste-formations/liste-formations.component';
import { RouterModule } from '@angular/router';
import { DomainesComponent } from './pages/formations-page/domaines/domaines.component';
import { NavBarComponent } from './_commons/nav-bar/nav-bar.component';
import { FooterComponent } from './_commons/footer/footer.component';
// import { Navside2Component } from './_commons/navside2/navside2.component';
import { CardSessionComponent } from './pages/liste-sessionsDeFormations/card-session/card-session.component';
import { DetailsFormationComponent } from './pages/formations-page/details-formation/details-formation.component';
import { SidenavComponent } from './pages/formations-page/sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormationsPageComponent } from './pages/formations-page/formations-page.component';
import { HomeFormationsComponent } from './pages/formations-page/home-formations/home-formations.component';
// import { BreadcrumbComponent } from './pages/liste-formations/breadcrumb/breadcrumb.component'
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormulaireInscriptionClientComponent } from './pages/formulaire-inscription-client/formulaire-inscription-client.component';
import { InscriptionClientComponent } from './pages/inscription-client/inscription-client.component';
import { DomainesUlComponent } from './pages/formations-page/domaines-ul/domaines-ul.component';
import { RechercheComponent } from './pages/moteurRecherche/recherche/recherche.component';
import { FormCreateFormationComponent } from './pages/formulaire-create-formation/form-create-formation/form-create-formation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    ListeFormationsComponent,
    DomainesComponent,
    DetailsFormationComponent,
    SidenavComponent,
    FormationsPageComponent,
    HomeFormationsComponent,
    CardSessionComponent,
    FormulaireInscriptionClientComponent,
    InscriptionClientComponent,
    DomainesUlComponent,
    RechercheComponent,
    FormCreateFormationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    BreadcrumbModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
