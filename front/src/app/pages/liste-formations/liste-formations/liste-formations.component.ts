import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { FormationsService } from 'src/app/services/formations.service';

@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.scss']
})
export class ListeFormationsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private formationsService: FormationsService) { }
txt: string = "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"
subscription!: Subscription;
domaines: any = {}
theme!: any

  ngOnInit(): void {
    this.subscription = this.formationsService.currentFormation.subscribe((message: any) => {
      if(message.length){
        this.domaines = message
        let domaine = this.domaines.find((domaine: any) => domaine.id == this.route.snapshot.paramMap.get('domaine_id'));
        this.theme = domaine.themes.find((theme:any) => theme.id == this.route.snapshot.paramMap.get('theme_id'))
      }
    })
  }

}
