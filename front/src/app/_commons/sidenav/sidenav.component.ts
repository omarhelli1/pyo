import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormationsService } from 'src/app/services/formations.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  subscription!: Subscription;
  domaines: any = []
  constructor(private formationsService: FormationsService) { }

  ngOnInit(): void {
    this.subscription = this.formationsService.currentFormation.subscribe((message: any) => {
      if(message.length){
        this.domaines = message
      }
    })
  }
  

}
