import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import SessionModel from "../models/session.model";


@Injectable
({providedIn: 'root'})

export class SessionsService{

  private formationSource = new BehaviorSubject(null);
  currentFormation = this.formationSource.asObservable();

  data = []
  sessions: any = {}
  static currentSession: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.getSessions().subscribe((sessions: any) =>{
      if(sessions.length > 0){
        this.formationSource.next(sessions)
        this.data = sessions
      }
    })
   }

   detailsFormation(formation: any){
    this.formationSource.next(formation)
   }

   ajouterUneNouvelleSession(value: any){
    this.http.post("http://localhost:8080/sessions/ajout", value).subscribe()
   }

   public getSessions(){
    return this.http.get<SessionModel[]>('http://localhost:8080/sessions');
   }
  //  /{formationId}
   public getByFormation(id: any){
    return this.http.get<SessionModel[]>('http://localhost:8080/sessions/getByFormation/' + id);
   }
}
