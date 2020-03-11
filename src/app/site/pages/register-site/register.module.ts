import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule} from './register-routing.module';
import { UserRegisterComponent} from './users/user/user.component'
import { PlayersRegisterComponent} from './players/players/players.component'
import { PartnershipComponent } from './partnership/partnership/partnership.component'

import { TranslateModule, TranslateLoader} from "@ngx-translate/core";
import { TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { RegisterSiteComponent} from './register-site.component'
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatStepperModule} from '@angular/material/stepper';
import { MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatRadioModule} from '@angular/material/radio';
import { MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const createTranslateLoader = (http:HttpClient) =>{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}; 

@NgModule({
  declarations: [
    RegisterSiteComponent,
    UserRegisterComponent,
    PlayersRegisterComponent,
    PartnershipComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule, 
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
