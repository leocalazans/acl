import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
// import { RegisterService } from '../user.service';
// import { Usersite } from '../usersite';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User>;
    // usersite: Usersite = new Usersite();

  constructor(
    // private RegisterService: RegisterService,
    private angularFireAuth: AngularFireAuth,
    private router:Router
    ) {
    this.userData = angularFireAuth.authState;
  }
  save() {
    // this.RegisterService.createCustomer(this.usersite);
    // this.usersite = new Usersite();
  }
  /* Sign up */
  SignUp(email: string, password: string) {
    sessionStorage.removeItem('SingUpError');
    sessionStorage.removeItem('SingUpSucess');
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        // console.log('Successfully signed up!', res);
        sessionStorage.setItem('SingUpSucess', email);
        return res;

      })
      .catch(error => {
        sessionStorage.setItem('SingUpError', error.message);
        console.log('Something is wrong:', error.message);
        return error.message;
      }); 
      return 0;   
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        console.log('Something is wrong:',err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
    this.router.navigate(['/']);

  }  

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  AuthLogin(provider) {
    return this.angularFireAuth.auth.signInWithPopup(provider)
    .then((result) => {
        var user = result.user;
        console.log('You have been successfully logged in!');
        (user.email.length) ? sessionStorage.setItem('userMail', user.email): null;

    }).catch((error) => {
        console.log(error);

    })
  }

}
