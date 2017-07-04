import { Component, OnInit } from '@angular/core';
import { PlaceHolderService } from '../services/place-holder.service';
import { Miembros } from '../interfaces/interfaceMiembros';
import { SpinnerService } from '../services/spinner.service';
//import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit  {

  miembros : Miembros[];

  constructor(
    private _servicio : PlaceHolderService, 
    public _spinner: SpinnerService,
    //public af: AngularFire,
    private router:Router
    ) { 
      //  this.af.auth.subscribe(user => {
      //   if(!user) {
      //     this.router.navigate(['/']);
      //   }else{
         
      //   }
      // });
  }

  ngOnInit(){
      this._spinner.start();

  this._servicio.getCardsPagination().subscribe(
    tarjeta => { 
      this.miembros = tarjeta;
      this._spinner.stop();
    });
  }

  OnDestroy(){
       this._spinner.stop();
  }

}


