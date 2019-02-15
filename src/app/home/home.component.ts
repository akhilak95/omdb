import { Component, OnInit, ViewChild } from '@angular/core';
import { FetchComponent } from '../fetch/fetch.component';
import { ChildActivationEnd, ActivatedRoute } from '@angular/router';
import { SendService } from '../send.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public result:object;
  constructor(private fetch:SendService,private _route:ActivatedRoute) { }

  ngOnInit() {
     let title = this._route.snapshot.paramMap.get('title');
     console.log(title);
    this.fetch.getMovieTitle(title).subscribe((result)=>{
      this.result=result;
      console.log(result);
      
    },(error)=>{
      console.log("something went wrong");
    });
    

  }

}
