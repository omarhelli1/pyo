import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-formations-page',
  templateUrl: './formations-page.component.html',
  styleUrls: ['./formations-page.component.scss']
})
export class FormationsPageComponent implements OnInit {
  items: MenuItem[];




    constructor() { 
      this.items = [
        {label:''}
    ];
  }

  ngOnInit(): void {
  }

}
