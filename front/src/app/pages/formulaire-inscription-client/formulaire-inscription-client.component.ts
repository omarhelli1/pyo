import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateurs.service';
import { FormationsService } from 'src/app/services/formations.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import UtilisateurModel from 'src/app/models/utilisateur.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SessionsService } from 'src/app/services/sessions.service';
import SessionModel from 'src/app/models/session.model';
import FormationModel from 'src/app/models/formation.model';
@Component({
  selector: 'app-formulaire-inscription-client',
  templateUrl: './formulaire-inscription-client.component.html',
  styleUrls: ['./formulaire-inscription-client.component.scss']
})
export class FormulaireInscriptionClientComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private formationsService: FormationsService){ }
  userForm!: FormGroup;
  user!: UtilisateurModel
  formation!: FormationModel
  sessions = [
    {date: new Date(Date.now()), lieu: "Lille"},
    {date: new Date(Date.now()), lieu: "Paris"},
  ]
  ngOnInit(): void {
    // this.utilisateurService.getAll();
    this.userForm = this.fb.group({
      id: [''],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      birthDay: ['', [Validators.required]],
      entreprise: ['']
    })

    this.activatedRoute.paramMap.subscribe((params : ParamMap)=> {  
      this.formationsService.findById(params.get('formation_id')).subscribe((formation: FormationModel) =>{
        console.log(params.get('formation_id'));
        
        this.formation = formation
        console.log(this.formation);
      })
    }); 

   
  }

  public submitForm(){
    // this.activatedRoute.snapshot.params.get
    this.user = this.userForm.value;
    this.utilisateurService.inscriptionUtilisateur(this.user, )
  }
}
