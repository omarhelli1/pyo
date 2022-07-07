import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListeFormationsComponent } from './pages/formations-page/liste-formations/liste-formations.component';
import { DetailsFormationComponent } from './pages/formations-page/details-formation/details-formation.component';
import { FormationsPageComponent } from './pages/formations-page/formations-page.component';
import { HomeFormationsComponent } from './pages/formations-page/home-formations/home-formations.component';
import { FormulaireInscriptionClientComponent } from './pages/formulaire-inscription-client/formulaire-inscription-client.component';
import { SidenavComponent } from './pages/formations-page/sidenav/sidenav.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'inscription-client', component: FormulaireInscriptionClientComponent},
  {
    path: 'catalogue',
    component: FormationsPageComponent,
    children: [
      { path: '', component: HomeFormationsComponent },

      {
        path: 'liste-des-formations',
        component: SidenavComponent,
        children: [
          { path: ':domaine/:domaine_id/:theme/:theme_id', component: ListeFormationsComponent},
          { path: ':domaine/:domaine_id/:theme/:id/:formation/:formation_id', component: DetailsFormationComponent },
          { path: ':domaine/:domaine_id/:theme/:id/:formation/:formation_id/inscription-client', component: DetailsFormationComponent,
            children: [
              { path: '', component: FormulaireInscriptionClientComponent}
            ] 
          }
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
