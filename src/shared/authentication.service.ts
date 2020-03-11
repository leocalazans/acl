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
  logged: boolean = false;
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router:Router
    ) {
    this.userData = angularFireAuth.authState;
    console.log(this.router.url);
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
        sessionStorage.setItem('userMail', email);
        // sessionStorage.setItem('userName', res.fullName);

        return res;

      })
      .catch(error => {
        sessionStorage.setItem('SingUpError', error.message);
        console.log('Something is wrong:', error.message);
        return error.message;
      }); 
      this.logged = true;

      return 'teste';   
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
        sessionStorage.setItem('userMail', email);
        console.log(res);
        // (user.displayName.length) ? sessionStorage.setItem('userName', user.displayName): null;
      })
      .catch(err => {
        console.log('Something is wrong:',err.message);
        sessionStorage.setItem("erroLogin",err.message );
        return 0;
      });
      this.logged = true;
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/']);
      this.logged = false;

  }  

  GoogleAuth() {
    this.logged = true;

    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  FacebookAuth() {
    this.logged = true;

    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  AuthLogin(provider) {
    return this.angularFireAuth.auth.signInWithPopup(provider)
    .then((result) => {
        var user = result.user;
        console.log('You have been successfully logged in!');
        this.logged = true;
        console.log(user);
        (user.email.length) ? sessionStorage.setItem('userMail', user.email): null;
        (user.displayName.length) ? sessionStorage.setItem('userName', user.displayName): null;

    }).catch((error) => {
        console.log(error);
    })
  }

}
