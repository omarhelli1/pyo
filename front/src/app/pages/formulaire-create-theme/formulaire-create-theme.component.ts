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
      console.log(this.domaines);
      
    })

    this.subscription= this.themesService.currentThemes.subscribe((themes : any) =>{
      if(themes.length >0){
        this.themes= themes;
      }
    })
  }

  onChangeParent($event: number){
    console.log($event);
    // let domaine = this.domaines.find(domaine => domaine.themes.find(theme => theme.id == $event))
    if($event){
      console.log(this.domaines);
      let currentDomaine;
      currentDomaine = this.domaines.find(domaine => {

console.log(domaine);
        console.log(domaine.themes);
        
        return domaine.themes.find(theme => {
          return theme.id == $event
        })
      });
      this.domainesCopy = [currentDomaine];
      console.log(this.themeForm.value.domaine);
      // this.themeForm.controls['domaine'].markAsDirty();
      // this.themeForm.controls['domaine'].touched;
      console.log(this.themeForm.value.domaine);
      this.themeForm.controls['domaine'].patchValue(this.domainesCopy[0])
      console.log(this.themeForm.value.domaine);

      console.log(this.domainesCopy[0]);
      this.themeForm.value.domaine = null

    }
  
    
  }

  public submit(){
    this.themeForm.value.domaine = this.domainesCopy[0]
    console.log(this.themeForm.value.domaine);

    //delete this.themeForm.value.domaine.themes
    this.themesService.ajouterUnTheme(this.themeForm.value);
    this.themeForm.reset();
  }

}
