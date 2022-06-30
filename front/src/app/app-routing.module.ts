import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFormationsComponent } from './pages/liste-formations/liste-formations/liste-formations.component';
import { DetailsFormationComponent } from './pages/liste-formations/details-formation/details-formation.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: "home", component: HomePageComponent},
  {path: "liste-des-formations/:domaine/:domaine_id/:theme/:theme_id", component: ListeFormationsComponent},
  {path: "liste-des-formations/:domaine/:domaine_id/:theme/:id/:formation/:formation_id", component: DetailsFormationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
