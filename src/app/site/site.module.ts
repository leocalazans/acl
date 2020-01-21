import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SiteRoutingModule } from './site-routing.module';
import { AppComponent } from './../app.component';
import { CommonModule } from '@angular/common';

/* Firebase services */
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../../environments/environment';

// Firebase modules

import { AngularFirestoreModule, FirestoreSettingsToken  } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';


// editi services
// import { EditComponent } from './users/edit/edit.component';
// import { ListComponent } from './users/list/list.component';

// editi services

// import { ListComponent } from './match/list/list.component';
/* Auth service */
import { AuthenticationService } from '../../shared/authentication.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuSiteComponent } from './shared/menu-site/menu-site.component';

// import { LoginSiteComponent } from './pages/login-site/login-site.component';
// import { SiteComponent } from './site.component';

// Angular material designer inports
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatchipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatIconModule} from '@angular/material/icon';

import {MatInputModule} from '@angular/material/input';

import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';

// import module 
import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

// import { RegisterSitetesteSiteComponent } from './register-siteteste-site/register-siteteste-site.component';
import { PagesModule } from './pages/pages.module'


// customer
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
// import { DashboardComponent } from './admin/dashboard/dashboard.component';

// import table results 


// forms

// translate
import { TranslateModule, TranslateLoader} from "@ngx-translate/core";

import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import { HttpClientModule,HttpClient } from '@angular/common/http';

import { ScoreComponent } from './score/score.component';
// import { PartnershipComponent } from './pages/register-site/partnership/partnership/partnership.component';
// import { PlayersRegisterComponent } from './pages/register-site/players/players/players.component';
// import { UserRegisterComponent } from './pages/register-site/users/user/user.component';
import { NavFooterComponent } from './shared/footer/nav-footer.component';
import { FooterSiteComponent } from './shared/footer/footer-site/footer-site.component';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SiteComponent } from './site.component';
// import { GooglePlacesComponent } from './register-site/players/google-plaes';
export const createTranslateLoader = (http:HttpClient) =>{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}; 

@NgModule({
  declarations: [
    // AppComponent,
    MenuSiteComponent,
    // RegisterSitetesteSiteComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent,
    // ListComponent,
    // DashboardComponent,
    ScoreComponent,
    // PlayersRegisterComponent,
    // UserRegisterComponent,
    NavFooterComponent,
    SiteComponent,
    // GooglePlacesComponent
    FooterSiteComponent,
  ],
  imports: [
    BrowserModule,
    SiteRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatListModule,
    MatMenuModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    // MatchipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    CommonModule,
    AngularFirestoreModule, 
    AngularFireStorageModule,
    HttpClientModule,
    PagesModule,
    
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps:[HttpClient]
      }

    }),
    
    // NbThemeModule.forRoot({ name: 'default' }),
    
    // NbLayoutModule,
    
    // NbEvaIconsModule
    
  ],
  exports:[
    MatTableModule,
    SiteComponent
  ],
  providers: [AuthenticationService, { provide: FirestoreSettingsToken, useValue: {}}],
  bootstrap: [AppComponent]
})
export class SiteModule { }
