import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class SendService {

  constructor(private http:HttpClient){}


  getMovieTitle(title:String){
    const url='https://www.omdbapi.com/?s='+title+'&apikey=9e9d99a2'
    let data=this.http.get(url);
     return data;
   }
}
