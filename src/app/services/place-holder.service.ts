import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PlaceHolderService {

  constructor(private http:Http) {}

  getPost(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts')
   .map(res => res.json()); 
  }

  getCardsScroll(_start:number,_end:number){
     return this.http.get('https://jsonplaceholder.typicode.com/posts?_start='+_start+'&_end='+_end+'')
   .map(res => res.json());
  }

  getCards(){
       return this.http.get('https://jsonplaceholder.typicode.com/photos')
   .map(res => res.json());
  }

  getCardsPagination(){
      return this.http.get('https://jsonplaceholder.typicode.com/photos')
        .map(res => res.json());
  }
}
