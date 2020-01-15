



import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from './shared/authentication.service'
import { RegisterService } from './user.service';
import { Usersite } from './usersite';
import {TranslateService} from '@ngx-translate/core';
import {FormBuilder,FormControl,FormGroup,FormGroupDirective, NgForm, Validators, } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';


import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
const moment = _rollupMoment || _moment;

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class InputErrorStateMatcherExample {
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // matcher = new MyErrorStateMatcher();
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
import { from } from 'rxjs';

export interface area {
  value: string;
  viewValue: string;
}
export interface country {
  value: string;
  viewValue: string;
}
export interface state {
  value: string;
  viewValue: string;
}
export interface city {
  value: string;
  viewValue: string;
}
export interface shirt {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})


export class PartnershipComponent implements OnInit {
  
  email: string;
  password: string;
  isLinear = true;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  userpass: string;
  EnableInput: boolean= true;
  error: string;
  hide: boolean;
  firstFormGroup: string;
  secondFormGroup: string;
  address: string;
  
  constructor(public authenticationService: AuthenticationService, 
    private RegisterService: RegisterService,
    private router:Router,
    private translate: TranslateService,
    private _formBuilder: FormBuilder )
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
    
    // signUp() {

    //   this.authenticationService.SignUp(this.email, this.password);
    //   this.submitted = true;
    //   this.save();
      
    //   this.email = ''; 
    //   this.password = '';
    // }
    signUp() {
      this.authenticationService.SignUp(this.email, this.password);
        let HasSingUp = setInterval(() => {
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
    pTypes: string[] = ['Person', 'Company'];
    
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
    
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    saverange(event: string) {
      if (event.length >= 6) {
        this.EnableInput = false
      }
      if (event.length <= 6) {
        this.EnableInput = true

      }
    }

    saveArea(event){
      console.log(event.value);
      this.usersite.PhoneNumberArea = event.value;
    }

    saveCountry(event){
      console.log(event.value);
      this.usersite.country = event.value;
    }
    saveState(event){
      console.log(event.value);
      this.usersite.state = event.value;
    }
    saveCity(event){
      console.log(event.value);
      this.usersite.city = event.value;
    }
    saveShirtSize(event){
      console.log(event.value);
      this.usersite.t_shit_size = event.value;
    }

    matcher = new MyErrorStateMatcher();
    ngOnInit() {


    }

    countries: country[] = [
      {value: 'UNITED_STATES', viewValue: 'United States'},
      {value: 'BRAZIL', viewValue: 'Brasil'},
      {value: 'ARGENTINA', viewValue: 'Argentine '},
      {value: 'CANADA', viewValue: 'Canada '},
      {value: 'GERMANY', viewValue: 'Germany '},
      {value: 'UNITED_KINGDON', viewValue: 'United Kingdon '}
    ];

    areas: area[] = [
      {value: '11', viewValue: '11'},
      {value: '12', viewValue: '12'},
      {value: '13', viewValue: '13'}
    ];

    states: state[] = [
      {value: 'sp', viewValue: 'São Paulo'},
      {value: 'rj', viewValue: 'Rio de Janeiro'},
      {value: 'mj', viewValue: 'Minas Gerais'}
    ];

    citis: city[] = [
      {value: 'sp', viewValue: 'Mogi'},
      {value: 'rj', viewValue: 'Arujá'},
      {value: 'mj', viewValue: 'São Paulo'}
    ];

    shirts: shirt[] = [
      {value: 'P', viewValue: 'P'},
      {value: 'M', viewValue: 'M'},
      {value: 'G', viewValue: 'G'}
    ];

    date = new FormControl(moment());

    chosenYearHandler(normalizedYear: Moment) {
      const ctrlValue = this.date.value;
      ctrlValue.year(normalizedYear.year());
      this.date.setValue(ctrlValue);
    }
  
    chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
      const ctrlValue = this.date.value;
      ctrlValue.month(normalizedMonth.month());
      this.date.setValue(ctrlValue);
      datepicker.close();
    }
    
  }
  