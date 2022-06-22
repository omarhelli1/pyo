import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesPageComponent } from './pages/liste-formations/themes-page/themes-page.component';
import { ListeFormationsComponent } from './pages/liste-formations/liste-formations/liste-formations.component';

const routes: Routes = [
  {path: "liste-des-formations", component: ThemesPageComponent},
  {path: "liste-des-formations/:theme-name/:id", component: ListeFormationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
