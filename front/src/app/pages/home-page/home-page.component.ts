import { Component, OnInit } from '@angular/core';
import { SessionsService } from 'src/app/services/sessions.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  subscription: any;

  constructor(private sessionsService: SessionsService) {}

  formations: any = [
    {date : "19/07/2022",
    formation_id: 1,
    adresse_id: "Lille",
    description: "Nom du theme",
    prix: '1000'
  },
  {date : "19/07/2022",
  formation_id: 2,
  adresse_id: "Paris",
  description: "Nom du theme",
  prix: '2000'
},
{date : "19/07/2022",
formation_id: 1,
adresse_id: "Marseille",
description: "Nom du theme",
prix: '1500'
},
{date : "19/07/2022",
formation_id: 2,
adresse_id: "New-York",
description: "Nom du theme",
prix: '1040'
}
  ];


  ngOnInit(): void {
    this.subscription = this.sessionsService.currentFormation.subscribe(
      (formation: any) => {
        if (formation) {
          this.formations = formation;
          for (let index = 0; index < this.formations.length; index++) {
            const element = this.formations[index];
          }
        }
      }
    );
  }

}
