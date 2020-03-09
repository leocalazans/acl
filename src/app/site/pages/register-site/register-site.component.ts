import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../shared/authentication.service';
import { RegisterService } from './users/user/user.service';
import { Usersite } from './users/user/usersite';
import { TranslateService} from '@ngx-translate/core';
import { Location} from '@angular/common';

@Component({
  selector: 'app-register-site',
  templateUrl: './register-site.component.html',
  styleUrls: ['./register-site.component.scss']
})
export class RegisterSiteComponent implements OnInit {
  
  email: string;
  password: string;
  
  constructor(public authenticationService: AuthenticationService, 
    private RegisterService: RegisterService,
    private translate: TranslateService,
    private _location: Location)
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
      this.submitted = true;
      this.save();
      
      this.email = ''; 
      this.password = '';
    }
    
    // favoriteSeason: string;
    seasons: string[] = ['Female', 'Male'];
  
    usersite: Usersite = new Usersite();
    submitted = false;
    
    backClicked() {
      this._location.back();
    }
        
    newCustomer(): void {
      this.submitted = false;
      this.usersite = new Usersite();
    }
    
    save() {
      this.RegisterService.createCustomer(this.usersite);
      this.usersite = new Usersite();
    }
    
    // onSubmit() {
    
    // }
    ngOnInit() {
    }
    
  }
  