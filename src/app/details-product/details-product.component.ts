import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/interfaceProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private _serviceProducts : ProductsService) { }

  idproduct:string;
  product : Product;

    ngOnInit(){
         this._route.params
            .map(params => params['id'] )
            .subscribe((id) => {
              this.idproduct = id;            
              this.getProduct(this.idproduct);
                });
    }
    
    getProduct(id:string){
      let product: any[]=[];
       product = this._serviceProducts.getProducts()
       
          //  let index =  product.findIndex(x => x.id == product.id);//busca igualdad entre objetos por un atributo en un array
          //   if(index == -1){
            
          //   }else{
          //   }
          // console.log(res)
          product.forEach(element => {
            if(element.id.toUpperCase() == id.toUpperCase()){
              this.product = element;
            }
          });
        }
      
    
}