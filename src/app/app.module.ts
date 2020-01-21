import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

/* Firebase services */
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

// Firebase modules

import { AngularFirestoreModule, FirestoreSettingsToken  } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SiteModule } from './site/site.module';


// editi services

// import { EditComponent } from './users/edit/edit.component';
// import { ListComponent } from './users/list/list.component';

// editi services

// import { ListComponent } from './match/list/list.component';
/* Auth service */
import { AuthenticationService } from '../shared/authentication.service';
import { ServiceWorkerModule } from '@angular/service-worker';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminModule } from './admin/admin.module';
import { PartnershipComponent } from './pages/partnership/partnership.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PartnershipComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SiteModule,
    AdminModule

  ],
  exports:[
    // MatTableModule
  ],
  providers: [AuthenticationService, { provide: FirestoreSettingsToken, useValue: {}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
