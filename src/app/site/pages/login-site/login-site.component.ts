import { Component, OnInit } from '@angular/core';
import {Injectable, Inject} from '@angular/core';

import { AuthenticationService } from '../../../../shared/authentication.service';
import * as firebase from 'firebase';
import { auth } from 'firebase/app';
import { Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
export interface errorlogin{
  hasHerror:boolean,
  errorMessage: string;  
}
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

  // public errologin: Object = {
  //   hasHerror: false ,
  //   errorMessage: '',
  // };

  errorlogin: errorlogin[] = [
    {hasHerror: true , errorMessage: ''},
  ];
  
  email_ = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email_.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email_.hasError('email') ? 'Not a valid email' : '';
  }
  

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
    this.router.navigate(['/mysoccer/partner']);
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

  returnedData: any;

  signIn() {
    
    const singIn = this.authenticationService.SignIn(this.email, this.password);

    console.log(this.errorlogin["errorMessage"]); 
    // sessionStorage("erroLogin");
    this.errorlogin['hasHerror'] = true;
    if (sessionStorage.getItem("erroLogin")) {
      this.errorlogin['errorMessage'] = sessionStorage.getItem("erroLogin");
      sessionStorage.clear();
    }else{
      sessionStorage.setItem('reloadPage', 'reloader' );

      this.router.navigate(['/mysoccer/']);
      // window.location.href="/mysoccer/";

    }

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