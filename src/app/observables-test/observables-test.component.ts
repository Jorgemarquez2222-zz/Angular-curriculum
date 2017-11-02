import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
@Component({
  selector: 'app-observables-test',
  templateUrl: './observables-test.component.html',
  styleUrls: ['./observables-test.component.css']
})
export class ObservablesTestComponent implements OnInit {
  cursos :  string[] = ['Angular', 'JavaScript'];
  cursos2 : Observable<string[]>;
  data: Observable<any>
  
  constructor() {
    this.data = Observable.create((observer) => {
      observer.next(this.cursos);
    });   
  }

  ngOnInit() {
  }

  cambiarData(){
    this.cursos.push("a")
    }

}
