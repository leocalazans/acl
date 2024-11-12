import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { AuthenticationService } from '../../../../shared/authentication.service';
import * as firebase from 'firebase';
import { auth } from 'firebase/app';
import { Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RegisterService } from './user.service';
import { ControlService } from '../../shared/control/control.service';

import { Usersite } from './usersite';

import { map } from 'rxjs/operators';

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
  showDash : boolean ;


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
    private RegisterService: RegisterService,
    private router: Router, 
    private controlService :ControlService,
    private _formBuilder: FormBuilder
    ) {

    }

  // signUp() {
  //   this.authenticationService.SignUp(this.email, this.password);
  //   this.email = ''; 
  //   this.password = '';
  // }
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

  Usersite: any;

  signIn() {
    sessionStorage.clear();
    
    this.authenticationService.SignIn(this.email, this.password);

    console.log(this.errorlogin["errorMessage"]); 
    // sessionStorage("erroLogin");

    this.errorlogin['hasHerror'] = true;

    setTimeout(()=>{    //<<<---    using ()=> syntax
      if (sessionStorage.getItem("erroLogin")) {
        this.errorlogin['errorMessage'] = sessionStorage.getItem("erroLogin");
      }else{
        sessionStorage.setItem('reloadPage', 'reloader' );
        // showDash
        // showdash
        this.showDash = true;
        this.controlService.showdash(this.showDash);
        this.getUserInfos(this.email);

      }
    }, 2400);

  }

  getUserInfos(usermail){
    this.RegisterService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(customers => {

      this.Usersite = customers;
      //  permissão usuario
      // let perm = [
      //   '182be0c5cdcd5072bb1864cdee4d3d6e',
      //   'b6d767d2f8ed5d21a44b0e5886680cb9',
      //   'f7177163c833dff4b38fc8d2872f1ec6',
      //   'b53b3a3d6ab90ce0268229151c9bde11'
      // ];
      
      let home = [
        '/mysoccer/partner/',
        '/mysoccer/player/',
        '/mysoccer/referee/',
        '/mysoccer/'
      ];

      customers.forEach(customer => {
        if(usermail === customer.Email){
          console.log('this.Usersite');
          // alert(customer.userName);
          // alert(customer.Email);
          
          if (customer.permision === 22) {
            this.router.navigate([home[0]]);
          }
          if (customer.permision === 44) {
            alert(home[1]);
          }
          if (customer.permision === 55) {
            alert(home[2]);
          }
          if (customer.permision === 33) {
            alert(home[3]);
          }
          return false;
        }
        
      });
    });
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