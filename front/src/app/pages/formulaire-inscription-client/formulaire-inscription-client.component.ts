import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateurs.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import UtilisateurModel from 'src/app/models/utilisateur.model';
@Component({
  selector: 'app-formulaire-inscription-client',
  templateUrl: './formulaire-inscription-client.component.html',
  styleUrls: ['./formulaire-inscription-client.component.scss']
})
export class FormulaireInscriptionClientComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService, private fb: FormBuilder) { }
  userForm!: FormGroup;
  user!: UtilisateurModel
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
  }

  public submitForm(){
    
    this.user = this.userForm.value;
    this.utilisateurService.inscriptionUtilisateur(this.user, )
  }
}