import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  login : string= "Login";
  user = {};

  constructor(//public _authService: AuthService
  ) {

    //  this._authService.af.auth.subscribe(user => {
    //     if(user) {
    //       // user logged in
    //       this.login = 'Logout';
    //       this.user = user;
    //     }
    //     else {
    //        // user not logged in
    //       this.login = "Log in";
    //       this.user = {};
    //     }
    //   });
   }

  ngOnInit() {
  }

  login2(){
    // this._authService.logeado ? 'Logout' : 'Login';
    // if(this._authService.logeado){
    //   this._authService.logout();
    // }else{
    //   this._authService.login2();
    // }
  }
}
