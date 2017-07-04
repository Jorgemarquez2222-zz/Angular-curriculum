import { Component,ElementRef, OnInit,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { AuthService } from '../services/auth.service';
import {CartService} from '../services/cart.service';
import { MaterializeModule } from 'angular2-materialize';
declare var jQuery:any;
declare var Materialize:any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit  {

details : any;
ver : boolean = false;
log: boolean = false;
login : string= "Login";
user = {};
  constructor(//public _authService: AuthService,
    private router:Router,private _elRef: ElementRef,
  private _cartService : CartService
  ) {
    
    // this._authService.af.auth.subscribe(user => {
    //     if(user) {
    //       // user logged in
    //       this.login = 'Logout';
    //       this.log = true; 
    //       this.user = user;
    //     }
    //     else {
    //        // user not logged in
    //       this.login = "Log in";
    //       this.log = false;
    //       this.user = {};
    //     }
    //   });
       this.details = this._cartService.getDetails();
   }

  ngOnInit(){
     jQuery(this._elRef.nativeElement).find('.button-collapse3').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
     });  
     
  }

  login2(){
//)    jQuery('div[id^=sidenav-overlay]').remove();//quitar error de Materialize cuando se contrae el SideNav
    // this._authService.logeado ? 'Logout' : 'Login';
 
    // if(this._authService.logeado){
    //   this._authService.logout();
    // }else{
    //   this._authService.login2();
    // }
  }
  qerror(){
  //   jQuery('div[id^=sidenav-overlay]').remove();//quitar error de Materialize cuando se contrae el SideNav
  }
  mouseover(){
    this.ver = true
  }
  mouseleave(){
    this.ver = false;
    
  }
  
  triggerToast() {
//    jQuery('div[id^=sidenav-overlay]').remove();//quitar error de Materialize cuando se contrae el SideNav
    if(!this.log){
       Materialize.toast('Tienes que estar logueado!', 4000);
    }
  }
  
  
}
