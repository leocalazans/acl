import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule} from './register-routing.module'

import { TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HttpClientModule,HttpClient } from '@angular/common/http';


export const createTranslateLoader = (http:HttpClient) =>{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps:[HttpClient]
      }

    })
  ]
})
export class RegisterModule { }
