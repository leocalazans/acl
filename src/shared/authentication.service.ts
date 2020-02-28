import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router:Router
    ) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    sessionStorage.removeItem('SingUpError');
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
        // this.router.navigate(['/dashboard']);
        return res;

      })
      .catch(error => {
        sessionStorage.setItem('SingUpError', error.message);
        console.log('Something is wrong:', error.message);
        return error.message;
      }); 
      return 'teste';   
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
      localStorage.clear();
      sessionStorage.clear();
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
        console.log(user);
        (user.email.length) ? sessionStorage.setItem('userMail', user.email): null;
        (user.displayName.length) ? sessionStorage.setItem('userName', user.displayName): null;

    }).catch((error) => {
        console.log(error);

    })
  }

}
