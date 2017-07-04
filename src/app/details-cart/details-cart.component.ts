import { Component, OnInit } from '@angular/core';
import {CartService } from '../services/cart.service';
import {Product} from '../interfaces/interfaceProduct';
import {ProductCart} from '../interfaces/interfaceProductCart';
declare var jQuery:any;

@Component({
  selector: 'app-details-cart',
  templateUrl: './details-cart.component.html',
  styleUrls: ['./details-cart.component.css']
})
export class DetailsCartComponent implements OnInit {

  private products : ProductCart[]=[];
  private details : any;
  
  constructor( private _serviceCart : CartService ) { }

  ngOnInit() {
    this.products = this._serviceCart.getProducts();
    this.details = this._serviceCart.getDetails();
    
  jQuery('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );

  }

}
