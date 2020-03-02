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
    MatListModule,
        FormsModule, 
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    AdminRoutingModule
  ]
})
export class PartnerAdminModule { }
