import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-domaines',
  templateUrl: './domaines.component.html',
  styleUrls: ['./domaines.component.scss']
})
export class DomainesComponent implements OnInit {
  
  // Type todo
  @Input() data: any;
  regexUri: RegExp = / /g
  constructor() { }

  ngOnInit(): void {
    

    
    
  }

}
