import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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

  private formationByThemeIdSource = new BehaviorSubject(null);
  currentTheme = this.formationByThemeIdSource.asObservable();

  data = []
  themes: any = {}

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.http.get('http://localhost:3000/domaines').subscribe((domaines: any) =>{
      if(domaines.length > 0){
        this.formationSource.next(domaines)
        this.data = domaines
      }
    })
   }
}
