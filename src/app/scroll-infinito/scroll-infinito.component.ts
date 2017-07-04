import { Component, OnInit } from '@angular/core';
import { PlaceHolderService } from '../services/place-holder.service';
import { Miembros } from '../interfaces/interfaceMiembros';
import { SpinnerService } from '../services/spinner.service';
//import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
declare var Materialize:any;

@Component({
  selector: 'app-scroll-infinito',
  templateUrl: './scroll-infinito.component.html',
  styleUrls: ['./scroll-infinito.component.css']
})
export class ScrollInfinitoComponent  implements OnInit{

  miembros: Miembros[] = []; 
  start: number = 0;
  end: number = 6;
  no_results : boolean = false;

  constructor(
    private _servicio : PlaceHolderService, 
    public _spinner: SpinnerService,
  //  public af: AngularFire,
    private router:Router
  ) { 
    // this.af.auth.subscribe(user => {
    //     if(!user) {
    //       this.router.navigate(['/']);
    //     }else{
    //        this.miembros = [];
    //     }
    //   });
  }

    callCardsScroll(){
      
        this._servicio.getCardsScroll(this.start,this.end).subscribe(
          tarjeta => { 
           // console.log(tarjeta);
          if(tarjeta.length > 0){
            tarjeta.forEach(element => {
                this.miembros.push(element);
            });
          }else{
            this.no_results = true;
          }
            
          this._spinner.stop();
          });
    }

     ngOnInit(){
       this._spinner.start();
       this.callCardsScroll();
       
     }

    ngOnDestroy(){
      this._spinner.stop();
    }

    onScroll () {
            //console.log('scrolled!!')
        }

    onScrollDown () {
      this._spinner.start();
       this.start = this.end; 
       this.end= this.end + 6;
      this.callCardsScroll();
    }
  
    onScrollUp () {
      //console.log('scrolled up!!')
    }

}
