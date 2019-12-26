import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../shared/authentication.service'
import { RegisterService } from './user.service';
import { Usersite } from './usersite';
import {TranslateService} from '@ngx-translate/core';
import {FormBuilder,FormControl,FormGroup, Validators, } from '@angular/forms';


import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
const moment = _rollupMoment || _moment;

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
  selector: 'app-user-register',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
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


export class PlayersRegisterComponent implements OnInit {
  
  email: string;
  password: string;
  isLinear = true;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  

  
  constructor(public authenticationService: AuthenticationService, 
    private RegisterService: RegisterService,
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
      // this.firstFormGroup = this._formBuilder.group({
      //   username: ['', Validators.required]
      // });
      // this.secondFormGroup = this._formBuilder.group({
      //   secondCtrl: ['', Validators.required]
      // });

    }
    countries: country[] = [
      {value: 'city 1', viewValue: 'city 2'},
      {value: 'city 2', viewValue: 'city 2'},
      {value: 'city 3', viewValue: 'city '}
    ];
    areas: area[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
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
  