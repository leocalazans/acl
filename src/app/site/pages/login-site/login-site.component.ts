import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../shared/authentication.service';
import * as firebase from 'firebase';
import { auth } from 'firebase/app';
import { Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-site',
  templateUrl: './login-site.component.html',
  styleUrls: ['./login-site.component.scss']
})
// export class LoginSiteComponent  {

//   constructor() { }

//   ngOnInit() {

//   }

// }

export class LoginSiteComponent {
  email: string;
  password: string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  hide: boolean;

  constructor(public authenticationService: AuthenticationService,
    private router: Router, 
    private _formBuilder: FormBuilder
    ) {}

  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }
  goDash(){
    this.router.navigate(['/dashboard']);
  }

  // /Sign in with Google
  GoogleAuth() {
     return this.authenticationService.AuthLogin(new auth.GoogleAuthProvider());
  }  
  FacebookAuth() {
     return this.authenticationService.AuthLogin(new auth.FacebookAuthProvider());
  }  
  
  // loginGoogle() {
  //   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }

  signIn() {
    this.authenticationService.SignIn(this.email, this.password);
  }

  signOut() {
    this.authenticationService.SignOut();
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}