import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';

import { AdminRoutingModule } from './admin-partner-routing.module';

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { TournamentsComponent } from './tournaments/tournaments.component';
import { CreatingTournamentComponent } from './tournaments/creating-tournament/creating-tournament.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule} from '@angular/material/input';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { PartnerComponent } from './partner.component'; 
import { AgmCoreModule } from '@agm/core';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { AdminComponent } from '../admin.component';
import { AdminModule } from '../admin.module';

@NgModule({
  declarations: [
    TournamentsComponent,
    CreatingTournamentComponent,
    PartnerComponent,
  ],
  exports: [
    MatCardModule,
    MatDividerModule
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
        FormsModule, 
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    AdminModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBzFmg5XDNvt6deMUPTbsjG1U6iLh_5zs4",
      libraries: ["places"]
    }),
    AdminRoutingModule
  ]
})
export class PartnerAdminModule { }
