import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListeFormationsComponent } from './pages/formations-page/liste-formations/liste-formations.component';
import { DetailsFormationComponent } from './pages/formations-page/details-formation/details-formation.component';
import { FormationsPageComponent } from './pages/formations-page/formations-page.component';
import { HomeFormationsComponent } from './pages/formations-page/home-formations/home-formations.component';
import { FormulaireInscriptionClientComponent } from './pages/formulaire-inscription-client/formulaire-inscription-client.component';
import { InscriptionClientComponent } from './pages/inscription-client/inscription-client.component';
import { RechercheComponent } from './pages/moteurRecherche/recherche/recherche.component';
import { FormCreateFormationComponent } from './pages/formulaire-create-formation/form-create-formation/form-create-formation.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'inscription-client', component: InscriptionClientComponent},
{ path: 'recherche', component: RechercheComponent },
{ path: 'formCreerFormation', component: FormCreateFormationComponent },
  {
    path: 'liste-des-formations',
    component: FormationsPageComponent,
    children: [
      { path: '', component: HomeFormationsComponent },

      {
        path: ':domaine/:domaine_id/:theme/:theme_id',
        component: ListeFormationsComponent,
      },
      {
        path: ':domaine/:domaine_id/:theme/:id/:formation/:formation_id',
        component: DetailsFormationComponent,
        children: [
          { path: 'inscription-client', component: FormulaireInscriptionClientComponent },

        ]
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
