import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import Domaine from 'src/app/models/domaine.model';
import Theme from 'src/app/models/theme.model';
import { DomaineService } from 'src/app/services/domaine.service';
import { ThemesService } from 'src/app/services/themes.service';
@Component({
  selector: 'app-formulaire-create-theme',
  templateUrl: './formulaire-create-theme.component.html',
  styleUrls: ['./formulaire-create-theme.component.scss']
})
export class FormulaireCreateThemeComponent implements OnInit {
  domaines: Domaine[] = []
  themes: Theme[] = []
  subscription!: Subscription
  themeForm!: FormGroup
  domainesCopy: any[] = []
  constructor(private domaineService: DomaineService, private themesService: ThemesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.themeForm = this.fb.group({
      nom: ["", Validators.required],
      parent_id: [""],
      domaine: ["", Validators.required],
    })

    this.domaineService.getAll().subscribe((domaines: any) => {
      this.domaines = domaines
      this.domainesCopy = domaines
    })

    this.subscription= this.themesService.currentThemes.subscribe((themes : any) =>{
      if(themes.length >0){
        this.themes= themes;
      }
    })
  }
  isPArentid: boolean = false

  onChangeParent($event: number){

    // let domaine = this.domaines.find(domaine => domaine.themes.find(theme => theme.id == $event))
    if($event){
      this.isPArentid = true
      let currentDomaine;
      currentDomaine = this.domaines.find(domaine => {
        return domaine.themes.find(theme => {
          return theme.id == $event
        })
      });
      this.domainesCopy = [currentDomaine];
      this.themeForm.controls['domaine'].patchValue(this.domainesCopy[0])
      this.themeForm.value.domaine = null
    }
  }

  public submit(){
    if(this.isPArentid){
      this.themeForm.value.domaine = this.domainesCopy[0]
    }
    this.themesService.ajouterUnTheme(this.themeForm.value);
    this.themeForm.reset();
  }

}
