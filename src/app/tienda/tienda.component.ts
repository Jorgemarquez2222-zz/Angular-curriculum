import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/interfaceProduct';
import {CartService} from '../services/cart.service';
import {ProductCart} from '../interfaces/interfaceProductCart';
import {SpinnerService} from '../services/spinner.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})

export class TiendaComponent implements OnInit {

  products : any;
  details : any;
  ver : boolean = false;

  constructor( private _serviceProducts : ProductsService,
  private _cartService : CartService,
  private _spinner : SpinnerService
   ) {}

  getData(){

    this.products = this._serviceProducts.getProducts()
        this._spinner.stop();
    
      // res => {
      //   this.products = res ;
      //   this._spinner.stop();
      //   }
    
      this.details = this._cartService.getDetails();
    
  }

  ngOnInit() {
    this._spinner.start();
    this.getData();
  }
  
  addProduct( product : ProductCart){
    this._cartService.addToCart(product);
  }

  
}
