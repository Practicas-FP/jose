import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public auth: AuthServiceService, public router: Router) { }

  ngOnInit() {

  }

  ionViewWillEnter(){
    if(this.auth.isLoggedIn){
      this.router.navigate(['dashboard']);
      console.log('logeado');
    }
    else{
      console.log('No logeado');
      this.router.navigate(['login']);
    }
    console.log(this.auth.isLoggedIn);
  }
  reload(){
    window.location.assign('/dashboard');
  }
}
