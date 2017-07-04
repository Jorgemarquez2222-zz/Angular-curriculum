import { Component, OnInit, ElementRef } from '@angular/core';
import { PlaceHolderService } from '../services/place-holder.service';
import { Miembros } from '../interfaces/interfaceMiembros';
import { SpinnerService } from '../services/spinner.service';
//import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
declare var jQuery:any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  miembros: Miembros[] = [];
  posicion : number =0;
 // items: FirebaseListObservable<any>;

  constructor( 
      private _servicio : PlaceHolderService,
      public _spinner: SpinnerService,
   //   public af: AngularFire,
      private router:Router,
      private _elRef: ElementRef,
   ) {
    //  this.af.auth.subscribe(user => {
    //     if(!user) {
    //       this.router.navigate(['/']);
    //     }
    //   });
   }
/**
 *  $(document).ready(function(){
      $('.parallax').parallax();
    });
 */
 ngOnInit(){
 
     jQuery(this._elRef.nativeElement).find('.parallax').parallax();
    
   
//     this._spinner.start();

  }


  ngOnDestroy(){
  //  this._spinner.stop();
  }

}
