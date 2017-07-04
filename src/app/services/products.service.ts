import { Injectable } from '@angular/core';
import { Product } from '../interfaces/interfaceProduct';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ProductsService {

  products : Product[] = [];
prueductosLocales: any[]=[];
  constructor(private _http : Http) {
 this.prueductosLocales=[
        {
        id:"1",
        nombre: "Monitor 22'' ",
        price: 50,
        image:"1"
      },{
        id:"2",
        nombre: "Teclado",
        price: 60,
        image:"2"
      },{
        id:"3",
        nombre: "Mouse",
        price: 85,
        image:"3"
      },{
        id:"4",
        nombre: "Procesador i7",
        price: 20,
        image:"5"
      },{
        id:"5",
        nombre: "Laptop Acer",
        price: 150,
        image:"5"
      },{
        id:"6",
        nombre: "Disco duro",
        price: 250,
        image:"6"
      },{
        id:"7",
        nombre: "Tarjeta madre",
        price: 24,
        image:"7"
      },{
        id:"8",
        nombre: "Memoria ram",
        price: 550,
        image:"8"
      },{
        id:"9",
        nombre: "Disco SSD",
        price: 156,
        image:"9"
      },{
        id:"10",
        nombre: "Fan cooler",
        price: 156,
        image:"10"
      },{
        id:"11",
        nombre: "Case para pc",
        price: 156,
        image:"11"
      }];

  }
   getProducts(){
        // return this._http.get('/app/json/products.json')
        // .map( res => res.json())

  //      return this.prueductosLocales.map(
  //        res=> res
  //      );
  //  }
    
    return this.prueductosLocales;

      }


}
