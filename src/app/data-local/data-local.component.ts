import { Component, OnInit,ElementRef } from '@angular/core';
import { Miembros } from '../interfaces/interfaceMiembros';
import { ServicelocalService } from '../services/servicelocal.service';
//import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
import {SpinnerService} from '../services/spinner.service';
declare var jQuery:any;

@Component({
  selector: 'app-data-local',
  templateUrl: './data-local.component.html',
  styleUrls: ['./data-local.component.css'],
})
export class DataLocalComponent implements OnInit {

  miembros: any[]=[];//Miembros[];

  detallesMiembro : Miembros;
  
  constructor(
    private _servicioLocal: ServicelocalService,
    // public af: AngularFire,
   private router:Router,
   private _spinner : SpinnerService,
   private _elRef: ElementRef
  ) {

   }

  getData(){
    // this.af.auth.subscribe(user => {
    //     if(!user) {
    //       this.router.navigate(['/']);
    //     }else{
    //      this._servicioLocal.getMiembros().subscribe(res => {
    //         this.miembros = res;
    //         this._spinner.stop();
    //     })
    //     }
    //   });
    this.miembros = this._servicioLocal.getMiembros();
    this._spinner.stop();
  }

  ngOnInit(){
    jQuery(this._elRef.nativeElement).find('.modal').modal();
    this._spinner.start();
    this.getData();
  }

  detalles(miembro : Miembros){
   this.detallesMiembro = miembro;
console.log('algo');

  }

}
