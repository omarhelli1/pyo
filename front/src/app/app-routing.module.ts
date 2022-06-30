import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFormationsComponent } from './pages/formations-page/liste-formations/liste-formations.component';
import { DetailsFormationComponent } from './pages/formations-page/details-formation/details-formation.component';
import { FormationsPageComponent } from './pages/formations-page/formations-page.component';
import { HomeFormationsComponent } from './pages/formations-page/home-formations/home-formations.component';
const routes: Routes = [
  {path: "liste-des-formations", component: FormationsPageComponent, children: [
    {path: "", component: HomeFormationsComponent},

    {path: ":domaine/:domaine_id/:theme/:theme_id", component: ListeFormationsComponent},
    {path: ":domaine/:domaine_id/:theme/:id/:formation/:formation_id", component: DetailsFormationComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
