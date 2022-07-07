import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

// Interface
import  UtilisateurModel from '../models/utilisateur.model'

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService  {

    constructor(private httpClient: HttpClient){ 
        this.getAll()
    }

    public getAll(){
        this.httpClient.get('http://localhost:8080/utilisateurs').subscribe((utilisateurs: any) =>{
            console.log(utilisateurs);
            if(utilisateurs.length > 0){
                
                console.log(utilisateurs);
                
            }
          })
    }

    public inscriptionUtilisateur(user: UtilisateurModel){
        console.log(user);
        user.entreprise = { 
            nom:'entreprise 1'
        }
        this.httpClient.post('http://localhost:8080/utilisateurs/ajout', user).subscribe()
    }


}