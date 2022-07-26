import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ThemesService  {
urlApi="http://localhost:8080";

private themesSource = new BehaviorSubject({});
currentThemes = this.themesSource.asObservable();


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    // contacte ma bdd pour recuperer le resultat
    this.http.get(this.urlApi+"/themes").subscribe((data :any) => {
       if(data!){
        this.themesSource.next(data)
      }
    });
   }

   public ajouterUnTheme(data: any){
    this.http.post(this.urlApi + "/themes/ajout/" + data.domaine.id, data).subscribe()
   }
  




}
