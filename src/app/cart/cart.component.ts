import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import {Product} from '../interfaces/interfaceProduct';
import {ProductCart} from '../interfaces/interfaceProductCart';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  
  // products:any;
  private products : ProductCart[]=[];
  details:any;

  constructor(private _serviceCart : CartService) { }

  ngOnInit() {
    this.products = this._serviceCart.getProducts();
    this.details= this._serviceCart.getDetails();
  }

  keys(){
    return Object.keys(this.products);

  }
  
  deleteToCart(product: ProductCart){
    this._serviceCart.deleteToCart(product);
  }

}
