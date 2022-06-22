import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesPageComponent } from './pages/liste-formations/themes-page/themes-page.component';
import { ListeFormationsComponent } from './pages/liste-formations/liste-formations/liste-formations.component';
import { DetailsFormationComponent } from './pages/liste-formations/details-formation/details-formation.component';
const routes: Routes = [
  {path: "liste-des-formations", component: ThemesPageComponent},
  {path: "liste-des-formations/:domaines/:domaine_id/:theme/:theme_id", component: ListeFormationsComponent},
  {path: "liste-des-formations/domaines/:theme-name/:id/details-formation", component: DetailsFormationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
