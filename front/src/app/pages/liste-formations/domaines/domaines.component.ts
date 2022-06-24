import { Component, Input, OnInit } from '@angular/core';
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

  regexUri: RegExp = / /g
  constructor(private router: Router, private formationsService: FormationsService) { }

  ngOnInit(): void {}

  onSelectTheme(theme: any){
    this.formationsService.changeTheme(theme);
    // this.router.navigate(["liste-des-formations/"+ this.data.nom.replace(this.regexUri, '-') + "/" + this.data.id + "/" + theme.nom.replace(this.regexUri, '-') + "/" + theme.id])
  }

  showThemes(){
    this.isShowThemes = !this.isShowThemes;
    if(this.isShowSubThemes){
      this.isShowSubThemes = false;
    }

  }

  showSubThemes(){
    this.isShowSubThemes = !this.isShowSubThemes;
  }

}
