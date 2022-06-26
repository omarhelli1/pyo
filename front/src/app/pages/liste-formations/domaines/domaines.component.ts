import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { FormationsService } from 'src/app/services/formations.service';
@Component({
  selector: 'app-domaines',
  templateUrl: './domaines.component.html',
  styleUrls: ['./domaines.component.scss']
})
export class DomainesComponent implements OnInit {
  
  // Type todo
  @Input() data: any;
  isShowThemes: boolean = false
  isShowSubThemes: boolean = false
  @ViewChild("formationElems") formationElems?: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('listeElems') listeElems?: QueryList<ElementRef<HTMLElement>>;

  regexUri: RegExp = / /g
  constructor(private router: Router, private formationsService: FormationsService, private _renderer: Renderer2) { }

  ngOnInit(): void { }

  showListFormation(theme: any){
    if(theme.formations){
      this.router.navigate(['/liste-des-formations',this.data.nom.replace(this.regexUri, '-'), this.data.id, theme.nom.replace(this.regexUri, '-'), theme.id], { state: { hello: 'world' } });
      this.formationsService.changeTheme(theme);
      sessionStorage.setItem('liste-formations', JSON.stringify(theme) );
    }
  }



  showThemes(id: number, $event: any) {
    this.listeElems?.forEach((acc) => {  acc.nativeElement.removeAttribute('class'); })
    this.listeElems?.first.nativeElement.removeAttribute("class")
    // close all open items using renderer
    // get current target
    const currentTarget = $event.target;
    // // get next html element using renderer
    const currentAccordeon = this._renderer.nextSibling(currentTarget);
    this.isShowThemes = !this.isShowThemes;
    this.isShowSubThemes = false

    // // remove class using renderer
    // this._renderer.removeClass(currentAccordeon, 'hidden');
  }







  // showThemes(id: any){
  //   // console.log(this.listeElem?.nativeElement.setAttribute("hidden", 'false'));
  //   this.listeElem?.nativeElement.setAttribute.hidden.value == "'false'";
  //   console.log(this.listeElem?.nativeElement.setAttribute.hidden.value);
    
  //   // this.isShowThemes = !this.isShowThemes;
  //   if(this.isShowSubThemes){
  //     this.isShowSubThemes = false;
  //   }

  // }

  showSubThemes(){
    this.isShowSubThemes = !this.isShowSubThemes;
  }

}
