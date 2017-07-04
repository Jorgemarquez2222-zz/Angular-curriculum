import { Injectable } from '@angular/core';
import {Product} from '../interfaces/interfaceProduct';
import {ProductCart} from '../interfaces/interfaceProductCart';


@Injectable()
export class CartService {

  private products : ProductCart[]=[];
  private details : any;

  constructor( ) {
    this.details= {total :0 , items:0};
   }

   getProducts(){
     return this.products;
   }

  getDetails(){
    return  this.details;
  }
  
  addToCart(product: ProductCart){
    let index = this.products.findIndex(x => x.id == product.id);//busca igualdad entre objetos por un atributo en un array
    if(index == -1){
      product.quantity=1;
      this.products.push(product)
    }else{
      this.products[index].quantity += 1;
    }
    this.details.items += 1;
    this.details.total += product.price;
  }

  deleteToCart(product: ProductCart){
    let index = this.products.findIndex(x => x.id == product.id);
    this.products.splice(index,1);
    this.details.items -= product.quantity;
    this.details.total -= (product.price * product.quantity);
  }

}
