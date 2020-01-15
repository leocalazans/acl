import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from './shared/authentication.service'
import { RegisterService } from './user.service';
import { Usersite } from './usersite';
import { Router } from '@angular/router';
// import {LocalStorageService, LocalStorage} from 'ng2-webstorage';

import {TranslateService} from '@ngx-translate/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserRegisterComponent implements OnInit {
  
  email: string;
  password: string;
  error: string;
  hide: boolean;
  constructor(public authenticationService: AuthenticationService, 
    private RegisterService: RegisterService,
    private translate: TranslateService,
    private router:Router)
    {
      if (localStorage.getItem('locale')) {  
        const browserLang = localStorage.getItem('locale');  
        translate.use(browserLang.match(/en_US|pt_BR/) ? browserLang : 'en_US');  
      } else {  
        localStorage.setItem('locale', 'en_US');  
        translate.setDefaultLang('en_US');  
      }  
      translate.get(['Female', 'Male']).subscribe(
        values => {
          this.seasons = Object.keys(values).map(key => values[key]);
        }
     );
    }
    

    
    signUp() {
      this.authenticationService.SignUp(this.email, this.password);
        // sessionStorage.removeItem('SingUpError');
        // sessionStorage.removeItem('SingUpSucess');

        let HasSingUp =setInterval(() => {
          if (sessionStorage.getItem('SingUpError')) {
            this.error = sessionStorage.getItem('SingUpError');
            clearInterval(HasSingUp);
          }
          if (sessionStorage.getItem('SingUpSucess')) {
            this.router.navigate(['/dashboard']);
            this.save();
            clearInterval(HasSingUp);
          }
        }, 50);
    
    }
    
    // favoriteSeason: string;
    seasons: string[] = ['Female', 'Male'];
   
    usersite: Usersite = new Usersite();
    submitted = false;
    
    newCustomer(): void {
      this.submitted = false;
      this.usersite = new Usersite();
    }
    
    save() {
      this.RegisterService.createCustomer(this.usersite);
      this.usersite = new Usersite();
    }
    
    onSubmit() {
      // event: Event
      // event.preventDefault();
      console.log('submited');
    }
    ngOnInit() {
    }
    
  }
  