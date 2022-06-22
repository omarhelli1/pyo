import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

interface domaines{
  id: string;
  nom: number;
  themes: []
}

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  private formationSource = new BehaviorSubject({});
  currentFormation = this.formationSource.asObservable();

  private formationByThemeIdSource = new BehaviorSubject({});
  currentTheme = this.formationByThemeIdSource.asObservable();

  data = []
  formation = {}

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/domaines').subscribe((domaines: any) =>{
      this.formationSource.next(domaines)
      this.data = domaines
    })
   }

   public findThemeById(id: any){
      this.formation = this.data.find(data => data.themes.find())

      
   }


}
