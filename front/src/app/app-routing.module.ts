import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { NotFoundComponent } from './_commons/not-found/not-found.component';

 
import { ThemesPageComponent } from './pages/liste-formations/themes-page/themes-page.component';
import { ListeFormationsComponent } from './pages/liste-formations/liste-formations/liste-formations.component';
import { DetailsFormationComponent } from './pages/liste-formations/details-formation/details-formation.component';
const routes: Routes = [
  // {path: "liste-des-formations", component: ThemesPageComponent},
  // {path:'' , redirectTo: 'home', pathMatch: 'full'},
  {  path:'home' , component: HomePageComponent},
  {  path:'**' , component: NotFoundComponent},
  {path: "liste-des-formations/:domaine/:domaine_id/:theme/:theme_id", component: ListeFormationsComponent},
  {path: "liste-des-formations/:domaine/:domaine_id/:theme/:id/:formation/:formation_id", component: DetailsFormationComponent},
 {path: "liste-des-themes", component: ThemesPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

