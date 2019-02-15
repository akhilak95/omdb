import { Component, OnInit, Input } from '@angular/core';
import {SendService} from '../send.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
 @Input() title: string;
  result:Object;
  constructor(private route: Router) { }
   ngOnInit() {}

   
  public search() {
    let titles = this.title;
    this.route.navigate(['home',titles]);
    
  }






}
